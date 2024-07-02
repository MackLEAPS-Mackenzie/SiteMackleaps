/** @type {import('next').NextConfig} */
// const nextConfig = {
//     basePath: "/mackleaps",
//     assetPrefix: "http://localhost/mackleaps",
//   };
module.exports = {
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    MONGODB: process.env.MONGODB,
  },
};
