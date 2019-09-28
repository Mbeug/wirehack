var mysql = require('mysql');
const fs = require('fs');
 
var condb = mysql.createConnection({
    host: "localhost",
    user: "user_db",
    password: "user_pass",
    database: "openmarket"
});

exports.get_all_requests = async () => {
    var sql = 'SELECT * FROM requests';
    return new Promise(function(resolve,reject){
        condb.query(sql, [], function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

exports.get_one_requests = (id) => {
    var sql = 'SELECT * FROM requests WHERE request_id = ?';
    condb.query(sql, [id], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
};

exports.create_request = (data) => {
    console.log(data);
    var sql = 'INSERT INTO requests (name, peremption_date, customer_id, price, type_id, description) VALUES (?, ?, ?, ?, ?, ?)';
    condb.query(sql, [data.name, data.peremption_date, data.customer_id, data.price, data.type_id, data.description], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}