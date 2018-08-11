<template>
  <div>
    <!-- 网站头部 -->
    <header-top></header-top>
    <div class="content">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="18">
            <div class="blog-top">    最新博文</div>
            <div class="blog-list"> 
              <div class="blog-content-item" v-for="(item,index) in blogList" :key="index">
                <nuxt-link :to="{name:'detailed-blogID',params:{blogID:item.BlogID}}" >
                 <el-row clss="blog-item"  >
                    <el-col :xs="8" :sm="6">
                        <img :src="item.TopImage" width="100%"/>
                        {{item.blogID}}
                    </el-col>
                    <el-col  :xs="16" :sm="18" class="blog-item-text">
                        <div class="blog-title"> 
                         {{item.Title}}
                          <span class="blog-sub-title">(更新到43集)</span></div>
                        <div class="blog-dd">
                           {{item.CreateDate}}
                        </div>
                        <el-row>
                          <el-col :xs="0" :sm="24" class="blog-jianjie">
                            {{item.Introduction}}
                          </el-col>
                        </el-row>
                      
                    </el-col>
                  </el-row>
                  </nuxt-link>
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
import axios from 'axios'
import config from '~/serviceApi/serviceApi.js';

export default {
    components: {
      HeaderTop,Notice,JoinUs
    },
    data() {
      return {
       
      }
    },
    async asyncData(){
       let { data } = await axios.get(config.getBlogList)
     
       return {blogList:data}
    }
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
