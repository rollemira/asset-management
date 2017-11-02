'use strict';
const applyValidations = require('./assset-validations');
const applyMethods = require('./asset-methods');

module.exports = function(Asset) {
  applyValidations(Asset);
  applyMethods(Asset);
};
