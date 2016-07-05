module.exports = {
  entry: './app-client.js',
  test: /\.jsx?$/,         // Match both .js and .jsx files
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
