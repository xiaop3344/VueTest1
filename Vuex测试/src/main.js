import Vue from 'vue'
import App from './App'
import store from './store';
new Vue({
    // 对应index的id
    el: '#app',
    // 引入的组件
    components: { App },
    template: '<App/>',
    store

})

