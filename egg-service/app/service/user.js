const Service = require('egg').Service

class UserService extends Service{
    //用户登录的service
    async find(userName,password){
        let user = await this.app.mysql.get('jspang_User',{userName:userName,password:password})
        if(user){
           //登录成功了

           //把Token生成，然后插入到数据库里
           let tokenID = (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
           //生成时间戳
           let actionTime = Date.parse(new Date())
           const row = { actionTime : actionTime,tokenID: tokenID}
           const options = {  where:{ userName:userName } }
           const result = await this.app.mysql.update('jspang_User',row,options)
           
           if(result.affectedRows === 1){
               //再次查找数据库，然后把结果返回，这时的结果带上了tokenID和时间
                 user = await this.app.mysql.get('jspang_User',{userName:userName,password:password})
                 return { user }
           }else{
               return null
           }

        }
       
    }

    //比对tokenID是否过期 *********重要方法
    async comparisonTokenID(userName,tokenID){

        let maxTime =  1000 * 60 * 60 * 2     //1000毫秒*60秒*60分*2 = 2小时  不超时时间

        let result =  await this.app.mysql.get('jspang_User',{userName:userName,tokenID:tokenID})

        let nowTime = Date.parse(new Date())
        let actionTime = parseInt(result.actionTime)
        let intervalTime = nowTime-actionTime
        console.log('intervalTime:'+intervalTime)

        if(maxTime<intervalTime){
            //tokenID已经过期
            console.log('过期')
            return false

        }else{
            //tokenID没有过期，更新数据库的最后操作时间后，在返回值
            console.log('没过期')
            const row = { actionTime : nowTime }
            const options = {  where:{ userName:userName } }
            const result = await this.app.mysql.update('jspang_User',row,options)

            return true
        }


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