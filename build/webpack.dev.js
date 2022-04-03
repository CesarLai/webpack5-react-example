const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base')

const CONTEXT_PATH = path.resolve(__dirname, '../')
const OUTPUT_PATH = path.resolve(CONTEXT_PATH, 'dist')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/entry.tsx',
  output: {
    path: OUTPUT_PATH,
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
      ignoreOrder: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    open: true,
    // historyApiFallback: true
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: '/index.html' }]
    }
  },
  optimization: {
    moduleIds: 'named'
  }
})
