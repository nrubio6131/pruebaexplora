/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // si usas Static Export (para GitHub Pages)
  basePath: '/pruebaexplora',
  assetPrefix: '/pruebaexplora/',
  trailingSlash: true, // importante para GitHub Pages
}

module.exports = nextConfig
