<template>
  <div>

    <input type="text" placeholder="输入内容,回车确认" @keyup.enter='add' v-model="title">

  </div>
</template>
<script>
export default {
    /* 由于是自定义触发事件,没有传参 */
    /* props:['addmsg'], */
    data() {
            return {
                title:''
            }
        },
    methods:{
        
        add(){
            
            const title=this.title.trim();
            if(title===''){
                alert('不能为空');
            }
            else{
                const msg={title,selected:true};
                /* 直接调用 父组件的自定义事件 */
            /* this.addmsg(msg); */
            /* 使用this.$emit 来调用回调函数(自定义组件) */
            this.$emit("addmsg",msg);
            this.$emit("showSonMsg",msg);
            this.title=''
            }
            
        }
    }
}
</script>
