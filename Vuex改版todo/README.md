Vuex 实例

mutations:为更新state的状态
actions:可以为异步操作,Action 提交的是 mutation，而不是直接变更状态。
state:存储数据
getters:计算属性,对于state中的数据派生出来的属性例如对列表进行过滤并计数

action异步例子
定义action 返回一个promise对象
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve('data')  //代表成功后,传出来的数据用then接收
        <!-- reject('data') -->  //正规情况下是与服务器连接失败调用,传出来的数据用catch接收
      }, 1000)
    })
  }
}
返回的promise可以接then 代表成功,data就是上面resolve传过来的东西
store.dispatch('actionA').then((data) => {
  console.log(data);
}).catch(function(reason){   //当失败的时候 进行的操作 同理then 接收的是reject 传过来的数据
    console.log('rejected');
    console.log(reason);
});