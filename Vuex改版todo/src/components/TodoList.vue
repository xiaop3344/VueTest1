<template>
    <div>
        <ul >
            <TodoItem v-for="(msg, index) in msgs" :key="index" :msg="msg" :index="index" />
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem'
import {mapState} from 'vuex';
import StorageUtil from '../util/StorageUtil';
export default {
    computed:{
        ...mapState(['msgs'])
    },
    components:{TodoItem},
     watch: {
      msgs: {
        deep: true, // 深度监视
        handler: StorageUtil.saveMsgs
        /* handler:function(newValue,OldValue){
                window.localStorage.setItem('msgs',JSON.stringify(newValue));
            }
      } */
    }, 
}
}
</script>