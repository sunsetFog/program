//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.fun.formatTime(new Date(log))
      })
    })
    console.log('日志log',this.data.logs);
  }
})
