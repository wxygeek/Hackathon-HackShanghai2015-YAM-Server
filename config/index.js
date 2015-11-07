'use strict';

var path = require('path');
var copy = require('copy-to');

var config = {};

config.keys = ['SSTC', 'ortjyh343'];
config.debug = true;
config.port = 7777;

if (process.env.NODE_ENV === 'production') {
  var customConfig = {};
  try {
    customConfig = require(path.join(__dirname, './config.js'));
  } catch (err) {
    // ignore error
  }
  copy(customConfig).override(config);
}

module.exports = config;