import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"; // Ensure bcrypt is imported if used

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        DRT: { label: "DRT", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              DRT: credentials?.DRT,
            },
          });

          if (!user) {
            return null;
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials?.password || "",
            user.password
          );

          if (!isPasswordCorrect) {
            return null;
          }
          return {
            ...user,
            id: String(user.id),
            password: "",
            role: user.role,
          };
        } catch (error) {
          console.error("Error during user authorization:", error);
          return null;
        }
      },
    }),
  ],
  page: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
