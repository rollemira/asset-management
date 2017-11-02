'use strict';

module.exports = function (Asset) {
  // out of standard validation set
  // http://loopback.io/doc/en/lb3/Validating-model-data.html
  Asset.validatesUniquenessOf('serialNumber', {
    message: 'serialNumber is not unique'
  });

  // out of standard validation set
  // http://loopback.io/doc/en/lb3/Validating-model-data.html
  Asset.validatesPresenceOf('employeeId');

  // custom validator
  function descriptionValidator(err) {
    if (this.description === 'description') err();
  };

  Asset.validate('description', descriptionValidator, {
    message: 'invalid description'
  });
};
