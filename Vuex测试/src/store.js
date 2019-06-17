import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const state = {  //初始化状态
    count:0
}
const mutations = {
    incrementMu(state){
        state.count++;
    },
    decrementMu(state){
        state.count--;
    }
}
const actions = {
    increment({commit}){
        commit('incrementMu');
      },
      decrement({commit}){
        commit('decrementMu');
      },
      increment_if_odd({commit,state}){
        if(state.count%2===1){
            commit('incrementMu');
        }
      },
      //在action中可以直接执行异步代码
      increment_async({commit}){
        setTimeout(() => {
            commit('incrementMu');
        }, 1000);
      }
}
const getters = {
    evenOrOdd(state){
        return state.count%2===0?'偶数':'奇数'
      }
}
export default new Vuex.Store({
  state, //状态对象
  mutations, //包含多个更新state函数的对象
  actions, //包含多个对应事件回调函数的对象
  getters

})
