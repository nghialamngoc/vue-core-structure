const webpack = require('webpack')

module.exports = {
  filenameHashing: false,
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/variables.scss";`,
      },
    },
  },
  assetsDir: 'statis',
}
