'use strict';

var Config = require('../config/config.js')();

var Routes = function(app) {
  app.get('/', function(req, res) {
    res.render('index.jade', {});
  });

  app.get('/*', function(req, res) {
    res.render(req.params[0] + '.jade', {});
  });
};

module.exports = Routes;
