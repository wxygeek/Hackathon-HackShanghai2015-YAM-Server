'use strict';

var router = require('../router').router;
var models = require('../db').models;
var debug = require('debug')('controllers/home');
var utils = require('../utils');

router.get('/', function*() {
  this.body = 'HIT-SSTC';
});