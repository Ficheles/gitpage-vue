module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  outputDir: 'docs',
  productionSourceMap: false,
  // publicPath: '/gitpage-vue/',
  publicPath: process.env.NODE_ENV === 'production' ? '/gitpage-vue/' : '/',
  runtimeCompiler: true,
}
