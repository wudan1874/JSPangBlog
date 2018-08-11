'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //router.get('/user/adduser', controller.user.addUser);
  router.get('/admin/category/getall', controller.category.getAll);
  router.post('/admin/blog/createBlog', controller.adminBlog.createBlog);            //后台增加新博客
  router.post('/admin/blog/updateBlog', controller.adminBlog.updateBlog);            //后台修改博客
  router.post('/admin/blog/getBlogList', controller.adminBlog.getBlogList);           //后台所有文章的列表
  router.post('/admin/blog/deleteBlog', controller.adminBlog.deleteBlog);            //后台根据ID删除文章
  router.post('/admin/blog/getBlogContent', controller.adminBlog.getBlogContent);    //根据文章ID得到文章内容

  //   用户登录
  router.post('/admin/login', controller.user.adminLogin);                           //用户登录的api方法
  router.post('/admin/comparisonTokenID', controller.user.comparisonTokenID);        //比对Token的方法

  //前台使用的api路径
  router.get('/web/getBlogList', controller.webBlog.getBlogList);              //前台使用的文章列表页面
  router.post('/web/getBlogContent', controller.webBlog.getBlogContent);              //前台使用的文章的内容

};
