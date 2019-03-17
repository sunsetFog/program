// pages/start.js 启动页
// 微信小程序的生命周期函数有2个
//page生命周期
// (1)当启动home页面时，会触发以下3个函数
// 第一执行onLoad函数——在文档加载的时候会执行
// 第二执行onShow函数——在页面显示的时候会执行
// 第三执行onReady函数——在页面初次渲染完成时执行
// （2）在Home页面时，当点击左上角“返回”，会触发以下函数
// onUnload函数——在页面销毁时执行
// （3）在Home页面时，当点击“后台”时，会触发以下函数（即程序被转到后台时）
// onHide函数——在页面隐藏时会执行
// （4）在Home页面时，当点击“前台”时，会触发以下函数（即程序从后台被重新转回前台时）
// onShow函数——在页面显示时会执行

var common = require('../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: [{ id: 1, value: '生命周期' }, { id: 2, value: '路由' }, { id: 3, value: '方法调用' }],
    text: 'init data',
    phone: '--通讯，父传子--',
  },
  jumpEvent(event) {
    console.log('列表遍历', event);
    if (event.currentTarget.id == 0) {
      wx.navigateTo({ url: './next/next' });
    } else if (event.currentTarget.id == 1) {
      wx.redirectTo({ url: "./zoo/zoo?key='20'&value='supplier'" })
    } else if (event.currentTarget.id == 2) {
      this.call();
    }
  },
  getJson() {
    console.log('request');
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
  call() {
    console.log('方法的调用', this.data.phone);
    //调用App全局方法
    var app = getApp();
    app.globalEvent();
    console.log('暴露公用方法',common.fun.stick());
  },
  //接收通讯方法
  getCode(value) {
    console.log('通讯-子传父', value);
    // this.setData({
    //   code: value
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('page生命周期--onLoad函数', options);
    this.setData({
      text: 'changed data'
    })
    // const db = wx.cloud.database()
    // // 2. 构造查询语句
    // // collection 方法获取一个集合的引用
    // // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
    // // get 方法会触发网络请求，往数据库取数据
    // db.collection('moon').where({
    //   publishInfo: {
    //     country: 'United States'
    //   }
    // }).get({
    //   success: function (res) {
    //     // 输出 [{ "title": "The Catcher in the Rye", ... }]
    //     console.log('666666666',res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('page生命周期--onReady函数');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('page生命周期--onShow函数');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('page生命周期--onHide函数');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('page生命周期--onUnload函数');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("页面被下拉事件");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底事件');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },//屏幕滚动事件
  onPageScroll() {
    console.log("页面在滚动")
  }
})