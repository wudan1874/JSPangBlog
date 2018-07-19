<template>
    <div>
        <el-container>
            <!--顶部容器-->
            <el-header class="jsp-header">
                <div class="logo">
                    技术云
                </div>

                <div>
                   
                </div>

            </el-header>
            <!--侧边栏-->   
            <div>
                 <div id="jsp-aside" >
                    <ul>
                        <li @click="goUrl(0,'CreateBlog')" :class="{navActive:urlActiveIndex == 0}">写新文章</li>
                        <li @click="goUrl(1,'ManageBlog')" :class="{navActive:urlActiveIndex == 1}">管理文章</li>
                        <li @click="goUrl(2,'LeavingMessage')" :class="{navActive:urlActiveIndex == 2}">回复留言</li>
                        <li @click="goUrl(3,'DashBoard')" :class="{navActive:urlActiveIndex == 3}">统计查看</li>
                    </ul>
                </div>
                <!--主要区域-->
                <div id="jsp-main">
                    <router-view/>
                </div>
            </div>         
           
        </el-container>
    </div>
</template>

<script>
    export default {
       data() {
           return {
               urlActiveIndex:0,
           }
       },
        mounted() {
           try{

           }catch(err){

           }
           let  winHeigh = document.documentElement.clientHeight
           let  winWidth = document.documentElement.clientWidth
            console.log(winHeigh)
           document.getElementById("jsp-aside").style.height=winHeigh-60+'px' 
           document.getElementById("jsp-main").style.width=winWidth-160+'px' 
        },
        methods: {
            goUrl(index,path) {
                console.log(index,path);
                this.urlActiveIndex=index;
                console.log( this.urlActiveIndex)
                this.$router.push({name:path})
            }
        },
    }
</script>

<style scoped>
    .jsp-header{
        background-color: #1d2b40;
    }
    #jsp-aside{
        background-color:rgb(41, 66, 101);
      
    }
    .logo{
        font-size:28px;
        color:#FFF;
        float: left;
        line-height: 60px;
    }
    #jsp-aside{
        float: left;
        width:160px;
    }
    #jsp-aside ul{
          padding:0px;
          margin:0px;
    }
    #jsp-aside ul li {
        list-style:none;
        line-height: 40px;
        border-bottom: 1px solid rgb(157, 171, 194);
        text-align: center;
        color:rgb(157, 171, 194);
        cursor:pointer;
   }
   #jsp-main{
       float: left;
   }
   .navActive{
       background-color: rgb(157, 171, 194) !important;
       color:rgb(41, 66, 101) !important;
   }
</style>