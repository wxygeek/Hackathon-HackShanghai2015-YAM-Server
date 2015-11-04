'use strict';

var server = require('./server');
var http = require('http');
var config = require('./config');

server.listen(config.port);
console.log('HTTP server is listening %s.', config.port);