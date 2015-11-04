'use strict';

var compose = require('koa-compose');
var Resource = require('koa-resource-router');
var router = require('koa-router')();
var middlewares = require('./middlewares');
var path = require('path');

var middlewaresArray = [middlewares.auth, router.routes()];

exports.router = router;
exports.serverRouter = compose(middlewaresArray);