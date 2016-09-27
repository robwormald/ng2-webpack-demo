const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './app/main.ts',
  output: {
    path: '/dist',
    publicPath: 'dist/',
    filename: 'app.main.js'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/.*/, path.resolve(__dirname, './app'), []),
  ],
  module: {
    loaders: [
    {
      test: /\.ts$/,
      loaders: ['ts-loader', 'angular2-template-loader'],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    {
      test: /\.(html|css)$/,
      loader: 'raw-loader'
    }
  ]
  },
  devServer: {
    historyApiFallback: true
  }
};
