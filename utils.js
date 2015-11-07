'use strict';

var url = require('url');
var config = require('./config');

exports.getFileUrl = function(fileKey) {
  return "http://localhost:7777/img/" + fileKey;
};