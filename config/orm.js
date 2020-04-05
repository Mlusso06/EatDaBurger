// import the connection from the config folder
var connection = require("../config/connection.js");
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.


// using starter code from the template
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}
// connection for the ORM
var orm = {
    // selecting all the current burgers
    selectAll: function (tableInput, cb) {
        var burgerDb = "SELECT * FROM " + tableInput + ";";
        // the connectin query, and call back this will be used multiple times in each of the functions
        connection.query(burgerDb, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    // now here is where I'm going to insert a new burger
    insertOne: function (table, cols, vals, cb) {
        var burgerDb = "INSERT INTO " + table;

        burgerDb += "(";
        burgerDb += cols.toString();
        burgerDb += ")";
        burgerDb += "VALUES (";
        burgerDb += printQuestionMarks(vals.length);
        burgerDb += ")";

        console.log(burgerDb);

        connection.query(burgerDb, vals, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    // here I need to update the burgers
    updateOne: function (table, objColVals, condition, cb) {
        var burgerDb = "UPDATE " + table;
        burgerDb += "SET";
        burgerDb += objToSql(objColVals);
        burgerDb += " WHERE ";
        burgerDb += condition;

        console.log(burgerDb);
        connection.query(burgerDb, function (err, results) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // add a delete a burger 
    deleteOne: function (table, condition, cb) {
        var burgerDb = "DELETE FROM " + table + "WHERE " + condition;
        console.log(burgerDb);
        connection.query(burgerDb, function (err, results) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};


// now exporting everything we have created methodes for to execute to the MySQl DB
module.exports = orm;