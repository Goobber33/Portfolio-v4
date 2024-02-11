/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/main',
        },
      ];
    },
  };
  
  export default nextConfig;
  