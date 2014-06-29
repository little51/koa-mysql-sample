'use strict' ;

var session = require('koa-session');

app.keys = ['some secret hurr'];
app.use(session());
app.use(function *(next){
    //console.log('session:' + this.session)
    yield next ;
})