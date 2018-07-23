const Service = require('egg').Service

class CategoryService extends Service{
    async getAll(){
        const category = await this.app.mysql.select('jspang_category')
        return {category}
    }


    



 
}

module.exports = CategoryService