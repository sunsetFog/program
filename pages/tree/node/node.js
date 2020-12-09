Page({
  data: {
    for_list: [
      { id: 1, name: "一次循环", menu: ['二次Q1', 'H2']},
      { id: 2, name: "一次循环", menu: ['二次S1', 'T2']}
    ],
    if_air: 2,
    style_xh: 'color: red;font-size: 12px;',
    backdrop: 'blue',
    active_color: true,
    rainbow: 'rainbow',
    dynamic: 'orange'
  },
  nice() {
    console.log('事件触发')
  },
  stop() {
    console.log('阻止事件冒泡')
  }
})