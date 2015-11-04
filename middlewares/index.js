'use strict';

var isJSON = require('is-json');
var debug = require('debug')('middlewares/index');

//用户登录验证
exports.auth = function*(next) {
  debug('It is auth middleware');

  //TODO

  yield next;
};