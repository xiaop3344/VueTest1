import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './routes'
/* import 'element-ui/lib/theme-chalk/index.css'; */
import '../static/icon/iconfont.css';
Vue.use(ElementUI)

new Vue({
    // 对应index的id
    el: '#app',
    // 引入的组件
    components: { App },
    template: '<App/>',
    router

})

