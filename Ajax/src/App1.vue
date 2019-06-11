<template>
    <div>
        <div v-if="!repoUrl">loading</div>
        <div v-else>most star repp is <a :href=repoUrl>{{repoName}}</a></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            repoName:'',
            repoUrl:''
        }
    },
    mounted(){
        //发ajax 请求 获取数据
        const url='https://api.github.com/search/repositories?q=vue&sort=starts';
        this.$http.get(url).then(
            response=>{
                const result=response.data
                //得到最受欢迎repo
                const mostRepo=result.items[0];
                this.repoUrl=mostRepo.html_url;
                this.repoName=mostRepo.name;
            },
            reponse=>{
                alert("请求错误")
            }
        )
    }
}
</script>

