'use strict';

var url = require('url');
var config = require('./config');

exports.getFileUrl = function(fileKey) {
  return "http://localhost:8080/static/img/" + fileKey;
};