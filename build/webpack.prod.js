const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base')

const CONTEXT_PATH = path.resolve(__dirname, '../')
const OUTPUT_PATH = path.resolve(CONTEXT_PATH, 'dist')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/entry.js',
  output: {
    publicPath: '/',
    path: OUTPUT_PATH,
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
      ignoreOrder: false
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  devtool: 'source-map'
})
