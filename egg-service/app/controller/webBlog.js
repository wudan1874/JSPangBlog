'use strict';

const Controller = require('egg').Controller;

class WebBlogController extends Controller {
  async index() {
    this.ctx.body = 'hi, blog';
  }

  async showBlog(){
      this.ctx.body= 'hi show blog'
  }
}

module.exports = WebBlogController;
