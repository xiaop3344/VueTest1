<template>
    <div>
        <li @mouseenter="isEnter=true" @mouseleave="isEnter=false">
            <label >
        <input type="checkbox" v-model="msg.selected"><span>{{msg.title}}</span>
        </label>
            <span>&nbsp&nbsp&nbsp</span>
            <button v-show="isEnter" @click="deletecurrent">删除</button>
        </li>
    </div>
</template>
<script>
export default {
    props:['msg','index'],
    data() {
        return {
            isEnter:false
        }
    },
    methods:{
        deletecurrent(){
            if(window.confirm('是否想删除'+this.msg.title)){
                /* this.deletemsgs(this.index); */
                    /* 发布消息,在订阅消息处使用 */
                this.$store.dispatch('deletemsgs',this.index);
            }
        },
        
    }
}
</script>