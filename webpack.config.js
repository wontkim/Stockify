module.exports = {
    entry: __dirname + '/public/src/index.jsx',
    mode: 'development',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public/dist'
    }
  };