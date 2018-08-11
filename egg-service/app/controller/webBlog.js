'use strict';

const Controller = require('egg').Controller;

class WebBlogController extends Controller {
  async index() {
    this.ctx.body = 'hi, blog';
  }

  async showBlog(){
      this.ctx.body= 'hi show blog'
  }
  //得到博客文章列表
  async getBlogList(){

    let results = await this.service.blog.webGetBlogList()
    this.ctx.body = results
  }
  //根据ID得到博客的文章详情
  async getBlogContent(){
    const blogID = this.ctx.request.body.blogID
    const result = await this.service.blog.webGetBlogContent(blogID)
    this.ctx.bodyh = result
  }

}

module.exports = WebBlogController;
