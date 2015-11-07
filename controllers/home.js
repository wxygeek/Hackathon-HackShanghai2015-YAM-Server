'use strict';

var router = require('../router').router;
var debug = require('debug')('controllers/home');
var utils = require('../utils');

router.get('/', function*() {
  this.body = 'YAM';
});