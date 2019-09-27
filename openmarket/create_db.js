var mysql = require('mysql');
const fs = require('fs');

var condb = mysql.createConnection({
    host: "localhost",
    user: "user_db",
    password: "user_pass",
    database: "openmarket"
  });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a database named "mydb":*/
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

condb.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    // let del = 'DROP TABLE customers';
    // condb.query(del, function(err, results, fields) {
    //      if (err) {
    //        console.log(err.message);
    //      }else{
    //        console.log("customer del");
    //      }
    //    });
    // Create customer
    let customers = ` create table customers(
        customer_id int primary key auto_increment,
        name varchar(255) not null,
        first_name varchar(255) not null,
        address varchar(255) not null
    )`;
    condb.query(customers, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("customer create");
      }
    });

    // let deltype = 'DROP TABLE types';
    // condb.query(deltype, function(err, results, fields) {
    //      if (err) {
    //        console.log(err.message);
    //      }else{
    //        console.log("types del");
    //      }
    //    });
    // Create type
    let types = `create table types(
        type_id int primary key auto_increment,
        name varchar(255) not null
    )`;
    condb.query(types, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }else{
        console.log("type create");
        }
    });

    // Create request
    let requests = `create table requests(
        request_id int primary key auto_increment,
        name varchar(255) not null,
        peremption_date date not null,
        customer_id int not null,
        price float not null,
        type_id int not null,
        foreign key (customer_id) references customers(customer_id) on delete cascade,
        foreign key (type_id) references types(type_id) on delete cascade
    )`;
    condb.query(requests, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("request create");
      }
    });
    condb.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });
