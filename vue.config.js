module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/styles/index.scss";`
      }
    }
  }
}
