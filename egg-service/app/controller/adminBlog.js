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
  }
}

module.exports = BlogController;
