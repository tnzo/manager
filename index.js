'use strict';

var express 	= require('express');
var bodyParser 	= require('body-parser');
var http		= require('http');
var routes		= require('./routes/routes');
var server 		= express();
var msg;

msg = {	message: 'Seu pedido está em trânsito!'  };

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function (req, res) {
  //res.send('Hello World!');
  res.json(msg)
});

//var routes = require('./API/Routes/Routes'); //importing route
routes(server);

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});