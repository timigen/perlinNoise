const path = require('path');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  let config = {
    mode: argv.mode,
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      minimize: isDev ? false: true
    }
  }

  return config;
};