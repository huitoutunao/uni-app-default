const path = require('path')
const postcssComment = require('postcss-comment')
const postcssImport = require('postcss-import') // eslint-disable-line
const autoPrefixer = require('autoprefixer') // eslint-disable-line
const uniPostcss = require('@dcloudio/vue-cli-plugin-uni/packages/postcss')

module.exports = {
  parser: postcssComment,
  plugins: [
    postcssImport({
      // resolve 可选参数 id, basedir, importOptions
      resolve(id) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        }
        if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        }
        if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      },
    }),
    autoPrefixer({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    uniPostcss,
  ],
}
