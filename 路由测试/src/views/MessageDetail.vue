<template>
    <div>
        <!-- 路径传递参数例子 -->
        <!-- 显示路径传值id -->
        <p>{{$route.params.id}}</p>
        <ul>
            <li>id:{{messageDetail.id}}</li>
            <li>title:{{messageDetail.title}}</li>
            <li>content:{{messageDetail.content}}</li>
        </ul>
    </div>
</template>
    
<script>
    const AllMesssageDetails=[
        {
            id:1,
            title:'message001',
            content:'001'
        },
        {
            id:3,
            title:'message003',
            content:'003'
        },
        {
            id:4,
            title:'message004',
            content:'004'
        }
    ]
    export default {
        data() {
            return {
                messageDetail:{}
            }
        },
        mounted(){
            const id=this.$route.params.id*1;
            this.messageDetail=AllMesssageDetails.find(detail=>detail.id===id)
        },
        watch:{
            $route:function(newValue){ //监视路由路径发生了改变 即id改变
                const id=newValue.params.id*1;
                this.messageDetail=AllMesssageDetails.find(detail=>detail.id===id)
            }
        }

    }
</script>

<style>

</style>