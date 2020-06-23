const path = require('path')
const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]
module.exports = {
  entry: './assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.join(__dirname, 'app/templates'),
  },
  devServer: {
    before: function(app, server){
      server._watch('./app/templates/**/*.html')
    },
    contentBase: path.join(__dirname, 'app/templates'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader?url=false', {loader:'postcss-loader', options:{plugins: postCSSPlugins}}]
      }
    ]
  }
}