'use strict';

var koa = require('koa');
var ms = require('ms');
var staticCache = require('koa-static-cache');
var rt = require('koa-rt');
var logger = require('koa-logger');
var onerror = require('koa-onerror');
var formidable = require('koa-formidable');
var http = require('http');
var path = require('path');
var config = require('./config');
var router = require('./router');
var debug = require('debug')('server');
var middlewares = require('./middlewares');

var app = koa();
app.name = 'YAM';

//cookie加密
app.keys = config.keys;

//抓取错误
if (!config.debug) {
  onerror(app);
}
app.on('error', function(err) {
  console.error(err.stack);
});

//响应计时
app.use(rt());

//静态资源缓存
app.use(staticCache({
  dir: path.join(__dirname, 'static'),
  maxAge: ms('1y'),
  buffer: !config.debug,
  gzip: !config.debug
}));

//显示请求、响应
if (config.debug) {
  app.use(logger());
}

//解析http头
app.use(formidable());

//路由
app.use(router.serverRouter);
require('./controllers/index.js');

module.exports = http.createServer(app.callback());