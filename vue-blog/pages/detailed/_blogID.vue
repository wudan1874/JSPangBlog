
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

                            <div id="content" class="content-main" v-html="articleContent">
                              
                               
                               
                            </div>
                        </div>
                    </div>
                    

                </el-col>

                <el-col :xs="0" :sm="6" >
                     <!--文章列表-->
                    <div class="toc-list">
                        <div class="toc-list-title">文章目录</div>
                        <div class="toc-list-content">
                            <ul>
                                <li v-for="(item ,index) in tocList" :key="index">
                                   <a :href="item.anchor"> {{item.text}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>


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
        data() {
            return {
                tocList: []
            }
        },
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
                
            }
        },
        methods: {
            //设置视频iframe的高度，根据屏幕的大小
            setIframeWidth() {
                //得到iframe元素
                let dom_iframes = document.getElementsByTagName('iframe')
                //得到内容层的宽度
                let tempWidth = document.getElementById('content').offsetWidth
                //循环设置iframe的高度，让他尽量美观
                for(let i=0;i<dom_iframes.length;i++){
                    document.getElementsByTagName('iframe')[i].height=tempWidth/1.5
                }
            },
            //得到文章列表
            getTocContent(){
                 let  data  = markdown(this.blogContent.Content, false, true).toc

                this.tocList = data.filter(item=>item.level==2)
                console.log('aa：'+JSON.stringify(this.tocList))
            }
        },

        mounted(){
            this.setIframeWidth();  //设置视频宽高比例
            this.getTocContent()
           
          
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
    .toc-list{
        border:1px solid #DCDFE6;
        border-radius: 5px;
         background-color: #fff;
        margin-bottom:10px;
    }
    .toc-list-title{
          border-bottom:1px solid #E4E7ED;
        font-size:16px;
        line-height: 30px;
        padding:5px;
        background-color: #fbfbfb;
    }
    .toc-list-content{
        font-size:14px;
        padding:10px;
    }
    .toc-list-content  ul{
        padding:0px;
        margin: 0px;
    }
    .toc-list-content li{
       list-style: none;
    }


    h2{
        font-size:22px;
        color:#F56C6C;
        height: 60px;
        line-height: 60px;
        border-bottom:1px solid #E4E7ED;
        margin-bottom: 10px;
    }
    h3{
        font-size:20px;
        color:#606266;
        font-weight:600;
        height: 50px;
        line-height: 50px;
        border-bottom:1px dashed #EBEEF5;
    }
    p{
        margin:10px;
    }
   
    
    


</style>