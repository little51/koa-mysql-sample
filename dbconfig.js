'use strict' ;

var co = require('co')
var mysql = require('mysql');
var wrapper = require('co-mysql') ;

var pool = mysql.createPool({
    host : 'localhost',
    port : 3306 ,
    database : 'test',
    user: 'root',
    password : 'rootroot'
}) ;

global.dbpool = wrapper(pool);
