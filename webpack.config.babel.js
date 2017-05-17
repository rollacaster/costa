const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./src/dashboard/index'],
  output: {
    path: path.join(__dirname, 'static/'),
    filename: 'dashboard.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    process.env.NODE_ENV === 'production'
      ? new webpack.optimize.UglifyJsPlugin({ minimize: true })
      : () => {}
  ],
  devtool: process.env.NODE_ENV !== 'production'
    ? 'source-map'
    : 'cheap-module-source-map',
  debug: process.env.NODE_ENV !== 'production'
}
