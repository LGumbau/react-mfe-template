var path = require('path');
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    module: false,
    filename: 'app.bundle.js'
  },
  
  module: { 
    rules: [ 
      { test: /\.js$/, 
        exclude: /(node_modules|bower_components)/, 
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}]]
          } 
        } 
      },
      {
        test: /\.css$/,
        use:  ["style-loader", "css-loader"]
      },
    ] 
  },

  mode,
    devtool: prod ? false : 'source-map',
    devServer: {
        hot: true,
        headers: {

            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"

        }

    }

};