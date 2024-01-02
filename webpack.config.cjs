const path = require('path');

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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
