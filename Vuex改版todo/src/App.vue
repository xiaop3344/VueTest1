<template>
    <div>
        <h1>评论区</h1>
        <!-- 第一种自定义方法改写成自定义触发事件 @addmsg="addmsg"-->
        <!-- <TodoHeader @addmsg="addmsg"/>   该方法适用于父子间传递 -->
        <!-- 第二种方法 -->
        <TodoHeader ref="header" @showSonMsg='showSonMsg'/>
        <TodoList :msgs="msgs" :deletemsgs="deletemsgs"/> 
        <TodoFooter :msgs='msgs' :deleteSelected="deleteSelected" :SelectAll='SelectAll'/> 
        <h2>title:{{mmss.title}}</h2>
    </div>
</template>
<script>
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import Pubsub from 'pubsub-js'
export default {
    data(){
        return{
            /* msgs:[
                {title:'vue good',selected:false},
                {title:'vue best',selected:true},
                {title:'i love you',selected:false}
            ] */
            /* 通过浏览器缓存读取数据 */
            msgs:JSON.parse(window.localStorage.getItem('msgs')||'[]'),
            mmss:{}
        }
    },
    /* methods:{
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
        },
        showSonMsg:function(msg){
            console.info(msg); //从子组件传来的值 
            this.mmss=msg;      // 将子组件传来的值赋值给父组件属性 
        },
        
    }, */
    /* 第二种方法 */
    mounted(){
            this.$refs.header.$on("addmsg",this.addmsg)
            /* Pubsub 订阅消息 必须来用箭头函数来指定this为vm对象*/
            Pubsub.subscribe("deleteSelected",(msg,index)=>{
                console.info(msg)
                console.info(index)
                this.deletemsgs(index);
            })
    },
    components:{
        TodoList,
        TodoHeader,
        TodoFooter
    },
    watch:{
        msgs:{
            deep:true,  /* 深度监视 */
            handler:function(newValue,OldValue){
               /*  将数据转成json存入缓存中 */
                window.localStorage.setItem('msgs',JSON.stringify(newValue));
            }
        }
    }
}
</script>
