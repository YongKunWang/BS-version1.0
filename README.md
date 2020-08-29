# vue-version1.0

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 项目笔记

## 新建项目

- [x] 使用vue2.x, 因为elementUI是基于vue2 写的
- [x] .prettierrc 文件是修改vsCode中的格式化的方式，我说怎么在idea下不起作用
```json
 {
    "semi": false,
    "singleQuote": true
}
```
- [x] 安装插件 elementUI 设置按需导入
- [x] 安装运行时依赖axios 安装开发时依赖 less less-loader

记录时间: 2020-08-27 18:17:53

## 项目进程

### 屏幕适配
这次不使用elementUI的屏幕适配了  
采用flexible.js + rem 作为屏幕适配方案！

1. 安装
```bash
npm install lib-flexible --save
```
2. 引入
（在项目入口文件 main.js 里 引入 lib-flexible） 
```js
import 'lib-flexible/flexible'
```
3. 取消public => index.html的meta的相关属性
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
4. 修改flexible.js文件的相关部分为PC适配
```js
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            // 移动端的设置
            // width = 540 * dpr;

            //PC端的配置
            width = width * dpr;
        }
        // 移动端配置
        // var rem = width / 10;
        // PC端配置 1em == 80px
        var rem = width / 24;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }
```

### rem布局

采用的是flex布局！

### 引入echarts 

1. 安装
```bash
cnpm install echarts -S
```
2. 全局挂载
```js
// 引入echarts
import echarts from 'echarts'
// 挂载到vue原型
Vue.prototype.$echarts = echarts;
```

### 主页布局

头部占满屏幕
主题需要有外边距！

#### 出现的问题

1. eslint:'baseUrl' is never reassigned.Use 'const' instead
这个报错的意思是检测到使用let关键字声明的变量，在初始分配后从未重新分配变量，将let替换成const,减少认知负荷并提高可维护性。 如果想要关闭这个规则，就在eslint配置文件里这样写：
```json
{
    "rules":{
        "prefer-const": "off"
    }
}
```
[参考资料](https://juejin.im/post/6844904169229254664)

2. 超出屏幕滚动的问题：
应该都知道，现代浏览器滚动条默认是overflow:auto类型的，也就是如果尺寸不足一屏，没有滚动条；超出，出现滚动条
```css
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: url(../images/homeBg/bg.jpg);
    /* 一定要是这个 要不出现超出屏幕就不滚动的情况了 */
    overflow: auto;
}
```
3. 关于rem的问题，要根据自己的屏幕来定！！！ cssrem的像素！
