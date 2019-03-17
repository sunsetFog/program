// pages/next/next.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'yahoo',
    arr: ['mi','ni','yu'],
    age: 15,
    isActive: true,
    miss: ''
  },
  event(index){
    // console.log(index.touches[0].identifier);
    // console.log(index);
    // var id = index.currentTarget.id;
    // console.log(id);
    // var app = getApp();
    // id = app.requestDetailid;
    // console.log(id);
    wx.navigateTo({
      url: '../zoo/zoo'
    })
    this.setData({
      name: 'fuck'
    })
  },
  clickMe(){
    console.log('阻止事件冒泡');
    console.log(this.name);
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---next---',options);
    // var that = this;
    // var app = getApp();
    // app.getUserInfo(function (userInfo) {
    //   console.log(userInfo);
    //   that.setData({
    //     name: userInfo.city
    //   })
    // })
    // this.setData({
    //   name: 'bingo'
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})