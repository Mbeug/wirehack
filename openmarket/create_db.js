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
    let delrequest = 'DROP TABLE requests';
    condb.query(delrequest, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("requests del");
      }
    });
    let del = 'DROP TABLE customers';
    condb.query(del, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("customer del");
      }
    });
    let deltype = 'DROP TABLE types';
    condb.query(deltype, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("types del");
      }
    });
    
    //Create customer
    let customers = ` create table customers(
        customer_id int primary key auto_increment,
        name varchar(255) not null,
        first_name varchar(255) not null,
        mail varchar(255) not null,
        password varchar(255) not null,
        address varchar(255) not null
    )`;
    condb.query(customers, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("customer create");
      }
    });

    // insert create customers
    create_users();

    
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
    // insert type
    create_types();

    let requests = `create table requests(
        request_id int primary key auto_increment,
        name varchar(255) not null,
        peremption_date date not null,
        customer_id int not null,
        price float not null,
        type_id int not null,
        description varchar(255) not null,
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
    create_requests();
    condb.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
    

  });

  function create_users(){
    var customer_1 = "INSERT INTO customers (name,first_name,mail,password,address) VALUES ('Doe','John','john.doe@gmail.com','starwars','Avenue Jule bordet 13 Evere')";
    condb.query(customer_1, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("customer 1 insert");
      }
    });
    var customer_2 = "INSERT INTO customers (name,first_name,mail,password,address) VALUES ('Vador','Dark','dark.vador@gmail.com','starwars','Avenue Jule bordet 42 Evere')";
    condb.query(customer_2, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("customer 2 insert");
      }
    });
  }

  function create_types(){
    var type_1 = "INSERT INTO types(name) VALUES ('Légumes')";
    condb.query(type_1, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("type 1 insert");
      }
    });
    var type_2 = "INSERT INTO types (name) VALUES ('Fruits')";
    condb.query(type_2, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("type 2 insert");
      }
    });
    var type_3 = "INSERT INTO types (name) VALUES ('Produit laitier')";
    condb.query(type_3, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("type 3 insert");
      }
    });
  }

  function create_requests(){
    var request_1 = "INSERT INTO requests (name, peremption_date, customer_id, price, type_id, description) VALUES ('pommes', '2019-09-30', 1, 2, 2, 'des pommes');"
    condb.query(request_1, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("request 1 insert");
      }
    });

    var request_2 = "INSERT INTO requests (name, peremption_date, customer_id, price, type_id, description) VALUES ('pommes de terre', '2019-01-05', 1, 5, 1, 'des pdt');"
    condb.query(request_2, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("request 2 insert");
      }
    });

    var request_3 = "INSERT INTO requests (name, peremption_date, customer_id, price, type_id, description) VALUES ('yaourt', '2019-09-29', 1, 2.50, 3, '6 yaourts');"
    condb.query(request_3, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
        console.log("request 3 insert");
      }
    });
  }