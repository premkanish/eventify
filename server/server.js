var express = require('express');
var path = require('path');
var webpack = require('webpack');
var port = process.env.PORT || 8080;
//var mysql = require('mysql');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
console.log("IsDevelopment is ", isDevelopment);
console.log(process.env.NODE_ENV);

var static_path = path.join(__dirname, '../');

require('./middleware.js')(app, express);

app.use(express.static(static_path))
.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: static_path
  });
}).listen(port, function(err) {
  if (err) {
    console.log(error);
  } else {
    console.log('listening at ' + port);
  }
});

if (isDevelopment) {
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('../webpack.config');
  var webpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at localhost:3000');
  });
}




