'use strict';

module.exports = appInfo => {
  const config = exports = {};

 

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531448955101_8255';

  config.security = {
     csrf: {
       ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
     },
    methodnoallow: {
      enable: false
    }, 
    domainWhiteList: [ 'http://localhost:8080' ]
  };

  config.cors = {
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials:true
  }

  // add your config here
  config.middleware = [];


  return config;
};


