koa-mysql-sample
================

安装<br />
  1.Node版本在v0.11以上<br />
  2.安装依赖模块<br /> 
    在koa-mysql-sample目录下，执行：<br />
    npm install co<br />
    npm install co-mysql<br />
    npm install mysql<br />
    npm install koa<br />
    npm install koa-cors<br />
    npm install koa-route<br />
    npm install koa-session<br />
  3.安装MySQL<br />
    在test数据库下建立users表，插入数据<br />
    CREATE TABLE `users` (<br />
      `user_id` int(11) NOT NULL,<br />
      `name` varchar(20) DEFAULT NULL,<br />
      `birthday` date DEFAULT NULL,<br />
      `sex` varchar(2) DEFAULT NULL,<br />
      PRIMARY KEY (`user_id`)<br />
      ) ;<br />
      INSERT INTO `test`.`users` (`user_id`, `name`, `birthday`, `sex`) VALUES ('1', '测试', '2000-01-01', '男');<br />
配置<br />
   在dbconfig.js配置数据库连接参数<br />
启动<br />
   node --harmony app.js<br />
测试<br />
  http://localhost:3000/users<br />
  http://localhost:3000/users/1<br />
文件说明<br />
koa-mysql-sample<br />
│  app.js         //程序入口<br />
│  dbconfig.js    //数据库配置<br />
│  errhandle.js   //全局异常处理<br />
│  session.js     //会话处理 to-do<br />
├─service        //业务逻辑<br />
│      userService.js<br />
└─routes         //路由<br />
        userRoute.js
