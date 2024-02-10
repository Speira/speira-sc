const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: '../src/index.ts',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    liveReload: true,
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: [
    {
      react: 'react',
      'react-dom': 'react-dom',
    },
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
