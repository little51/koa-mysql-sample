# koa-mysql-sample
====================
## 安装
### 1.Node版本在v0.11以上
### 2.安装依赖模块 
    在koa-mysql-sample目录下，执行：
    npm install co
    npm install co-mysql
    npm install mysql
    npm install koa
    npm install koa-cors
    npm install koa-route
    npm install koa-session
### 3.安装MySQL
    在test数据库下建立users表，插入数据
    CREATE TABLE `users` (
      `user_id` int(11) NOT NULL,
      `name` varchar(20) DEFAULT NULL,
      `birthday` date DEFAULT NULL,
      `sex` varchar(2) DEFAULT NULL,
      PRIMARY KEY (`user_id`)
      ) ;
      INSERT INTO `test`.`users` (`user_id`, `name`, `birthday`, `sex`) VALUES ('1', '测试', '2000-01-01', '男');
## 配置
   在dbconfig.js配置数据库连接参数
## 启动
   node --harmony app.js
## 测试
  http://localhost:3000/users
  http://localhost:3000/users/1
## 文件说明
koa-mysql-sample<br />
│  app.js         //程序入口<br />
│  dbconfig.js    //数据库配置<br />
│  errhandle.js   //全局异常处理<br />
│  session.js     //会话处理 to-do<br />
├─service        //业务逻辑<br />
│      userService.js<br />
└─routes         //路由<br />
       userRoute.js<br />
