'user strict';

const mysql = require('mysql');

//local mysql db connection
const mysqlConn = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b88dcdf579b79e',
    password: 'dac4546c',
    database: 'heroku_3fb3a0c1a7020c0'
});
mysqlConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = mysqlConn;
