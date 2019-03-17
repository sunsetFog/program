// pages/zanshi/zanshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counterId: ''
  },
  yahoo: function (e) {
    console.log('978766');
    wx.cloud.init({
      traceUser: true
    })
    wx.cloud.callFunction({
      name: "add",//这里填写云函数的名字
      data: {
        userInfo: e // 这里是把参数e直接传给test函数处理
      },
      success: res => {
        console.log(res) // 返回的文本如下图所示：
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  bingo(){
    wx.cloud.init({
      traceUser: true
    })
    //首先  要实例一个数据库对象

    let db = wx.cloud.database();
    db.collection('moon').add({
      data: {
        count: 1
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          count: 1
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  look(){
    wx.cloud.init({
      traceUser: true
    })
    //查询数据：
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('moon').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2)
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })

  },
  modify(){
    wx.cloud.init({
      traceUser: true
    })
    // 修改数据
    const db = wx.cloud.database()
    const newCount = this.data.count + 1
    db.collection('moon').doc(this.data.counterId).update({
      data: {
        count: newCount
      },
      success: res => {
        this.setData({
          count: newCount
        })
        console.log('修改成功');
      },
      fail: err => {
        icon: 'none',
          console.error('[数据库] [更新记录] 失败：', err)
      }
    })   
  },
  deletes(){
    wx.cloud.init({
      traceUser: true
    })
    //  删除数据
    const db = wx.cloud.database()
    db.collection('moon').doc(this.data.counterId).remove({
      success: res => {
        wx.showToast({
          title: '删除成功',
        })
        this.setData({
          counterId: '',
          count: null,
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
        console.error('[数据库] [删除记录] 失败：', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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