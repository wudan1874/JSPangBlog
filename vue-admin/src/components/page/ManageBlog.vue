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
               <el-table-column fixed prop="Visit" label="阅读数" ></el-table-column>
               <el-table-column fixed prop="CreateDate" label="创建日期" ></el-table-column>
               <el-table-column  label="操作" >
                   <template slot-scope="scope">
                        <el-button type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small">删除</el-button>
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
                blogList: []
            }
        },
        created() {
            this.getList()
        },
        methods: {
            //获得文章列表
            getList() {
                
                
                    axios.get(config.getBlogList)
                    .then( (response)=> {
                       //this.$message.success(response.data)
                       this.blogList=response.data
                        console.log(response)
                    })
                    .catch((error)=>{
                        console.log(error);
                    })


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