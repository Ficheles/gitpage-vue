module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/gitpage-vue/' : '/',
  outputDir: 'docs',
}
