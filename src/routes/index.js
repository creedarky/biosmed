'use strict';

var Config = require('../config/config.js')();

var Routes = function(app) {
  app.get('/', function(req, res) {
    res.render('index.jade', {});
  });

  app.get('/*', function(req, res, next) {
    var url = req.params[0];
    if (url.indexOf('.') < 0) {
      if (url.slice(-1) === '/') {
        res.render(req.params[0] +  'index.jade', {})
      } else {
        res.render(req.params[0] + '.jade', {});
      }

    } else {
      next();
    }
  });
};

module.exports = Routes;
