var connection = require("./connection.js");


var orm = {
  selectWhere: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function (err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
      });
  },
  createBurger: function(burgers, burger_name, input, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES (?)";
      console.log(queryString);
      connection.query(queryString, [burgers, burger_name, input], function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result)
      });
  },
  devourBurger: function(burgers, ID, cb) {
      var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
      console.log(queryString);
      connection.query(queryString, [burgers, ID], function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
      });
  }
};

module.exports = orm;