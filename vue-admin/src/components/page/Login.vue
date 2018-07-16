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
                    <el-button type="primary"  @click="LoginAction">立即登录</el-button>
                </div>
                
              
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    userName:'',
                    password:''
                }
            }
        },
        methods: {
            LoginAction() {
                
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