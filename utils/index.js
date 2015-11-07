'use strict';

var url = require('url');
var config = require('../config');

exports.getFileUrl = function(fileKey) {
  return url.resolve(config.fileBaseUrl, fileKey);
};