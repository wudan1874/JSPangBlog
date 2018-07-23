const Service = require('egg').Service

class BlogService extends Service{
   

    async addBlog(title,content,topImage,introduction){
        // 获得当前时间，并进行存储
       

        Date.prototype.format = function (fmt) { 
            var o = {
                "M+": this.getMonth() + 1, 
                "d+": this.getDate(), 
                "h+": this.getHours(), 
                "m+": this.getMinutes(), 
                "s+": this.getSeconds(), 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
         }

         let createDate = (new Date()).format("yyyy-M-d h:m:s.S") 

        const result = await this.app.mysql.insert('jspang_Blog',
        {
            title:title,
            content:content,
            createDate:createDate,
            topImage:topImage,
            visit:0,
            introduction:introduction
        })
        console.log(result)
        if(result.affectedRows===1){
            return '文章发布成功'
        }else{
            return '文章发布失败'
        }
    }
}

module.exports = BlogService