/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    APP_BASE_URL:  'https://atoovis-server.herokuapp.com/v1'
  },
}
