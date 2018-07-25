const path = require('path')
const { resolve } = require('./utils')

module.exports = {
  context: resolve('./'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('./'),
      resolve('./node_modules')
    ],
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      }
    }],
  }
}
