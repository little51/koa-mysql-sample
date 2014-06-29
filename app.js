'use strict' ;

var koa = require('koa');
var cors = require('koa-cors');
//全局变量App
global.app = koa();
//数据库配置
require('./dbconfig.js')
//全局异常处理
require('./errhandle.js');
//会话处理
require('./session.js') ;
//解决客户端跨域访问限制
app.use(cors());
//批量装载routes目录下的所有路由文件
require("fs").readdirSync("./routes").forEach(function(file) {
    require("./routes/" + file);
});
//启动监听
app.listen(3000);
console.log('listening on port 3000');
