<template>
    <div>
        <ul >
            <TodoItem v-for="(msg, index) in msgs" :key="index" :msg="msg" :index="index" :deletemsgs="deletemsgs"/>
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem'
export default {
    props:['msgs','deletemsgs'],
    components:{TodoItem}
}
</script>