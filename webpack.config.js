const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: APP_DIR + '/index.jsx',
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}