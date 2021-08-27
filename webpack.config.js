const path = require('path')

module.exports = {
  entry: './src/Akriti.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'Akriti.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Akriti',
    libraryTarget: 'umd',
  },
}
