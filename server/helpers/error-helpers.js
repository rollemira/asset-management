module.exports = {
  logError = function(err) {
    console.error(err);
  },
  throwError = function(err) {
    throw err;
  },
  logAndThrow = function(err) {
    logError(err);
    throwError(err);
  }
};
