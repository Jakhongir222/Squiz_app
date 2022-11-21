const { default: App } = require('next/app')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {appDir: true}
}

module.exports = nextConfig
