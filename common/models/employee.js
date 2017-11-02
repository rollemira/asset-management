'use strict';
const applyMethods = require('./employee-methods');

module.exports = function(Employee) {
  applyMethods(Employee);
};
