import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'


Vue.use(VueResource)
new Vue({
    // 对应index的id
    el: '#app',
    // 引入的组件
    components: { App },
    template: '<App/>'

})

