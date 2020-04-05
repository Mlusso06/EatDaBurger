// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgerInfo = {
    all: function (cb) {
        orm.all('burgers', fuction(res) {
            cb(res);
        });
    },
    create: function (),


    update: fuction()
}






// Export the database functions for the controller .
module.exports = burgerInfo;