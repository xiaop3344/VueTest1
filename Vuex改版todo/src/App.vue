<template>
    <div>
        <h1>评论区</h1>
        <!-- 第一种自定义方法改写成自定义触发事件 @addmsg="addmsg"-->
        <!-- <TodoHeader @addmsg="addmsg"/>   该方法适用于父子间传递 -->
        <!-- 第二种方法 -->
        <TodoHeader />
        <TodoList /> 
        <TodoFooter /> 
    </div>
</template>
<script>
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

export default {
    
    components:{
        TodoList,
        TodoHeader,
        TodoFooter
    }
}
</script>
