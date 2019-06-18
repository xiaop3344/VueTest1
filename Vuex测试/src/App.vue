<template>
  <div>
    <p>click--{{$store.state.count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="increment_if_odd">increment if odd</button>
    <button @click="increment_async">increment async</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
  export default {
    
    computed:{
      /* evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }, */
      ...mapState(['count']), //对象展开符... 取出需要用的方法或对象
      ...mapGetters(['evenOrOdd'])
    },
    methods:{
     /*  increment(){
        this.$store.dispatch('increment')  //触发store的action调用，可加参数this.$store.dispatch('increment'，arg)
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      increment_if_odd(){
        this.$store.dispatch('increment_if_odd')
      },
      increment_async(){
        this.$store.dispatch('increment_async')
      } */
      ...mapActions(['increment','decrement','increment_if_odd','increment_async'])
    }

  }
</script>

<style>
    
</style>