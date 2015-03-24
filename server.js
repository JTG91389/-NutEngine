/**
 * Created by joel.gear on 3/24/2015.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var BodyParser = require("body-parser");
//var session = require('express-session');
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: true
}));

//connections to db's, not needed, will be doen in module.js
//mysql bookshelf connection for local
var connectionString = "" || "";//no connection string for a local host
//var knex = require('knex')({
//  client: 'mysql',
//  connection: {
//    host     : '127.0.0.1',
//    user     : 'root',
//    password : 'JG3817qz',
//    database : 'mlbdb',
//    charset  : 'utf8'
//  }
//});
//var bookShelf = require('bookshelf')(knex);

//mongodb connection for local
//var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost:27017');


//routes
var Example = require("./routes/mongoose/exampleMongoose.js");

var example = new  Example(connectionString);

//mongo crud
app.get("/examples", example.get);
app.post("/examples", example.get);
app.post("/examples/add", example.add);
app.put("/examples", example.update);
app.post("/examples/remove", example.remove);

//bookshelf crud



app.listen(3000, function() {
  console.log("✔ Express server listening on port %d in %s mode", 3000, app.get('env'));
});
