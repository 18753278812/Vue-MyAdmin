module.exports = {
  configureWebpack: config => {
    const base = {
      devServer: {
        proxy: {
          '/api': {
            target: 'http://123.56.217.0:7300/mock/5cf07d790777f25483ceb1b7/api',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/'
            }
          }
        }
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return Object.assign({}, base, {

      })
    } else {
      // 为开发环境修改配置...
      return Object.assign({}, base, {

      })
    }
  }
}