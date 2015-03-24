/**
 * Created by joel.gear on 3/24/2015.
 */
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var smallSchema = new Schema({
  name: {type: String, default: 'I am a name'}
});

var ExampleSchema = new Schema({
  //_id is the prime id for all mongoose objects
  item: {type: String, default: 'Testing this type stirng'},//a basic string
  dateArray : [{type : Date, default : Date.now}],//an array of date objects
  digit: Number,//number iwht no defautl value, will be null(undefined) if not assigned
  mix: mongoose.Schema.Types.Mixed,//this is like a js array, but any object you want in it
  smallSchemas: [smallSchema], //an array of smallSchemas
  smallSchema: smallSchema
});

module.exports = mongoose.model("Example", ExampleSchema);//this is using node, exports, this is how we will use this file with the require() functionality
