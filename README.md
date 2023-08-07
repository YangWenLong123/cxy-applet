## cxy-applet

基于uniapp创建，使用vue2开发

## 项目目录

```
├─ api                              —— 接口配置中心
├─ components                       —— 公共组件
│    ├─ banner
├─ page                             —— 页面路由
│    ├─ index                       —— 首页
│    ├─ user                        —— 我的
└─ server
│    ├─ index.js                    —— 请求配置中心
├─ static                           —— 静态资源
├─ utils
│    ├─ index.js                    —— 公共方法
│    ├─ promisify.js                —— 适配器文件
│    ├─ WXBizDataCrypt.js           —— 手机号解密
├─ uview-ui                         —— ui组件库
└─ .editorconfig                    —— 编辑器代码风格统一配置
└─ .gitignore                       —— git提交过滤文件配置
└─ .prettierignore                  —— prettier文件忽略
└─ .prettierrc                      —— prettierrc代码格式配置
└─ index.html                       —— html入口
└─ commitlint.config.js             —— 代码提交风格配置
└─ main.js                          —— js文件入口
└─ vue.config.js                    —— 项目基础配置
└─ mainifest                        —— 项目信息基础配置中心
└─ package-lock.json                —— 版本依赖树
└─ package.json                     —— 项目信息，执行命令，依赖，钩子
└─ pages.json                       —— 路由，tabbar，全局样式配置
└─ README.md                        —— 说明文档
└─ uni.scss                         —— 全局样式
└─ App.vue                          —— vue入口文件
```

## ui组件

uView是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。但目前除微信小程序，其它小程序平台的兼容可能存在一些问题，后续会针对这方面持续优化。

官方文档:https://uviewui.com/components/intro.html

## 代码提交规范(commitlint + husky)

```
npx husky-init
npm install @commitlint/cli @commitlint/config-conventional -D
```

在根目录创建commitlint.config.js配置文件

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

将commitlint加到husky的钩子中

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

提交规范

```
feat：新增功能
fix：bug 修复
docs：文档更新
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
refactor：重构代码(既没有新增功能，也没有修复 bug)
perf：性能, 体验优化
test：新增测试用例或是更新现有测试
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
chore：不属于以上类型的其他类，比如构建流程, 依赖管理构建过程或辅助工具的变动
revert：回滚某个更早之前的提交
```

示例

```
git commit -m 'fix: 修复xxx页面跳转异常'
```

## prettier规范

执行命令格式化项目代码格式: `npm run prettier`

```json
module.exports = {
  //使用tab缩进还是空格缩进，false表示空格缩进；
  useTabs: true,
  //tab是空格的情况下，是几个空格，选择2个；
  tabWidth: 2,
  //当行字符的长度，推荐80，也有人喜欢100或者120；
  printWidth: 100,
  //使用单引号还是双引号，选择true，使用单引号；
  singleQuote: true,
  //在多行输入的尾逗号是否添加，不需要添加设置为 `none`，需要添加设置为 all；
  trailingComma: 'all',
  //语句末尾是否要加分号，默认值true，选择false表示不加；
  semi: true,
  //表示.vue文件中，<script>和<style>标签中的代码缩进两个单元格
  vueIndentScriptAndStyle: true,
};
```

## 公共组件

- banner组件

```javascript
import BannerComponents from '@/components/banner';

const banner = [
  { url: '', src: '' }
]

<BannerComponents ref="BannerComponents" :banner="banner" />

```

- api

  | 参数   | 说明       | 类型  | 默认值 |
  | :----- | :--------- | :---- | :----- |
  | banner | 轮播图数据 | Array | []     |

## 请求配置

项目集成`axios-miniprogram`插件，文档地址：https://axios-miniprogram.com/guide/intro

### 请求示例

- 接口配置(api/index.js)

```js
import { get, post } from '@/server/index.js';

export const getList = () => {
	return get('/');
};

export const submit = () => {
	return get('/');
};
```

- get

```js
import { getList } from '@/api/index.js';

const { data } = await getList({ params: { keyword: '' }, headers: {} });
```

- post

```js
import { getList } from '@/api/index.js';

const { data } = await getList({ params: { keyword: '' }, data: {}, headers: {} });
```

## 插件

- "@commitlint/cli": "^17.6.7"
- "@commitlint/config-conventional": "^17.6.7"
- "axios-miniprogram": "^2.5.0"
- "husky": "^8.0.3"
- "prettier": "^3.0.1"
- "sass": "^1.64.2"
- "sass-loader": "^10.4.1"

## utils

- index.js

公共方法封装

- promisify.js

promisify是一个适配器文件，用于将原生API转换为Promise形式的API。案例：

```js
uni.login({
	success: function (res) {
		console.log(res.code);
	},
	fail: function (err) {
		console.log(err);
	},
});

import { promisify } from '@/utils/promisify';

// 使用promisify将原生API转换为Promise形式的API
const login = promisify(uni.login);

login()
	.then((res) => {
		console.log(res.code);
	})
	.catch((err) => {
		console.log(err);
	});
```

## 运行

1、HBuiderX运行，运行->运行到小程序模拟器->微信开发者工具

2、Vscode运行，安装插件`uniapp run`

- 配置扩展

```
HBuiderX路径
/Applications/HBuilderX.app
```

```
Wx Devtool路径
/Applications/wechatwebdevtools.app
```

- 编辑器运行和调试配置

```json
"configurations": [
    {
      "type": "uniapp-run",
      "request": "launch",
      "name": "Uniapp Run",
      "platform": "mp-weixin",
      "openDevTool": true
    }
  ]
```

- 点击运行 Uniapp Run
