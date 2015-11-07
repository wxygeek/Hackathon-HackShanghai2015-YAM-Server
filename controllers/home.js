'use strict';

var router = require('../router').router;
var utils = require('../utils');

router.get('/', function*() {
  this.body = 'YAM';
});