'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/adduser', controller.user.addUser);
  router.get('/admin/category/getall', controller.category.getAll);
  router.post('/admin/blog/createBlog', controller.adminBlog.createBlog);
};
