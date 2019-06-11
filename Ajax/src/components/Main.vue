<template>
  <div>
    <h2 v-show="fistView">请输入用户名搜索</h2>
    <h2 v-show="loading">Loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-for="(user, index) in users" :key="index">
      <div class="card">
        <a :href="user.url" target="_blank">
          <img :src="user.imgurl" style='width: 100px' />
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
    <div>---------------------------------------------------------------</div>
    <div v-for="(repository, index) in repositories" :key="index">
      <p>{{repository.name}}</p>
      <span>描述信息:  </span><span>{{repository.description}}</span><br>
      <span>仓库地址:  </span><a :href="repository.html_url">{{repository.html_url}}</a><br>
      <span>user:  </span><a :href="repository.owner.html_url">
        <img :src="repository.owner.avatar_url" width="50px" height="50px"> {{repository.owner.login}}</a>
      
      <div>---------------------------------------------------------------</div>
    </div>
  </div>
</template>
<script>
  import Pubsub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data() {
      return {
        fistView: true,
        loading: false,
        users: null,
        errorMsg: '',
        repositories: JSON.parse(window.localStorage.getItem('repositories')||'[]')
      }
    },
    mounted() {
      if(this.repositories.length>0){
        this.fistView=false
      }
      //订阅搜索的消息（兄弟之间组件通信）search组件的
      Pubsub.subscribe('search', (msg, searchName) => {
        const url = `https://api.github.com/search/users?q=${searchName}`
        //更新状态
        this.fistView = false;
        this.loading = true;
        this.users = null;
        this.errorMsg = ''
        //发送ajax请求
        axios.get(url).then(response => {
          const result = response.data;
          const users = result.items.map(item => ({
            url: item.html_url,
            imgurl: item.avatar_url,
            name: item.login
          }))
          //成功，更新状态
          this.loading = false;
          this.users = users;
        }).catch(error => {
          //更新失败状态
          this.loading = false;
          this.errorMsg = "搜索错误"
        })
      })

      Pubsub.subscribe('searchRepository', (msg, repositoryName) => {
        const url = `https://api.github.com/search/repositories?q=${repositoryName}&sort=starts`;
        this.fistView = false;
        this.loading = true;
        this.repositories = null;
        this.errorMsg = ''
        axios.get(url).then(response => {
          const repositories = response.data.items;
          this.repositories = repositories;
          this.loading = false;
        }).catch(error => {
          this.loading = false;
          this.errorMsg = '仓库搜索错误'
        })

      })

      //搜索的数据存入localstorage中
      

    },
    watch:{
      repositories:{
        deep:true,
        handler:function (newValue,oldValue) {
          window.localStorage.setItem('repositories',JSON.stringify(this.repositories));
        }
      }
    }
  }
</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>