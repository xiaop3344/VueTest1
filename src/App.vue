<template>
    <div>
        <h1>评论区</h1>
        <TodoHeader :addmsg="addmsg"/>        
        <TodoList :msgs="msgs" :deletemsgs="deletemsgs"/> 
        <TodoFooter :msgs='msgs' :deleteSelected="deleteSelected" :SelectAll='SelectAll'/> 
    </div>
</template>
<script>
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
export default {
    data(){
        return{
            msgs:[
                {title:'vue good',selected:false},
                {title:'vue best',selected:true},
                {title:'i love you',selected:false}
            ]
        }
    },
    methods:{
        addmsg(msg){
            this.msgs.unshift(msg);
        },
        deletemsgs(index){
            this.msgs.splice(index,1);
        },
        deleteSelected(){
            this.msgs=this.msgs.filter(msg => !msg.selected);
        },
        SelectAll(isDelete){
            if(isDelete){
                this.msgs.forEach(msg=> msg.selected=true)
            }
            else{
                this.msgs.forEach(msg=> msg.selected=false)
            }
        }
    },
    components:{
        TodoList,
        TodoHeader,
        TodoFooter
    }
}
</script>
