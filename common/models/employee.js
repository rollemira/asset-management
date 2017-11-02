'use strict';

module.exports = function(Employee) {
  Employee.getTotalAssetCost = (id, cb) => {
    const filter = {
      include: {
        relation: 'assets',
        scope: {
          fields: ['purchasePrice']
        }
      }
    };

    Employee.findById(id, filter).then((item) => {
      item.assets.find().then((assets) => {
        let total = 0;
        for (let i=0;i<assets.length;i++) {
          total += assets[i].purchasePrice;
        }
        return cb(null, total);
      }).catch((err) => {if (err) throw err;});
    }).catch((err) => {if (err) throw err;});
  };

  Employee.remoteMethod('getTotalAssetCost', {
    description: 'Gets the total cost of assets for an Employee',
    accepts: {
      arg: 'id',
      type: 'string',
      required: true,
      http: {
        source: 'path'
      }
    },
    http: {
      path: '/:id/assets/totalcost',
      verb: 'GET'
    },
    returns: {
      arg: 'amount',
      type: 'number'
    }
  });
};
