<template>
    <div class="mainDiv">
       <div  >
           <el-breadcrumb separator-class="el-icon-arrow-right" class="breadnav">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>添加文章</el-breadcrumb-item> 
            </el-breadcrumb>
       </div>
        <div>
            <div class="blog-top">
                <div class="bt-one">
                    <el-input v-model="title" placeholder="文章标题">
                         <template slot="prepend">文章标题</template>
                    </el-input>
                    </div>
                <div class="bt-two"> 
                    <el-select 
                    v-model="selecCategory" placeholder="请选择"  >
                    <el-option 
                        v-for="(item,index) in categoryList" 
                        :key="index"
                        :label="item.category_name"
                        :value="item.ID"
                    >

                    </el-option>
                    </el-select>
                </div>
            </div>
            <div class="topImage">
               
              <el-input v-model="topImage" placeholder="填写路径">
                   <template slot="prepend">头图路径</template>
             </el-input>
            </div>
            
            <div>
                <mavon-editor v-model="content" class="mavon-editor" style="width: 100%;"></mavon-editor>
            </div>
            <div>
                文章简介:
                 <el-input type="textarea" style="width:90%" v-model="introduction" >{{introduction}}</el-input>

            </div>
                    
            <div>
                <el-button type="success" @click="clickButton" >{{buttonText}}</el-button>
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
                 blogID:'',            //文章ID，由前端生成
                 title:'',             //文章标题
                 content:'',           //文章内容
                 topImage:'',          //头图图片路径
                 categoryList: [],     //文章分类数组
                 selecCategory :'',     //选择的类别
                 introduction:'',      //文章简介
                 isNew:true,           //是否是新文章
                 buttonText:'发布文章', //按钮显示文字
                 userInfo:{}           //用户信息
             }
         },
         created(){

             this.getUserInfo() //获取用户信息

             this.blogID = this.$route.params.blogID ? this.$route.params.blogID : '';
             this.getCategory()

             if(this.blogID){
                 this.isNew = false;
                 this.buttonText='保存文章'
                 console.log('this.blogID:'+this.blogID)
                 this.getBlogContent()

             }else{
                 this.blogID = this.createRandomId()  //得到文章ID
             }

             
             
               
            


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
             //点击保存或完成按钮去
             clickButton(){
                 console.log('title:'+this.title)
                 console.log('selecCategory:'+this.selecCategory)
                 console.log('topImage:'+this.topImage)
                 console.log('content:'+this.content)
                 console.log('blogID:'+this.blogID)
                 if(this.isNew){
                     this.createCategory()
                 }else{
                     this.updateBlog()
                 }

             },

             //发布文章
             createCategory(){
                 
                
                 const isOk = this.validate()
                 //通过验证，向数据库中写入数据
                 if(isOk){ 
                    //利用axios向后台写入数据

                    axios.post(config.createBlog, {
                        blogID: this.blogID,
                        categoryID:this.selecCategory,
                        title: this.title,
                        content: this.content,
                        topImage: this.topImage,
                        introduction:this.introduction,
                        userName:this.userInfo.userName,
                        tokenID:this.userInfo.tokenID
                    })
                    .then( (response)=> {
                        if(response.data){
                            this.isNew=false;
                            this.buttonText="修改文章"
                            this.$message.success(response.data)
                        }else{
                             this.$router.push({name:'Login'}) 
                        }
                       
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                 }
             },
             //更新文章
             updateBlog(){
                 const isOk = this.validate()
                if(isOk){ 
                    //利用axios向后台写入数据
                    axios.post(config.updateBlog, {
                        blogID: this.blogID,
                        categoryID:this.selecCategory,
                        title: this.title,
                        content: this.content,
                        topImage: this.topImage,
                        introduction:this.introduction,
                        userName:this.userInfo.userName,
                        tokenID:this.userInfo.tokenID
                    })
                    .then( (response)=> {
                         if(response.data){
                            this.$message.success(response.data)
                         }else{
                            this.$router.push({name:'Login'}) 
                         }
                      
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                 }

             },

             //验证提交条件是否完整
             validate(){
                 if(this.title.length<1){
                     this.$message.error('文章标题不能为空。')
                     return false;
                 }else if(this.selecCategory<1){
                     this.$message.error('必须选择文章分类')
                     return false;
                 }else if(this.topImage.length<1){
                     this.$message.error('文章的头图必须填写')
                     return false;
                 }else if(this.content.length<1){
                     this.$message.error('文章内容不能为空')
                     return false;
                 }else{
                      this.$message('验证通过，开始请求服务器保存数据');
                      return true;
                 }
             },
             //生成随机不重复的ID
             createRandomId(){
                   return (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
             },

            //根据ID查找出文章内容，并进行赋值
            getBlogContent(){
                axios.post(config.getBlogContent,{
                    blogID:this.blogID
                })
                .then( (response)=> {
                   console.log(response)
                
                   this.title=response.data.Title
                   this.content=response.data.Content
                   this.topImage=response.data.TopImage
                   this.selecCategory=response.data.categoryID
                   this.introduction=response.data.Introduction

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
    .mavon-editor{
        height: 500px;
    }
    .mainDiv{
       
        width: 100%;
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