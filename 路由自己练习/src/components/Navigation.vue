<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" 
      mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" class="menu-item">
          <a href="/#/home">首页</a>
        </el-menu-item>
      <el-submenu index="2">
        <template slot="title" class="menu-item">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" class="menu-item">
        <a href="#">随心畅谈</a>
      </el-menu-item>
      <el-menu-item index="4" class="menu-item">
        <a href="#">问答</a>
      </el-menu-item>
      <el-menu-item index="5" class="menu-item">
        <a href="#">图吧</a>
      </el-menu-item>
      <el-menu-item index="6" class="menu-item"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  #menu-item{
    font-size: 222px;
  }
</style>