'use strict';

var router = require('koa-router')();
var middlewares = require('./middlewares');
var path = require('path');

exports.router = router;
exports.serverRouter = router.routes();