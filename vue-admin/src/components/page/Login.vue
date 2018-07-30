<template>
    <div class="main">
        <div class="login-top">
            技术胖博客后台登录
        </div>

        <div class="login-form">
            <el-form ref="form" :model="form" label-position="right">
                <el-form-item label="用户名：">
                    <el-input v-model="form.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <div class="form-buttom">
                    <el-button type="primary"  @click="loginAction">立即登录</el-button>
                </div>
                
              
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import config from '@/serviceURL.js';
    export default {
        data() {
            return {
                form: {
                    userName:'',
                    password:''
                }
            }
        },
        created() {
            //进入页面先判断tokenID是否过期
            if(localStorage.userInfo){
                let userInfo = JSON.parse(localStorage.userInfo)
                let userName = userInfo.userName
                let tokenID  = userInfo.tokenID
                this.comparisontTokenID(userName,tokenID)
            }
        },
        methods: {
            //管理员的登录的方法
            loginAction() {
                let isValidate = this.loginValidate()
                if(isValidate){
                    //验证成功后，向后台请求登录
                    axios.post(config.userLogin, {
                       userName:this.form.userName,
                       password:this.form.password
                    })
                    .then( (response)=> {
                       console.log(response)
                       
                       if(response.data.user){
                           //登录成功后，写入localStorage里边
                           let userInfo = {
                               userName: response.data.user.UserName,
                               tokenID: response.data.user.tokenID
                           }
                           userInfo = JSON.stringify(userInfo)  //转换成字符串
                           localStorage.setItem('userInfo',userInfo)  //保存到本地

                           




                           this.$message.success('登录成功')
                           
                           

                           setTimeout(()=>{
                               this.$router.push({name:'ManageBlog'})
                           },500)

                       }else{
                           this.$message.error('用户名密码错误')
                           this.form.userName = ''
                           this.form.password = ''
                            
                       }
                       
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                }

            },
            //验证提交的表单方法
            loginValidate(){

                if(this.form.userName.length<6){
                    this.$message.error('用户名不能少于6位')
                    return false
                }else if(this.form.password.length<6){
                    this.$message.error('密码不嫩少于6位')
                    return false
                }else{
                    this.$message('客户端验证通过，向服务器请求数据')
                    return true
                }

            },
            //比对TokenID的方法
            comparisontTokenID(userName,tokenID){


                 axios.post(config.comparisonTokenID, {
                       userName:userName,
                       tokenID:tokenID
                    })
                    .then( (response)=> {
                       console.log(response)
                       if(response.data){
                           //tokenID没有过期，直接进入后台首页
                          this.$router.push({name:'ManageBlog'})
                          
                       }
                       
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                

            }


        },
    }
</script>

<style scoped>
    body{
        padding:0px;
        margin:0px;
    }
    .login-top{
        border-bottom:1px solid #DCDFE6;
        background-color: #F2F6FC;
        padding:5px;
        line-height: 40px;
        color:#606266;
        
    }
    .login-form{
        width:300px;
        height: auto;
        margin:60px auto;
        border:1px solid #DCDFE6;
        border-radius: 5px;
        padding:10px;

    }
    .form-buttom{
        text-align: right;
    }
</style>