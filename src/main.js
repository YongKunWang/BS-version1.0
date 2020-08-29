import Vue from 'vue'
// 引入渲染页面
import App from './App.vue'
// 引入路由
import router from './router'
// 引入elementUI
import './plugins/element.js'
// 引入flexible
import 'lib-flexible/flexible'

// 引入全局样式表
import './assets/css/global.css'
// 引入icon图标
import './assets/fonts/icon/iconfont.css'
// 引入自定义组件
import myComponent from './components'
// 引入粒子效果
import VueParticles from 'vue-particles'
// 引入axios 用于异步请求
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'
// 全局注册自定义组件
Vue.use(myComponent)

// 全局注册粒子效果
Vue.use(VueParticles)

// 设置axios的基地址
axios.defaults.baseURL = 'http://api.baosteel.com/api/'
// 挂载到vue的原型对象上
Vue.prototype.$http = axios
// 挂载到vue原型上
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
