const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path')
// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader')
 

module.exports = {
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  entry: {
    index: './src/index',
    styles: [
      'normalize.css',
      './src/brand.pcss',
      './src/components/index',
      './src/lib/index'
    ]
  },

  output: {
    path: path.resolve('./bundle'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: false
        }
      },
      {
        test: /\.p?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ]
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],

  devServer: {
    publicPath: '/bundle/',
    contentBase: path.join(__dirname, '_site'),
    overlay: {
      errors: true,
      warnings: true
    },
    stats: 'minimal',
    compress: false,
    hot: false,
    host: '0.0.0.0',
    port: 4011
  }

};
