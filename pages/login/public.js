// function fn(){
//   return {
//     name:"login",
//     title:"这是登录的测试模块"
//   }
// }
var obj = {
  fn:function(){
    console.log("这是登录的测试模块")
  }
}
//暴露当前模块
// module.exports = obj;
exports.obj = obj;