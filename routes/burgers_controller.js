var express = require("exports");
var path = require("path");
var app = express.Router();
var Burger = require("./models/burger.js")

var db = require("../models/burger.js")

module.exports = function(app) {

  // GET route for getting all of the burgers already in db
  app.get("/api/burger", function(req, res) {
    
      db.Burger.findAll({})
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
    })

  };

  // POST route for saving a new burger.
  app.post("/api/burger", function(req, res) {

    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

  //PUT/UPDATE route
  app.put("/api/burger", function(req, res) {

    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
  
};
