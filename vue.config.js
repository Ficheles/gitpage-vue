module.exports = {
  // publicPath: '/gitpage-vue/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gitpage-vue/'
    : '/' , 

  outputDir: 'docs'
}