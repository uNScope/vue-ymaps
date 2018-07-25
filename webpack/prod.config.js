const merge = require('webpack-merge')
const webpack = require('webpack')

const baseConfig = require('./base.config')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  entry: {
    index: './src/index'
  },
  alias: {
    'vue': resolve('./src/stubs/vue')
  },
  output: {
    path: './',
    filename: "index.js",
    library: ["VueYmaps"],
    libraryTarget: "umd"
  },
  noParse: [
    /src\/stubs/
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
