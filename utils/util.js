var fun = {
  formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },
  stick(){
    return '模块化的公用方法';
  }

}


function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


module.exports = {
  fun: fun
}
// 简化
// module.exports.fun = fun;
