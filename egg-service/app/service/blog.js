const Service = require('egg').Service

class BlogService extends Service{
   
    //后台增加博客文章
    async addBlog(blogID,categoryID,title,content,topImage,introduction){
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
            blogID:blogID,
            categoryID:categoryID,
            title:title,
            content:content,
            createDate:createDate,
            updateDate:createDate,
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

    //后台修改博客文章和
    async updateBlog(blogID,categoryID,title,content,topImage,introduction){

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

         let updateDate = (new Date()).format("yyyy-M-d h:m:s.S") 

         const row = { 
            categoryID:categoryID,
            title:title,
            content:content,
            updateDate:updateDate,
            topImage:topImage,
            introduction:introduction
          }

          const options = {
              where:{
                blogID : blogID
              }
          }

        const result = await this.app.mysql.update('jspang_Blog',row,options)
       
        console.log(result)
        if(result.affectedRows===1){
            return '文章修改成功'
        }else{
            return '文章修改失败'
        }

    }

    //后台的博客文章列表
    async getBlogList(){
        const results = await this.app.mysql.select('jspang_Blog',{
            columns:['BlogID','categoryID','Title','CreateDate','UpdateDate','Visit'],
            orders:[['ID','desc']]
        })
        return results
    }
}

module.exports = BlogService