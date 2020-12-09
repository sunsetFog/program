
Page({
  data: {
    src:'http://video.shuowan.com/video/gameshow/410333.mp4'
  },
  bindButtonTap: function(){
    var that=this
    wx.chooseVideo({
      sourceType:['album',camera],
      maxDuration:60,
      camera:['front','back'],
      success:function(res){
        that.setData({
          src:res.tempFilePath
        })
      }
    })
  }
})
