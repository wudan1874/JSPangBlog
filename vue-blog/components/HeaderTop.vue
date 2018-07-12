<template>
<div class="header">
    <div class="header-div">
      <el-row>
        <el-col :xs='24' :sm="12" >
            <div class="logoDiv">
                <span class="logo">技术胖</span>
                <span class="logo-text">博客</span>
            </div>
            <div class="logoContent">
                 <div>每周更新三集前端免费视频</div>
                <div>每年帮助超过100万前端爱好者学习</div>
            </div>
            
        </el-col>
       
        <el-col :xs='0' :sm="12">
            <ul class="nav-list">
                <li>首页</li>
                <li>视频教程</li>
                <li>前端日志</li>
                <li>生活趣事</li>
                <li>自我介绍</li>
            </ul>
        </el-col>
      </el-row>
  </div>
</div>
  
</template>

<script>


export default {
    data() {
      return {

      }
    },
}
</script>

<style>
  .header-div{
    max-width:1200px;
    width: 100%;
    margin: 0 auto;
    background-color:#FFF;
  }
  .logoDiv{
      float:left;
      padding:6px;

  }
  .logo{
      font-size:24px;
      line-height: 40px;
  }
  .logoContent{
      font-size:12px;
      color:#666;
      padding-top:10px;
  }
  .header{
      background-color:#FFF;
      width:100%;
  }
  .nav-list > li {
      list-style: none;
      padding:15px 5px;
      float: left;
  }
</style>
