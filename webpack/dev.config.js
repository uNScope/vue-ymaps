const merge = require('webpack-merge')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./base.config')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  entry: {
    app: './static/app.js'
  },
  output: {
    path: resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: false
        }
      }
    }, {
      test: /\.(scss)$/,
      use: {
        loader: 'sass-loader'
      }
    }, {
      test: /\.(css)$/,
      use: {
        loader: 'css-loader'
      }
    }]
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: '/index.html' },
      ],
    },
    disableHostCheck: true,
    hot: true,
    contentBase: false,
    host: '0.0.0.0',
    port: 8080,
    publicPath: '/',
    quiet: false,
    watchOptions: {
      poll: false
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: resolve('./dist/index.html'),
      template: resolve('./static/index.html'),
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: resolve('./assets'),
      to: resolve('./dist'),
      ignore: ['.*']
    }])
  ],
  devtool: '#source-map'
})
