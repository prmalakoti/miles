'use strict';
var dbConn = require('./../config/db');

var Customer = function (customer) {
};

Customer.findAll = function (productIds, result) {
  dbConn.query("SELECT c.name, c.email, c.mobile, p.productName, pl.likes FROM (customers c RIGHT JOIN productsLikes pl ON pl.userId = c.userId) RIGHT JOIN products p ON pl.productId = p.productId WHERE pl.productId IN("+productIds+")", function (err, res) {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Customer;