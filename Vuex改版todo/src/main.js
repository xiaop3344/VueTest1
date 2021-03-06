import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';


Vue.config.productionTip = false
// 引用ElementUI插件
Vue.use(ElementUI);
new Vue({
    // 对应index的id
    el: '#app',
    // 引入的组件
    components: { App },
    template: '<App/>',
    store

})

