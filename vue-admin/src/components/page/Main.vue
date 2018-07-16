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
            <el-aside id="jsp-aside" width="180px">
                <ul>
                    <li>写新文章</li>
                    <li>管理文章</li>
                    <li>回复留言</li>
                    <li>统计查看</li>
                </ul>
            </el-aside>
            <!--主要区域-->
            <el-main>
               
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
       
        mounted() {
           try{

           }catch(err){

           }
           let  winHeigh =document.documentElement.clientHeight
            console.log(winHeigh)
           document.getElementById("jsp-aside").style.height=winHeigh+'px' 
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
    #jsp-aside ul{
          padding:0px;
    }
    #jsp-aside ul li {
        list-style:none;
        line-height: 40px;
        border-bottom: 1px solid rgb(157, 171, 194);
        text-align: center;
        color:rgb(157, 171, 194);
   }
</style>