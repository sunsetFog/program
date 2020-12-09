Page({
  data: {

  },
  onLoad: function (options) {
    this.demo1()
    this.demo2()
    this.demo4()
    this.demo5()
  },
  demo1() { // 缓存
    wx.setStorage({
      key: 'cache',
      data: '缓存'
    })
  },
  demo2() {// 获取当前位置
    wx.getLocation({
      success: function(res) {
        console.log("当前的经度：" + res.longitude)
        console.log("当前的纬度：" + res.latitude)
      },
    })
  },
  demo3() {// 请求接口
    wx.request({
      url: 'http://localhost/php/PHP_08/PHP_08/ajax.php',
      method: "GET",
      dataType: "json",
      data: {},
      success: function (res) {
        console.log(res);
      }
    })
  },
  demo4() {// 获取用户信息
    wx.getUserInfo({
      success: res => {
        console.log('用户信息', res)
      }
    })
  },
  demo5() {// 调用app全局方法
    const app = getApp()
    app.demo1()
  }
})