'use strict';

var router = require('../router').router;
var utils = require('../utils');
var urllib = require('urllib');
var moment = require('moment');

router.get('/getHome', function* () {
  this.body = '1';
});

router.post('/postHome', function*() {
  this.body = '1';
});