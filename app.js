// 微信小程序的生命周期函数有3个
App({
  onLaunch: function() {
    console.log('App全局初始化');
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
    console.log("App启动，或从后台进入前台触发");
  },
  onHide: function () {
    console.log("App启动，或从前台进入后台触发");
  },
  onError: function (msg) {
    console.log("App全局onError");
  },
//全局方法     调用getApp().demo1()
  demo1() {
    console.log('App全局方法');
  },
//全局用户信息    调用getApp().globalData
  globalData: {
    userInfo: null,
    globalList: {
      name: "Jhon"
    }
  }
})
