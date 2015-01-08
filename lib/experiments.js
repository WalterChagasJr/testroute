"use strict";

exports.splitTraffic = function splitTraffic() {
  return function splitTraffic(req, res, next) {
    console.log("SPLIT TRAFFIC");
    next();

  };
};
