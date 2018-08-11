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
      {src:'element-ui/lib/theme-chalk/index.css'},
      {src:'~/assets/code.css'}
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color:'#3B8070' },
    
    plugins: [
      {src:'~plugins/element-ui', ssr: true},
      {src: '~/plugins/marked.js' },
      {src:'~plugins/highlight.js'},
    ],
    /*
    ** Build configuration
    */
    build: {
      vendor: ['element-ui','marked','highlight.js','axios']
    },
    

  }