'use strict';

var path = require('path');
var copy = require('copy-to');

var config = {};

config.db = {
  host: 'localhost',
  database: 'sstc',
  dialect: 'sqlite',
  pool: {
    maxConnections: 10,
    minConnections: 1,
    maxIdleTime: 10000
  },
  logging: false,
  storage: path.join(__dirname, '../sstc.sqlite')
};

config.keys = ['SSTC', 'ortjyh343'];
config.debug = true;
config.port = 8080;

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