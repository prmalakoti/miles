'use strict';
const Customer = require('./../model/customer');

exports.findAll = function (req, res) {
  if (!(req.query.productId)) {
    res.send("Please pass the valid parameter, Ex: productId=[1,2] ");
  } else {
    let productIds = req.query.productId.substring(1, req.query.productId.length-1);
    Customer.findAll(productIds, function (err, customer) {
      if (err)
        res.send(err);
      res.send(customer);
    });
  }
};