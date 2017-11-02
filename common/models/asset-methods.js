'use strict';

module.exports = function (Asset) {
  // this is how to override a default function
  Asset.on('dataSourceAttached', (obj) => {
    let deleteById = Asset.deleteById;
    Asset.deleteById = (id, auth, cb) => {
      console.log('Asset delete function override!');
      return cb(null);
    };
  });
};
