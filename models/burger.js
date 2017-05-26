// Import the ORM to create functions that will interact with the database.
Sequelize = require("sequelize");
//var Model = require("../models");
var Model = Sequelize;
var burger = {
  Model.findAll({
})
  },
  // The variables cols and vals are arrays.

  updateOrCreate(
    Model.burger, {burger_name: burger_name}, {devour: devour},
    function () {
        console.log('created');
    },
    function () {
        console.log('updated');
    },
    console.log);

Model.destroy({
    where: {
        id;
    }
})


// Export the database functions for the controller (burger_Controller.js).
module.exports = burger;
