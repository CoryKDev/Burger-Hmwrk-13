const mysql = require('mysql');
require("dotenv").config()

let connection;
if(process.env.asd_asd){
    connection = mysql.createConnection({
        host: "localhost",
        port: 4000,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBDATABASE
    });
}

connnction.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports=connection;