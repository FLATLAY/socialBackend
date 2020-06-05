var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')
var config = require('./config/config');
var certOptions = {
  key: fs.readFileSync(path.resolve('./server.key')),
  cert: fs.readFileSync(path.resolve('./server.crt'))
}

var app = express();


app.get('/', function (request, response) {
	response.sendfile('./index.html')
});

// app.get('/auth', function (request, response) { // IG legacy api
// 	response.send(request.query.code);
// });

// app.get('/login', function (request, response) {
// 	response.redirect(config.instagram.auth_url);
// });

var server = https.createServer(certOptions, app).listen(1337)
console.log('App is runung on port 1337');
