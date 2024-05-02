const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrite
  // async rewrites() {
  //   return [
  //     {
  //       source: "/main",
  //       destination: "/",
  //     },
  //   ];
  // },
};

module.exports = withPWA(nextConfig);
