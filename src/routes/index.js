'use strict';

var Config = require('../config/config.js')();

var Routes = function(app) {
  app.get('/', function(req, res) {
    res.render('index.jade', {});
  });
};

module.exports = Routes;
