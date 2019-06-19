es6 语法... 为对象展开符对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
使用Vuex流程

1.新建store.js 
1.1引用vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
1.2定义或引用四大属性(state,mutations,actions,getters)
1.3返回store对象
export default new Vuex.Store({
  state, //状态对象
  mutations, //包含多个更新state函数的对象
  actions, //包含多个对应事件回调函数的对象
  getters

})

2.在main.js中引用刚才的store.js 并在vue对象中声明
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

3.使用
import {mapState,mapGetters,mapActions} from 'vuex';
  export default {
    
    computed:{
      /* evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }, */
      ...mapState(['count']), //对象展开符... 取出需要用的方法或对象
      ...mapGetters(['evenOrOdd'])
    },