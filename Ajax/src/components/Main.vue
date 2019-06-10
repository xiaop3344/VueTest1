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
        errorMsg: ''
      }
    },
    mounted() {
      //订阅搜索的消息（兄弟之间组件通信）search组件的
      Pubsub.subscribe('search', (msg, searchName) => {
          const url = `https://api.github.com/search/users?q=${searchName}`
          //更新状态
          this.fistView = false;
          this.loading = true;
          this.users=null;
          this.errorMsg=''
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