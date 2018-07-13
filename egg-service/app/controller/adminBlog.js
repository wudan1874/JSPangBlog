'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    this.ctx.body = 'hi, blog';
  }

  async showBlog(){
      this.ctx.body= 'hi show blog'
  }
}

module.exports = BlogController;
