const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'el.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};