'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // async addUser() {
      
  //   const userName = 'jspang02'
  //   const password = '1234567'
  //   const result = await this.service.user.addUser(userName,password)
  //   this.ctx.body = result;
  // }

  //用户登录的API
  async adminLogin(){
     let userName = this.ctx.request.body.userName
     let password = this.ctx.request.body.password
     const result  = await this.service.user.find(userName,password)
     console.log(result)
     this.ctx.body = result
    
  }
  //比对Token的API
  async  comparisonTokenID(){
    let userName = this.ctx.request.body.userName
    let tokenID = this.ctx.request.body.tokenID

    const result = await this.service.user.comparisonTokenID(userName,tokenID)
    this.ctx.body =result

  }


}

module.exports = UserController;
