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
                <li> <nuxt-link :to="{name:'index'}" >首页 </nuxt-link></li>
                <li><nuxt-link :to="{name:'category-categoryID',params:{categoryID:1}}" >视频教程</nuxt-link></li>
                <li><nuxt-link :to="{name:'category-categoryID',params:{categoryID:2}}" >前端日记</nuxt-link></li>
                <li><nuxt-link :to="{name:'category-categoryID',params:{categoryID:3}}" >职场技能</nuxt-link></li>
                <li><nuxt-link :to="{name:'category-categoryID',params:{categoryID:4}}" >生活趣事</nuxt-link></li>
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
      margin-right:10px;
      color:#F56C6C;

  }
  .logo{
      font-size:24px;
      line-height: 40px;
  }
  .logoContent{
      font-size:12px;
      color:#909399;
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

  .nav-list > li  a{
     color:#666;
     text-decoration:none;
  }

   .nav-list > li  a:hover{
     color:#F56C6C;
     text-decoration:none;
  }
</style>
