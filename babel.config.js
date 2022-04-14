const plugins = []

const babelPluginUniApiIndex = require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index')

if (process.env.UNI_OPT_TREESHAKINGNG) {
  plugins.push(babelPluginUniApiIndex)
}

const nodePath = require('path')
const babelPluginConsole = require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console')

if (
  (process.env.UNI_PLATFORM === 'app-plus' && process.env.UNI_USING_V8) ||
  (process.env.UNI_PLATFORM === 'h5' && process.env.UNI_H5_BROWSER === 'builtin')
) {
  const isWin = /^win/.test(process.platform)

  const normalizePath = (path) => (isWin ? path.replace(/\\/g, '/') : path)

  const input = normalizePath(process.env.UNI_INPUT_DIR)
  try {
    plugins.push([
      babelPluginConsole,
      {
        file(file) {
          const files = normalizePath(file)
          if (files.indexOf(input) === 0) {
            return nodePath.relative(input, files)
          }
          return false
        },
      },
    ])
  } catch (e) {
    console.log(e)
  }
}

process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui']
process.UNI_LIBRARIES.forEach((libraryName) => {
  plugins.push([
    'import',
    {
      libraryName,
      customName: (name) => `${libraryName}/lib/${name}/${name}`,
    },
  ])
})
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        modules: 'commonjs',
        useBuiltIns: process.env.UNI_PLATFORM === 'h5' ? 'usage' : 'entry',
      },
    ],
  ],
  plugins,
}
