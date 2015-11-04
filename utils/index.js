'use strict';

var url = require('url');
var config = require('../config');

exports.getFileUrl = function(fileKey) {
  return url.resolve(config.fileBaseUrl, fileKey);
};

exports.phoneRegExp = /(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/;