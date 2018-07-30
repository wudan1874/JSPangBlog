<template>
    <div>
        <div >
           <el-breadcrumb separator-class="el-icon-arrow-right" class="breadnav">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>文章管理</el-breadcrumb-item> 
            </el-breadcrumb>
       </div>
       <div>

           <el-table :data="blogList" border  stripe fit style="width:100%">
              
               <el-table-column fixed prop="BlogID" label="文章编号" ></el-table-column>
               <el-table-column fixed prop="Title" label="文章标题" ></el-table-column>
               <el-table-column fixed prop="category_name" label="所属栏目" ></el-table-column>
               <el-table-column fixed prop="Visit" label="阅读数" ></el-table-column>
               <el-table-column fixed prop="CreateDate" label="创建日期" ></el-table-column>
               <el-table-column  label="操作" >
                   <template slot-scope="scope">
                        <el-button type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="editBlog(scope.row.BlogID)">编辑</el-button>
                        <el-button type="text" size="small" @click="deleteBlog(scope.$index,scope.row.BlogID)">删除</el-button>
                   </template>
               </el-table-column>
           </el-table>

       </div>
      
    </div>
</template>

<script>
    import axios from 'axios'
    import config from '@/serviceURL.js';

    export default {
        data() {
            return {
                blogList: [],
                userInfo:{}    //用户信息
            }
        },
        created() {
            this.getList()
        },
        methods: {
            //获取用户本地信息
            getUserInfo(){
                if(localStorage.userInfo){
                    this.userInfo=JSON.parse(localStorage.userInfo)
                }else{
                     this.$router.push({name:'Login'})
                }
            },
            //获得文章列表
            getList() {

                        this.getUserInfo() //获取用户信息
                       
                        axios.post(config.getBlogList,{
                            userName:this.userInfo.userName,
                            tokenID:this.userInfo.tokenID
                        })
                        .then( (response)=> {
                            console.log(response)
                       
                            if(response.data){
                                this.blogList=response.data
                            }else{
                                this.$router.push({name:'Login'})
                            }
                            
                          
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
  
                   


            },
            //删除文章的方法
            deleteBlog(index,blogID){

                this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    
                     this.deleteBlogAction(index,blogID)
                     
                   
                }).catch((error) => {
                    console.log(error)
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });

            },
             //删除文章的执行方法
            deleteBlogAction(index,blogID){
                axios.post(config.deleteBlog,{
                    blogID:blogID,
                    userName:this.userInfo.userName,
                    tokenID:this.userInfo.tokenID
                })
                .then( (response)=> {

                    if(response.data){
                         this.blogList.splice(index,1)
                          this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else{
                        this.$router.push({name:'Login'})
                    }
                   
                
                   
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            //编辑文章的执行方法
            editBlog(blogID){
                this.$router.push({name:'CreateBlog',params:{blogID:blogID}})
            }


        },
       

    }
</script>

<style scoped>
     .breadnav{
        line-height: 40px;
        background-color: #F2F6FC;
        border-bottom:1px solid #E4E7ED;
        padding-left: 10px;
    }
</style>