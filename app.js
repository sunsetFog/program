//app.js
// 微信小程序的生命周期函数有2个
//app生命周期
// （1）程序启动时，会触发以下2个函数
// 第一执行onLauch函数——当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
// 第二执行onShow函数——当小程序启动，或从后台进入前台显示，会触发 onShow
// （2）当点击“后台”时，会触发以下函数（即程序被转到后台时）
// onHide函数——当小程序从前台进入后台，会触发 onHide
App({
  onLaunch: function() {
    console.log('App全局生命周期--onLaunch');
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    console.log("App生命周期函数——onShow函数");
  },
  onHide: function () {
    console.log("App生命周期函数——onHide函数");
  },
  onError: function (msg) {
    console.log("App生命周期函数——onError函数");
  },
//全局方法
  globalEvent(){
    console.log('App全局方法的调用');
  },
//全局用户信息设置在page/index/index里
  globalData: {
    userInfo: null,
    globalList: {
      name: "Jhon"
    }
  }
})
