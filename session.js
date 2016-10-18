'use strict' ;

var session = require('koa-session');
var koa = require('koa');
var app = koa();

app.keys = ['koa-mysql-sample'];
app.use(session(app));
app.use(function *(next){
    //console.log('session:' + this.session)
    yield next ;
})