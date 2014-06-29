'use strict' ;

var session = require('koa-session');

app.keys = ['koa-mysql-sample'];
app.use(session());
app.use(function *(next){
    //console.log('session:' + this.session)
    yield next ;
})