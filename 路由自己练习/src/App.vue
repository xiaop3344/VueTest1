<template>
  <el-container>
    <el-header height='150px'>
      <Header/>
    </el-header>
    <el-main>
      <Main></Main>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main';
  export default {
    components:{
      Header,
      Main
    }
  }
</script>

<style>
    .el-container{
      width:984px;
      margin: auto;
    }
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
    
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
</style>