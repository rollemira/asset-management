/*
const app = require('../server');

let dataSource = app.dataSources.sqlserver;

// auto migrate model
dataSource.automigrate('Asset', (err) => {
  if (err) throw err;
  dataSource.disconnect();
});

dataSource.automigrate('Employee', (err) => {
  if (err) throw err;
  dataSource.disconnect();
});

dataSource.isActual(models, (err, actual) => {
  if (!actual) {
    dataSource.autoupdate(models, (err, result) => {
      if (err) throw err;
      dataSource.disconnect();
    });
  }
});
*/
