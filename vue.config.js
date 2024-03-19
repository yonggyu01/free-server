const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir : 'docs',

  pluginOptions: {
    webpack: {
      dir: [
        './webpack'
      ],
      devServer: {
        historyApiFallback: true,
      }
    }
  }
})
