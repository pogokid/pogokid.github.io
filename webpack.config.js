const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    styles: [
      'normalize.css',
      './src/brand.pcss',
      './src/components/index.js',
      './src/lib/index.js'
    ]
  },
  output: {
    path: path.resolve('./bundle'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ]
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },
  plugins: [
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
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 4011
  }
};
