'use strict';
const applyValidations = require('./asset-validations');
const applyMethods = require('./asset-methods');

module.exports = function(Asset) {
  applyValidations(Asset);
  applyMethods(Asset);
};
