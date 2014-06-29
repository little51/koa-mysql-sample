'use strict' ;

var route = require('koa-route');
var service = require('../service/userService.js') ;
//restful风格路由
app.use(route.get('/users', service.users.findAll));
app.use(route.get('/users/:id', service.users.findByPK));
