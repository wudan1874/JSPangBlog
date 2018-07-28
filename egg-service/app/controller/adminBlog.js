'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    this.ctx.body = 'hi, blog';
  }

  async showBlog(){
      this.ctx.body= 'hi show blog'
  }
  //后台添加文章的方法
  async createBlog(){
      //获取前台参数
      let blogID = this.ctx.request.body.blogID
      let title =  this.ctx.request.body.title
      let content =  this.ctx.request.body.content
      let topImage =  this.ctx.request.body.topImage
      let introduction =  this.ctx.request.body.introduction?this.ctx.request.body.introduction:''
      let categoryID = this.ctx.request.body.categoryID

      
      const result = await this.service.blog.addBlog(blogID,categoryID,title,content,topImage,introduction)
      this.ctx.body = result

  }

  //修改后台文章的方法
  async updateBlog(){

    let blogID = this.ctx.request.body.blogID
    let title =  this.ctx.request.body.title
    let content =  this.ctx.request.body.content
    let topImage =  this.ctx.request.body.topImage
    let introduction =  this.ctx.request.body.introduction?this.ctx.request.body.introduction:''
    let categoryID = this.ctx.request.body.categoryID

    const result = await this.service.blog.updateBlog(blogID,categoryID,title,content,topImage,introduction)
    this.ctx.body = result

  }

  //得到所有博客的列表
  async getBlogList(){
    const result = await this.service.blog.getBlogList()
    this.ctx.body = result
  }

}

module.exports = BlogController;
