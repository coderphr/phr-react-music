# React实战之云音乐项目

> 如果觉得不错，或者对你有帮助，点一个star~ coderphr

### 1.1. 项目简介

使用React编写的云音乐PC Web项目，接口来源于开源的接口，自己已经做了部署。

项目已经完成功能如下：（你可以下载下来自己体验一下）;
或者直接访问 http://8.129.22.213:3001;

推荐页面：

* 轮播图
* 热门推荐
* 新碟上架
* 榜单
* 等等

![推荐页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9kwh3cqj31ck0p37uj.jpg)

![推荐页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghva5bx7bvj31d10p6thq.jpg)

歌曲播放：

* 目前做了榜单中歌曲的点击播放；
* 事实上其他页面只要将歌曲的id传入到redux中就可以，整个逻辑已经打通；
* 做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
* 做了播放循序切换：顺序播放、随机播放、单曲循环；a

![歌曲播放](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9pc3ki6j30ws0ahti8.jpg)

排行榜页面：

* 各种榜单的切换；

![排行榜页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9qjg0m4j31d10p4ai3.jpg)

歌单页面：

* 选择分类、选择分类后根据分类切换歌单；
* 根据分类，歌单列表的展示；
* 分页功能；

![歌单页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9rsp1stj31d10p44j2.jpg)

主播电台：

* 电台分类的展示、滚动；
* 不同分类展示不同的数据；
* 电台排行榜展示、分页；

![主播电台](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9sxt3nqj31d10p4k4s.jpg)

歌手页面：

* 各种歌手分类（没找到接口，还自定义了一些数据）
* 歌手字母分类、对应歌手展示；

![歌手页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9ts3h5dj31d10p4qfo.jpg)

新碟上架页面：

* 热门新碟；
* 全部新碟、分页展示；

![新碟上架页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9uryexgj31d10p4aue.jpg)

### 1.2. 项目运行

clone项目：

```
git clone https://github.com/coderphr/phr-react-music
```

安装项目依赖：

```shell
yarn install
```

项目运行：

```shell
yarn start
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




