'use strict' ;

var co = require('co')
var mysql = require('mysql');

global.dbpool = mysql.createPool({
    host : 'localhost',
    port : 3306 ,
    database : 'test',
    user: 'root',
    password : 'rootroot'
});
