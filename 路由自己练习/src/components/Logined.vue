<template>
  <div class="userwindow">
    <a href="#" class="underlinfalse">
      <img src="static\images\userimg.jpg" class="userimg">
      <el-dropdown>
  <span class="el-dropdown-link">
    xiaop3344<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><a href="#" class="underlinfalse">设置</a></el-dropdown-item>
    <el-dropdown-item><a href="#" class="underlinfalse">我的信息</a></el-dropdown-item>
    <el-dropdown-item><a  class="underlinfalse" @click="clicklogout">退出</a></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </a>

  </div>
</template>

<script>
  export default {
    props:['changeloginflag'],
    methods:{
      clicklogout(){
        this.changeloginflag();
      }
    }
  }
</script>

<style>
    .el-dropdown-link{
        font-size: 17px;
    }
  .userwindow {
    width: 200px;
    padding-top: 30px;
    text-align: right;
    height: 50px;
    line-height: 50px;
  }

  .userimg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>