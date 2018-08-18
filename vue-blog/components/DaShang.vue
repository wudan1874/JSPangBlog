<template>
    <div class="dashang">
         <el-tabs v-model="active" type="card" >
            <el-tab-pane label="微信打赏" name="first">
                <div>
                    <img src="http://7xjyw1.com1.z0.glb.clouddn.com/dashangwx.jpg" width="100%" />
                </div>
                <div class="dashang-txt">
                        <div class="dashang-title">打赏获得5项特权</div>
                        <ul>
                            <li> 1.技术胖免费视频离线高清版下载（共210集）;</li>
                            <li> 2.纯金网站15元代金券，用于购买技术胖收费课程;</li>
                            <li> 3.加入技术胖微信群，享有更多互动和人脉资源;</li>
                            <li> 4.和11年程序老兵技术胖成为微信好友;</li>
                            <li>  5.定期收听前端职场软技能分享。</li>
                        </ul>
                        <div class="dashang-title">打赏后3步获得特权</div>
                        <ul>
                            <li> 1.加技术胖微信:php100;</li>
                            <li> 2.发打赏截图给技术胖;</li>
                            <li> 3.技术胖邀请你进群，查看群公告;</li>
                           
                        </ul>

                </div>

            </el-tab-pane>


            <el-tab-pane label="支付宝打赏" name="second">
                <div>
                    <img src="http://7xjyw1.com1.z0.glb.clouddn.com/dashangalipay.jpg" width="100%" />
                </div>

                     <div class="dashang-txt">
                        <div class="dashang-title">打赏获得5项特权</div>
                        <ul>
                            <li> 1.技术胖免费视频离线高清版下载（共210集）;</li>
                            <li> 2.纯金网站15元代金券，用于购买技术胖收费课程;</li>
                            <li> 3.加入技术胖微信群，享有更多互动和人脉资源;</li>
                            <li> 4.和11年程序老兵技术胖成为微信好友;</li>
                            <li>  5.定期收听前端职场软技能分享。</li>
                        </ul>
                        <div class="dashang-title">打赏后3步获得特权</div>
                        <ul>
                            <li> 1.加技术胖微信:php100;</li>
                            <li> 2.发打赏截图给技术胖;</li>
                            <li> 3.技术胖邀请你进群，查看群公告;</li>
                           
                        </ul>

                </div>
            </el-tab-pane>
            
           
        </el-tabs>
    </div>
  
</template>

<script>


export default {
    data() {
      return {
           active: 'first'
      }
    },
}
</script>

<style>
    .dashang{
        width:100%;
        border:1px solid #DCDFE6;
        border-radius: 5px;
        background-color: #fff;
        margin-top:10px;
    }
    .dashang-txt{
        padding:10px;
    }
    .dashang-txt ul{
        padding:0px;
    }
    .dashang-txt ul li{
        color:#909399;
       list-style: none;
       font-size:12px;
       height: 20px;
       line-height: 20px;

    }
    .dashang-title{
        color:#F56C6C;
    }
</style>
