module.exports = {
  /*
  ** Headers of the page
  */
    head: {
      title: '技术胖的博客',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport',content: 'width=device-width, initial-scale=1' },
        { hid: 'description',name: 'description',content: 'nwy blog front' }
      ],
      link: [
         { rel: 'icon',type: 'image/x-icon',href: '/favicon.ico' }
      ]
    },
    css:[
      {src:'element-ui/lib/theme-chalk/index.css'}
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color:'#3B8070' },
    
    plugins: [{src:'~plugins/element-ui', ssr: true}],
    /*
    ** Build configuration
    */
    build: {
      vendor: ['element-ui']
    }
  }