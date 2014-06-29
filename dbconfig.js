'use strict' ;

var co = require('co')
var mysql = require('co-mysql');

global.dbpool = mysql.createPool({
    host : 'localhost',
    port : 3306 ,
    database : 'test',
    user: 'root',
    password : 'rootroot'
});
