let ipUrl='http://127.0.0.1:7001/';  

let serviceURL={
    getBlogList:ipUrl+'web/getBlogList',     //得到首页文章列表       
    getBlogContent:ipUrl+'web/getBlogContent',  //得到文章详细信息     
    getBlogListByCategoryID:ipUrl+'web/getBlogListByCategoryID',  //根据ID得到文章类别列表     
    
}
export default serviceURL;