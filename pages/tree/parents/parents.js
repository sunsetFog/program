Page({
  data: {
    phone: '--通讯，父传子--',
  },
  getCode(value) {
    console.log('通讯-子传父', value);
  }
})