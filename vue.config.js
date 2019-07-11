module.exports = {
  // publicPath : '/',

  // 打包名称
  outputDir: 'H5',

  //放置打包后生成的静态资源（js、css、img、fonts）的目录，该目录相对于outputDir。
  // assetsDir:' ',

  //指定生成的index.html的输出路径，相对于outputDir。也可以是一个绝对路径。
  // indexPath : 'index.html',

  // filenameHashing : true,

  // 打包时不生成.map文件
  productionSourceMap: false,
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  //     .set('_c', resolve('src/components'))
  // },
}