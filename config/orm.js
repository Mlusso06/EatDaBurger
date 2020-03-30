// import the connection from the config folder
var connection = require("./connection.js");

var orm = {
    select: function(whatKindofBurger, results) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatKindofBurger, results], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
// need to use the below methods
    * `selectAll()`
    * `insertOne()`
    * `updateOne()`



}





// now exporting everything we have created methodes for to execute to the MySQl DB
module.exports = orm;