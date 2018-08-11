
<template>
    <div class="detailed">
        <!--网站头部-->
        <header-top></header-top>
        <div class="content">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="18">
                    <div class="main-div">
                        <div  class="bread-nav">
                        当前位置：技术胖 >{{blogContent.category_name}}> 正文
                        </div>
                        <div class="blog-content">
                            <div class="content-title">{{blogContent.Title}}</div>
                            <div class="content-fuzhu"> {{blogContent.CreateDate}}  阅读({{blogContent.Visit}}) </div>

                            <div class="content-main" v-html="articleContent">
                              
                               
                               
                            </div>
                        </div>
                    </div>
                    

                </el-col>

                <el-col :xs="0" :sm="6" >
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
    import markdown from '~/plugins/marked'
    import HeaderTop from '~/components/HeaderTop.vue'
    import Notice from '~/components/Notice.vue'
    import JoinUs from '~/components/JoinUs.vue'
    import axios from 'axios'
    import config from '~/serviceApi/serviceApi.js';
    export default {
        components: {
            HeaderTop,Notice,JoinUs
        },
        async asyncData(context){
            let blogID = context.params.blogID
            console.log(blogID)
            let { data } = await axios.post(config.getBlogContent,{blogID:blogID})
             return { blogContent:data }
            
        },
        computed:{
            articleContent () {
            return markdown(this.blogContent.Content, false, true).html
         },
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
    .bread-nav{
         background-color:#FFF;
         padding:5px;
         font-size:14px;
         line-height: 30px;
         border-bottom:1px solid #E4E7ED;
    }
    .main-div{
        border:1px solid #E4E7ED;
        border-radius: 3px;
    }
    .blog-content{
        background-color:#FFF;
    }  
    .content-title{
        font-size:24px;
        text-align: center;
        padding:10px 5px;
    }
    .content-fuzhu{
        font-size:12px;
        text-align: center;
        color:#909399;
    }
    .content-main{
        padding:15px;
        color:#606266;
        font-size:16px;
        line-height: 28px;
    }
    h1{
        font-size:22px;
        color:#F56C6C;
        height: 60px;
        line-height: 60px;
        border-bottom:1px solid #E4E7ED;
        margin-bottom: 10px;
    }
    h2{
        font-size:20px;
        color:#606266;
        font-weight:600;
        height: 50px;
        line-height: 50px;
        border-bottom:1px dashed #EBEEF5;
    }
   
    
    


</style>