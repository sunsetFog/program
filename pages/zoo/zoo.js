// var login = require("../login/login.js");
var test = require("../login/public.js");
test.obj.fn()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {title:"谢",sex:"woman"},
      {title:"bobo",sex:"woman"}
    ],
    staus:true,
    list1:[],
    name1:"九阴白骨抓",
    name:"前端大挪移",
audioSrc:'',
    videoSrc:'',
    imgSrc:''
  },
  /*按钮点击事件*/
  clickMe(){
    this.setData({
      name:this.data.name1
    })
      console.log("前端大挪移被点击")
  },
  /*按钮按下事件*/
  touchDwon(){
    console.log("前端大挪移被按下了")
  },
  /*按钮抬起事件*/
  touceUp(){
    console.log("前端大挪移被抬起了")
  },
  /*复选框状态改变事件*/
  chexkChange(e){
    //获取选中的复选框的值
    console.log(e.detail.value)
  },
  //输入框输入事件
  oninput(e){
    console.log("输入框的值："+e.detail.value)
  },
  //输入框获取焦点事件
  onfocus(){
    console.log("获取到了焦点")
  },
  //输入框失去焦点事件
  onblur(e){
    console.log("失去了焦点")
  },
  //滑动块滑动完毕事件
  slideChnage(){
    console.log("已经拖到最大了！！")
  },
  //滑动过程事件
  slideChanging(e){
    console.log("滑动当前值："+e.detail.value)
  },
  //开关状态事件
  switchChange(e){
    console.log("当前状态："+e.detail.value);
    if(!e.detail.value){
        this.setData({
          status:!this.data.status
        })
    }else{
      this.setData({
        status:!this.data.status
      })
    }
  },
  //音频播放功能
  onplay(){
    //获取音频组件
    var myaudio = wx.createAudioContext("myAudio");
    //开始播放
    myaudio.play();
  },
  //音频暂停功能
  onstop(){
    var myaudio = wx.createAudioContext("myAudio");
    myaudio.pause()
  },
  //音频跳到指定秒数
  jumpto(){
    var myaudio = wx.createAudioContext("myAudio");
    myaudio.seek(240);
  },
  //音频开始播放时触发该事件
  myplay(){
    console.log("音频开始播放了")
  },
  //音频暂停时触发该事件
  mypause(){
    console.log("音频暂停了")
  },
  //音频播放完毕事件
  myend(){
    console.log("音频播放完毕")
  },
  //音频进度改变事件
  mychange(){
    console.log("进度在改变中...")
  },
  //视频播放过程中触发该事件
  videochange(){
    console.log("视频正在播放中....")
  },
  //获取当前位置
  getLocal(){
    var myMap = wx.createMapContext("myMap");
    wx.getLocation({
      success: function(res) {
        console.log("当前的经度："+res.longitude)
        console.log("当前的纬度："+res.latitude)
      },
    })
  },
  //获取全局数据
  getGlobal(){
    var global = getApp();
    console.log(global.globalData.globalList)
  },
  //扫一扫
  myScan(){
    wx.scanCode({
      success(res){//成功回调函数
        console.log(res.result);//result为扫描的结果
        wx.navigateTo({
          url: '/pages/login/login?id=123',
        })
      },
      fail(err){//失败回调函数
        console.log(err);
      },
      complete(msg){//成功或失败都执行
        console.log(msg)
      }
    })
  },
  //数据请求接口
  getData(){
    // wx.request({
    //   url: 'user.json',
    //   method:"GET",
    //   dataType:"json",
    //   data:{},
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  },
  //选择图片接口
  chooseImg(){
    var that = this;//保存this指向
    wx.chooseImage({
      count:9,
      sourceType:["album","camera"],
      success: function(res) {
        // console.log(res.tempFilePaths)
        that.setData({
          imgSrc:res.tempFilePaths
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---zoo---',options);
    wx.setStorage({
      key: 'name',
      data: 'David'
    })
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
    console.log("页面被下拉了")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面被上拉了")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //屏幕滚动事件
  onPageScroll(){
    console.log("页面在滚动")
  }
})