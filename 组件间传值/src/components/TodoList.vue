<template>
    <div>
        <ul >
            <TodoItem v-for="(msg, index) in msgs" :key="index" :msg="msg" :index="index" />
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem'
export default {
    props:['msgs'],
    components:{TodoItem}
}
</script>