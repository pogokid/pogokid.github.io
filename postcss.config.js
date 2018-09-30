var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var postcssVars = require('postcss-simple-vars');

module.exports = {
  plugins: [
    postcssImport({ addDependencyTo: webpack }),
    require('postcss-nested')(),
    require('postcss-modules-values'),
    postcssVars(),
    require('postcss-custom-properties')(),
    require('postcss-custom-media')(),
    autoprefixer
  ]
}
