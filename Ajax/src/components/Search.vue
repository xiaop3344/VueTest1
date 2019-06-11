<template>
    <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="search">Search</button>
      </div>
      <div>
          <input type="text" v-model="repositoryName" placeholder="搜索仓库名" @keyup.enter="searchRepository">
          <button @click='searchRepository'>搜索</button>
      </div>
    </section>
    </div>
</template>
<script>
import Pubsub from 'pubsub-js'
export default {
    data() {
        return {
            searchName:'',
            repositoryName:''
        }
    },
    methods:{
        search(){
            const searchName=this.searchName;
            if(searchName){
                //发布搜索消息
                Pubsub.publish('search',searchName);
            }
        },
        searchRepository(){
            if(this.repositoryName){
                Pubsub.publish('searchRepository',this.repositoryName);
            }
        }
    }
}
</script>