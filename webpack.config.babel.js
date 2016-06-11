const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/dashboard/index'
  ],
  output: {
    path: path.join(__dirname, 'static/'),
    filename: 'dashboard.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    process.env.NODE_ENV === 'production'
      ? new webpack.optimize.UglifyJsPlugin({minimize: true})
      : () => {}
  ],
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : 'cheap-module-source-map',
  debug: process.env.NODE_ENV !== 'production'
}
