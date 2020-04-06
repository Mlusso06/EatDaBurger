// import the connection from the config folder
var connection = require("./connection");
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
    all: function (table, cb) {
        var burgerDb = "SELECT * FROM " + table + ";";

        connection.query(burgerDb, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    create: function (table, cols, vals, cb) {
        var burgerDb = "INSERT INTO ?? (??, ??) VALUES(?, ?)";

        connection.query(burgerDb, [table, cols[0], cols[1], vals[0], vals[1]], function (err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    update: function (id, cb) {
        var burgerDb = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(burgerDb, [id], function (err, results) {
            if (err) throw err;
            cb();
        });
    },
    // add a delete a burger 
    delete: function (table, condition, cb) {
        var burgerDb = "DELETE FROM " + table + "WHERE " + condition;
        console.log(burgerDb);
        connection.query(burgerDb, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },

};

module.exports = orm;