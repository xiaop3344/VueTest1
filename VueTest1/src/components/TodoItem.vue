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
    props:['msg','index','deletemsgs'],
    data() {
        return {
            isEnter:false
        }
    },
    methods:{
        deletecurrent(){
            console.info(this.msg);
            if(window.confirm('是否想删除'+this.msg.title)){
                this.deletemsgs(this.index);
            }
        }
    }
}
</script>