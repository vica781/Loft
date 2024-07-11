const path = require('path');

module.exports = {
  entry: './static/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
