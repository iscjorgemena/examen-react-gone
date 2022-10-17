/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:['hp-api.herokuapp.com']
  }
}

module.exports = nextConfig
