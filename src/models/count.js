'use strict';

var count = 0;

module.exports = {
  increment: function() {
    count += 1;
    return count;
  },
  get: function() {
    return count;
  }
};
