<template>
  <div>
    <!-- 网站头部 -->
    <header-top></header-top>
    <div class="content">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="18">
            <div class="blog-top">    最新博文</div>
            <div class="blog-list">

              <div class="blog-content-item">
                 <el-row clss="blog-item">
                    <el-col :xs="8" :sm="6">
                        <img src="http://jspang.com/wp-content/uploads/2018/04/vuekoa2.jpg" width="100%"/>
                    </el-col>
                    <el-col  :xs="16" :sm="18" class="blog-item-text">
                        <div class="blog-title"> 
                          Vue.js+Koa2移动电商实战视频教程 
                          <span class="blog-sub-title">(更新到43集)</span></div>
                        <div class="blog-dd">
                            2018-4-15 
                        </div>
                        <el-row>
                          <el-col :xs="0" :sm="24" class="blog-jianjie">
                            课程说明 这个教程将全面讲解Vue+Koa的实战项目，
                            学完本教程能成为以前端技术为主的全栈程序员。
                            这套课程总时长会超过20小时，每节课会控制在15分钟左右。 – 文字版教程免费：
                            一分钱不花你也可以学习全部内容，可能稍微辛苦一点...
                          </el-col>
                        </el-row>
                      
                    </el-col>
                  </el-row>
              </div>
             


            </div>
          </el-col>


           <el-col :xs="0" :sm="6" class="layout-right">
             <!-- 网站公告 -->
             <notice></notice>

             <!-- 加入我们 -->
             <join-us></join-us>
          </el-col>


        </el-row>
    </div>
  </div>
</template>

<script>
import HeaderTop from '~/components/HeaderTop.vue'
import Notice from '~/components/Notice.vue'
import JoinUs from '~/components/JoinUs.vue'

export default {
    components: {
      HeaderTop,Notice,JoinUs
    },
    data() {
      return {
       
      }
    },
}
</script>

<style>
  body{
    background-color:#fafbfc;
    color:#303133;
  }
  .content{
    max-width:1200px;
    width: 100%;
    margin: 0 auto;
    margin-top:10px;
   
  }
  .blog-list{
    background-color: #fff;
    border-radius: 5px;
    margin-top:10px;
    border:1px solid #DCDFE6;
  }
  .blog-item{
    
  }
  .blog-item-text{
   padding-left:10px;
  }
  .blog-title{
    font-size:18px;
    margin-top:5px;
    margin-bottom:5px;
  }
  .blog-jianjie{
    font-size:14px;
    color:#606266;
    line-height: 25px;
  }
  .blog-top{
    padding-left:10px;
  }
  .blog-dd{
    font-size:12px;
    color:#909399;
  }
  .blog-sub-title{
    color:#F56C6C;
  }
  .blog-content-item{
    padding:10px;
     border-bottom:1px solid #E4E7ED;
  }
  .layout-right{
    padding-right: 10px;
  }
  

</style>
