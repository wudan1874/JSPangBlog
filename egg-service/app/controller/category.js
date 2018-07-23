'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getAll() {
    const result = await this.service.category.getAll()
    this.ctx.body = result;
  }
}

module.exports = CategoryController
