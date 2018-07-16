'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async addUser() {
      
    const userName = 'jspang02'
    const password = '1234567'
    const result = await this.service.user.addUser(userName,password)
    this.ctx.body = result;
  }
}

module.exports = UserController;
