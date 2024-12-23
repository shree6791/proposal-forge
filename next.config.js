const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'header',
              key: 'x-redirected',
              value: '(?!true)',
            },
          ],
          destination: '/:path*',
          permanent: false,
        },
      ];
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname),
        '@/hooks': path.resolve(__dirname, 'hooks')
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
  