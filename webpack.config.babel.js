import path from 'path'

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
  devtool: 'source-map',
  debug: true
}
