let ipUrl='http://127.0.0.1:7001/';  

let serviceURL={
    getCategoryList:ipUrl+'admin/category/getall',     //后台得到文章列表       
    createBlog:ipUrl+'admin/blog/createBlog',          //后台创建博客       
    updateBlog:ipUrl+'admin/blog/updateBlog',          //后台修改博客     
    getBlogList:ipUrl+'admin/blog/getBlogList',        //后台获得文章列表     
}
export default serviceURL;