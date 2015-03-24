/**
 * Created by joel.gear on 3/24/2015.
 */
var mongoose = require("mongoose"),
  example = require("../models/exampleMongoose.js");

module.export = Item;

function Item(connection){
  //pass connection string into this item through require([connectionstring]) to connect to mongoose server
  mongoose.connect('mongodb://localhost:27017');
}

Item.prototype = {
  //crud stuff for mongoose
  get: function (req, res) {
    var queryFilter = null;
    if (req.body.filter)
    {
      queryFilter = req.body.filter;//catching filters to be sent to mongo
    }
    example.find(queryFilter, function (err, items) {
      console.log(example);
      res.send(example);//returns the found item
    });
  },

  add: function (req, res) {
    var parmExample = req.body;
    var newExample = new example(parmExample);
    newExample.save(function (err, inexample) {
      if (err) // TODO handle the error
      {
        res.send(500, error);
      }
      else {
        res.send(inexample);
      }
    });
  },

  update: function (req, res) {

    var parmExample = req.body;
    var parmId = parmExample._id
    var newExample = example(parmExample);

    example.findById(parmId, function (err, inexample) {
      if (err) {
        res.send(500, err)
        return;
      }
//sub out the actual values for this object
      if (newExample.item != null) inexample.item = newExample.item;
      if (newExample.digit != null) inexample.digit = newExample.digit;

      inexample.save ( function (err, updatedexample){
        if (err) {
          res.send(500, err)
          return;
        }

        res.send(200, updatedexample);
      });
    });
  },

  remove: function(req, res) {
    var queryFilter = null;
    if (req.body.filter)
    {
      queryFilter = req.body.filter;
    }

    example.remove(queryFilter, function (err, numberAffected) {
      if(err){
        res.send(err);
      }
      else {
        res.send(200, {rows: numberAffected});
      }

    });
  }
}
