var mysql = require('mysql');
const fs = require('fs');

var condb = mysql.createConnection({
    host: "localhost",
    user: "user_db",
    password: "user_pass",
    database: "openmarket"
});

exports.sign_in = async function (data){
    var sql = 'SELECT * FROM customers WHERE mail = ? AND password = ?';
    return new Promise(function(resolve,reject){
        condb.query(sql, [data.mail, data.password], function (err, result) {
            console.log(result);
            if (Array.isArray(result) && result.length) resolve(true);
            reject(false);
        });
    });
};

exports.sign_up = (data) => {
    var sql = 'INSERT INTO customers (name,first_name,mail,password,address) VALUES (?, ?, ?, ?, ?)';
    condb.query(sql, [data.last_name, data.first_name, data.mail, data.password, data.address], function (err, result) {
        if (err) throw err;
        console.log(result);
        // return ok if insertion worked
    });
};

