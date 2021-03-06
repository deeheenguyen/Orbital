var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev.js');
var port = process.env.PORT || 8080;

var app = express();
var compiler = webpack(config);
var bodyParser = require('body-parser');
var users = require('./server/routes/users');

app.use(bodyParser.json());

app.use('/api/users', users);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  console.log('Listening at http://localhost:' + port);
});
