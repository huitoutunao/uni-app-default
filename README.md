# uni-app-default

`uni-cli` 基础搭建的 `Vue2.x` 初始模板。[详情看官网](https://uniapp.dcloud.io/quickstart-cli.html#%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85)

推荐使用 [yarn1.x](https://www.yarnpkg.cn/) 安装项目依赖。

## 注意

1. 开发前务必先运行如下指令升级 `uni-app` 编译器版本：
```sh
$ npx @dcloudio/uvm
```

2. 提交代码使用了 `lint` 检查，建议每写完一个页面运行如下指令检查 `js` 和 `scss/css`：
```sh
$ yarn run lint:js
```
```sh
$ yarn run lint:css
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
