var mysql = require('mysql');
const fs = require('fs');

var condb = mysql.createConnection({
    host: "localhost",
    user: "user_db",
    password: "user_pass",
    database: "openmarket"
});

exports.sign_in = (data) => {
    var sql = 'SELECT * FROM customers WHERE email = ? AND password = ?';
    con.query(sql, [email, password], function (err, result) {
        if (err) return false;
        console.log(result);
        return true;
    });
};

exports.sign_up = (data) => {
    var sql = 'INSERT INTO customers (name,first_name,email,password,address) VALUES (?, ?, ?, ?, ?)';
    con.query(sql, [data.name, data.first_name, data.email, data.password, data.address], function (err, result) {
        if (err) throw err;
        console.log(result);
        // return ok if insertion worked
    });
};

