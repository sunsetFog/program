
Component({
  /**
   * 使用属性
   */
  options: {
    multipleSlots: true, // 启用多slot支持
    addGlobalClass: true // 启用全局样式
  },
  /**
   * 组件父传子属性列表
   */
  properties: {
    phones: {
      type: String,// 类型（必填）String, Number, Boolean, Object, Array, null(表示任意类型)
      value: 'default value',// 默认值
      observer: function (newVal, oldVal, changedPath) { // 监听改变而触发  newVal新值，oldVal旧值

      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    text: 'init data',
    stick: { id: 10, value: '微微一笑很倾城' }
  },
  /**
   * 计算属性
   */
  computed: {
    
  },
  /**
   * 监听器
   */
  watch: {

  },
  /**
   * 组件生命周期
   */
  lifetimes: {
    created() {
      console.log('component初始数据');
    },
    ready() {
      console.log('component渲染完成');
    },
    detached() {
      console.log('component销毁')
    },
    error() {
      console.log('component抛出错误')
    }
  },
  /**
   * 组件所在页面的生命周期
   */
  pageLifetimes: {
    show: function () {
      console.log("页面展示")
    },
    hide: function () {
      console.log("页面隐藏")
    },
    resize: function (size) {
      console.log("页面尺寸变化")
    }
  },
  /**
   * 方法列表
   */
  methods: {
    passOn() {
      this.triggerEvent('isTrigger',this.data.stick);// vue-$emit-子传父
    }
  }
})
