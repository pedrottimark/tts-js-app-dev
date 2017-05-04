var path = require('path');

module.exports = {
  entry: './src/root.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
