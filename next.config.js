/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
   env: {
     APP_BASE_URL:'https://api.otrex.site/v1'
   },
  // webpack(config) {
  //   config.infrastructureLogging = { debug: /PackFileCache/ }
  //   return config;
  // }
  staticPageGenerationTimeout: 1000,
}
