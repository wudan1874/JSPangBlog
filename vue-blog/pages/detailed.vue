
<template>
    <div class="detailed">
        <!--网站头部-->
        <header-top></header-top>
        <div class="content">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="18">
                    <div class="main-div">
                        <div  class="bread-nav">
                        当前位置：技术胖 > 视频教程 > 其他教程 > 正文
                        </div>
                        <div class="blog-content">
                            <div class="content-title">TypeScript免费视频教程 ，Deno前置知识</div>
                            <div class="content-fuzhu"> 2018-07-18  阅读(12977) </div>

                            <div class="content-main">
                                Deno都要来了，还不学TypeScript？<br/>
                                近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，
                                可以认为它是下一代 Node，使用 Go 语言代替 C++ 
                                重新编写跨平台底层内核驱动，上层仍然使用 V8 引擎，最终提供一个安全的 TypeScript 运行时。<br/>

                                甚至Dahl在公开场合标识Node.js已经无力回天，Deno将是他的代替品。我相信前端小伙伴们一定都听说了这个消息。<br/>

                                Deno开始使用后用TypeScript变成了一个必会的技能，但是很多小
                                伙伴们还不太熟悉TypeScript的用法。其实TypeScript现在用的已
                                经很广泛了，无论你使用ng、React还是Vue都可以使用TypeScript来实现的你JavaScript代码。<br/>
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
        {{blogContent}}
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
        async asyncData(context){
            let blogID = context.params.blogID
            console.log(11111)
            // let { data } = await axios.post(config.getBlogContent,{blogID:params.blogID})
            // return { blogContent:data }
            //yanfabu123
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
        padding:10px;
        color:#606266;
        font-size:16px;
        line-height: 28px;
    }

</style>