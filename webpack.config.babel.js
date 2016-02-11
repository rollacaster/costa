import path from 'path'
import webpack from 'webpack'

export default {
  entry: [
    './src/dashboard/index'
  ],
  output: {
    path: path.join(__dirname, 'static/'),
    filename: 'dashboard.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devtool: 'source-map',
  debug: true
}
