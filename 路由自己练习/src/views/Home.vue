/* 主页显示 */
<template>
  <div>
    <div class="msgSheet">
      <el-card class="box-card" body-style="{padding-botton:'10px'}">
        <span class="msgTitle"><a href="/#/article" class="underlinfalse">标题</a></span><span class="commentCount">5</span><br>
         <span class="msgSummary">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
         <br>
         <div class="msgFooter">
         <a class="msgFooter">赞:22</a>&nbsp&nbsp
         <span class="msgFooter">踩:22</span>&nbsp&nbsp
         <span class="msgFooter">评论:22</span>&nbsp&nbsp
         </div>
      </el-card>
    </div>
    <div class="msgSheet">
      <el-card class="box-card">
        <span class="msgTitle">标题</span><br>
        <span class="msgSummary">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
        <span></span>
      </el-card>
    </div>
    <div class="msgSheet">
      <el-card class="box-card">
        <span class="msgTitle">标题</span><br>
        <span>内容</span>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .msgTitle {
    height: 80px;
    font-size: 30px;
  }


  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 680px;
    background-color: azure;
    line-height: 40px;
    padding-right: 50px;
  }
  .commentCount{
    float:right;
    font-size: 50px;
  }
  /* .msgSummary{
    line-height: 10px;
  } */
  .msgFooter{
    font-size: 13px;
    text-align: right;
  }
  
</style>