'use strict' ;

exports.users = {
  //查询所有记录
  findAll: function *(){
    //执行sql返回结果
    //var rows = yield  dbpool.query('select * from users');
    //测试
    var rows =[[{"user_id":1,"name":"test","birthday":"1975-12-07T16:00:00.000Z","sex":"M"}]] ;
    this.body = rows[0] ;
  },

  //按主键查询
  findByPK: function *(id){
   //执行sql返回结果
   var rows = yield  dbpool.query('select * from users where user_id = ?',[id]);
   //测试
   //var rows = [[{"user_id":1,"name":"test","birthday":"1975-12-07T16:00:00.000Z","sex":"M"}]] ;
   if(rows[0].length==0){
     //抛出异常，并返回http status 404
     return this.throw(id + '数据未找到', 404);
   }
   var user = rows[0][0] ;
   this.body = user.name;
  }
};