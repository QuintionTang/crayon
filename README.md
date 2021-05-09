# Crayon Admin Ui

蜡笔 UI，基于 `VUE3`、`Vite`、`ant-design-vue2` 的管理后台，主要用于学习实践。

蜡笔（Crayon）管理模板，是一个学习性质的管理模板，借此机会学习一些最新的前端框架，也希望有一些志同道合的小伙伴加入，从中学习提高自己的技能。为什么叫蜡笔，蜡笔可以为画填上色彩，寓意点缀美好生活和职业生涯。

蜡笔（Crayon）管理模板基于 Vue3+、Vuex4+、Ant Design2，并准备好使用 REST API 作为数据通讯标准，以 Vite 作为构建工具。

## 开始

1.

```
npm install
```

2.

```
npm run dev
```

## 涉及资源

#### 字体库

-   `feather`：https://feathericons.com/?query=em

-   `fontawesome`：https://fontawesome.com/

-   `ionicons`：https://ionicons.com/

-   `linearicons`：https://linearicons.com/free

#### chart.js

https://www.chartjs.org/docs/2.9.4/

## 学习笔记

-   [vue2 的$refs 在 vue3 组合式 API 中的替代方法](https://www.devpoint.cn/article/268.shtml)

-   [读 scss/sass 实例项目带你入门](https://www.devpoint.cn/article/267.shtml)

-   [使用 Composition API 在 Vue3 中创建防抖的搜索输入框](https://www.devpoint.cn/article/265.shtml)

-   [Velocity.js：一个简单易用、高性能、功能丰富的轻量级 JS 动画库](https://www.devpoint.cn/article/263.shtml)

## 更新日志

#### `2021-05-08`

    - 路由增加登录状态鉴权，对于必须登录的路由验证登录状态
    - 增加纯前端的MOCK服务，便于后期功能开发，更加贴近实际项目
    - 登录增加本地存储，保证登录状态的持久
