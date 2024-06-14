import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/lib/prisma";

const prisma = new PrismaClient();

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

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth;
export { handler as GET, handler as POST };
