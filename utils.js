'use strict';

var url = require('url');
var config = require('./config');

exports.getFileUrl = function(fileKey) {
  return "http://api.itimepost.com:7777/img/" + fileKey;
};