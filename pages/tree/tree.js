const { list } = require('../../utils/list.js')
Page({
  data: {
    list: list,
    activeIndex: 1,
    activeId: null,
  },
  onLoad: function (options) {
    let defin = null
    let defaul = defin || '默认值'
    console.log('默认值', defaul);
  },
  theFirst({ detail = {} }) {
    console.log('nav-=', detail);
    this.setData({
      activeIndex: detail.index || 0,
    });
  },

  theSecond({ detail = {} }) {
    console.log('item-=', detail);
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({ activeId });
    wx.navigateTo({ url: detail.path });
  },
})
