/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  env: {
    POKEMON_API_URL: process.env.POKEMON_API_URL,
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    WELCOME_MESSAGE: process.env.WELCOME_MESSAGE
  }
};

module.exports = nextConfig
