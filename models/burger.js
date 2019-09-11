var orm = require("../config/orm.js");

module.exports = {
  create: function(burger_name, cb){
    orm.createBurger('burgers','burger_name', burger_name, cb)
  },
  devour: function(ID, cb){
    orm.devourBurger('burgers', ID, cb)
  },
  select: function(isDevoured, cb){
    orm.selectWhere('burgers','devoured', isDevoured, cb)
  },
  getBurger: function(cb){
    orm.selectWhere('burgers', cb)
  },

  
}