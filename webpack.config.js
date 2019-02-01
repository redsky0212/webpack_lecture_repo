const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};