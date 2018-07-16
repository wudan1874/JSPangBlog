const Service = require('egg').Service

class UserService extends Service{
    async find(userName,password){
        const user = await this.app.mysql.get('jspang_User',{userName:userName,password:password})
        return {user}
    }

    async addUser(userName,password){
        const result = await this.app.mysql.insert('jspang_User',{userName:userName,password:password})
        console.log(result)
        if(result.affectedRows===1){
            return '插入成功'
        }else{
            return '插入失败'
        }
    }
}

module.exports = UserService