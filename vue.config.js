module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gitpage-vue/'
    : '/',
  outputDir: 'docs'
}