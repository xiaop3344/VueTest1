<template>
  <div>

    <input type="text" placeholder="输入内容,回车确认" @keyup.enter='add' v-model="title">

  </div>
</template>
<script>
export default {
    props:['addmsg'],
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
            this.addmsg(msg);
            this.title=''
            }
            
        }
    }
}
</script>
