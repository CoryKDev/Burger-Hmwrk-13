const connection = require("./connection");

function questionMarks(num) {
    let arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    let arr = [];

    for (var key in ob) {
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                Value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString)

        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    delete(tableName, condition, cb) {
        const statement = connection.query("DELETE FROM ?? WHERE" + condition, tableName, (err, results) => {
            if (err) {
            throw err;
            cb(results);
            }
        });
        console.log(statement.sql)
    }
};

module.exports = orm;