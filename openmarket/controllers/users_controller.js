var mysql = require('mysql');
const fs = require('fs');

var condb = mysql.createConnection({
    host: "localhost",
    user: "user_db",
    password: "user_pass",
    database: "openmarket"
});

exports.sign_up = (data) => {
    var sql = 'SELECT * FROM customers WHERE email = ? AND password = ?';
    con.query(sql, [email, password], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
};


