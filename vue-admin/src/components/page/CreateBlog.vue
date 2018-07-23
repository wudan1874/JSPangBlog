<template>
    <div class="mainDiv">
       <div class="" >
           <el-breadcrumb separator-class="el-icon-arrow-right" class="breadnav">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>添加文章</el-breadcrumb-item> 
            </el-breadcrumb>
       </div>
        <div>
            <div class="blog-top">
                <div class="bt-one"><el-input v-model="title" placeholder="文章标题"></el-input></div>
                <div class="bt-two"> 
                    <el-select 
                    v-model="selecCategory" placeholder="请选择"  >
                    <el-option 
                        v-for="(item,index) in categoryList" 
                        :key="index"
                        :label="item.category_name"
                        :value="item.category_name"
                    >

                    </el-option>
                    </el-select>
                </div>
            </div>
            <div class="topImage">
                <div class="ti-one">头图路径：</div>
                <div class="ti-two"><el-input v-model="topImage" placeholder="填写路径"></el-input></div>
            </div>
            
            <div>
                <mavon-editor v-model="content" class="mavon-editor" style="width: 100%;"></mavon-editor>
            </div>
            

            
            <div>
                <el-button type="success" @click="createCategory" >发布文章</el-button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import axios from 'axios'
    import config from '@/serviceURL.js';


    export default {
         components: { mavonEditor   },
         data() {
             return {
                 title:'',             //文章标题
                 content:'',           //文章内容
                 topImage:'',          //头图图片路径
                 categoryList: [],     //文章分类数组
                 selecCategory:'',     //选择的类别
             }
         },
         created(){
             this.getCategory()
         },
         methods: {

             //获取文章分类
             getCategory() {
                 axios.get(config.getCategoryList)
                 .then(response=>{
                     console.log(response)
                     if(response.data.category.length>0){
                         this.categoryList = response.data.category
                     }
                 }).catch(error=>{
                     console.log(error)
                 })
             },

             //发布文章
             createCategory(){
                 
                 console.log('title:'+this.title)
                 console.log('selecCategory:'+this.selecCategory)
                 console.log('topImage:'+this.topImage)
                 console.log('content:'+this.content)
                 const isOk = this.validate()
             },

             //验证提交条件是否完整
             validate(){
                 if(this.title.length<1){
                     this.$message.error('文章标题不能为空。')
                     return false;
                 }else if(this.selecCategory<1){
                     this.$message.error('必须选择文章分类')
                     return false;
                 }else if(this.topImage<1){
                     this.$message.error('文章的头图必须填写')
                     return false;
                 }else if(this.content<1){
                     this.$message.error('文章内容不能为空')
                     return false;
                 }else{
                      this.$message('验证通过，开始请求服务器保存数据');
                      return true;
                 }
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
    .mavon-editor{
        height: 500px;
    }
    .mainDiv{
        margin:5px;
    }
    .mainDiv div{
        padding:2px;
    }
    .blog-top{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .bt-one{
        flex:20;
    }
    .bt-two{
        flex:4;
    }
    .jianjie{
        width:80%;
    }
    .topImage{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .ti-one{
        flex:2;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color:#909399;
    }
    .ti-two{
        flex:20;
    }
</style>