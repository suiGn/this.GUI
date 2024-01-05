const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js', // Main entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'this.gui.js', // Output file
    library: 'thisGui', // Global var when included via script tag
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'this.gui.css', // Output CSS file
    }),
  ],
};
