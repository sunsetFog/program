Page({
  data: { // data数据

  },
  onLoad: function (options) {
    console.log('初始数据-url传参', options);
  },
  onReady: function () {
    console.log('渲染完成');
  },
  onUnload: function () {
    console.log('销毁');
  },
  onShow: function () {
    console.log('显示');
  },
  onHide: function () {
    console.log('隐藏');
  },
  onShareAppMessage: function () {
    console.log('分享');
  },
  onPullDownRefresh: function () {
    console.log('下拉动作');
  },
  onReachBottom: function () {
    console.log('下拉触底');
  }
})