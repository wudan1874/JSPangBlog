<template>
    <div class="join-us" >
        <div class="join-title">
              加入我们
        </div>
        <div class="join-content">
            <img src="http://7xjyw1.com1.z0.glb.clouddn.com/weixinpingtai.jpg" width="100%">
            <hr>
            <div class="join-qq">
                <span class="qq-num">QQ群1：364140450 </span>  <span class="qq-b">(5000/5000满) </span> <br/>
                <span class="qq-num">QQ群2：524520566 </span>  <span class="qq-b">(2000/2000满)</span> <br/>
            </div>
            <hr>
            <span class="join-note">
                QQ群人员紧张，所以两个月不在群内互动就请出了，无奈之举，希望理解。
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .join-us{
         width:100%;
        border:1px solid #DCDFE6;
        border-radius: 5px;
        background-color: #fff;
        margin-top:10px;
    }
    .join-title{
         border-bottom:1px solid #E4E7ED;
        font-size:16px;
        line-height: 30px;
        padding:5px;
        background-color: #fbfbfb;
    }
    hr{
        border-top:2px dotted #EBEEF5;
    }
    .qq-num{
        font-size:14px;
        color:#F56C6C;
    }
    .qq-b{
        font-size:12px;
        color:#909399;
    }
    .join-qq{
        padding:5px;
    }
    .join-note{
        display: inline-block;
        padding: 5px;
        font-size:12px;
        color:#C0C4CC;

    }
</style>