// pages/main/main.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    phones: {// 属性名
      type: String,// 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'default value',// 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text: 'init data',
    stick: {id: 10,value: '微微一笑很倾城'}
  },
  created(){
    console.log('component生命周期--created页面节点树时执行');
  },
  ready(){
    console.log('component生命周期--ready获取节点信息');
  },

  /**
   * 组件的方法列表
   */
  methods: {
    passOn(){
      console.log('通讯-父传子',this.data.phones);
      // 通讯-子传父
      this.triggerEvent('isTrigger',this.data.stick);
    }
  }
})
