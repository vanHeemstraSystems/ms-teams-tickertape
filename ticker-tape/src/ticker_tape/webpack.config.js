// See https://createapp.dev/webpack/react--babel--react-hot-loader
const path = require('path')
const config = {
  entry: './components/index.js',
  devtool: 'inline-nosources-cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: './static/js'
    }
  }
}

module.exports = config
