import Vue from 'vue'
import Router from 'vue-router'

//后台管理页面
const backMain = r => require.ensure([], () => r(require('@/view/backMain')), 'chunkname1');
const backHome = r => require.ensure([], () => r(require('@/view/back/home')), 'chunkname1');  //后台首页
const addArticle = r => require.ensure([], () => r(require('@/view/back/addArticle')), 'chunkname1'); //后台添加文章
const backAarticleList = r => require.ensure([], () => r(require('@/view/back/articleList')), 'chunkname1'); //后台文章列表
const commentList = r => require.ensure([], () => r(require('@/view/back/commentsList')), 'chunkname1'); //评论列表



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: backMain,
      children:[
        {
          path: '/',
         redirect: "/backHome"
        },
        {
          path: '/backHome',
          name: "后台首页",
          component: backHome
        },
        {
          path: '/addArticle',
          name: "添加文章",
          component: addArticle
        },
        {
          path: '/backArticleList',
          name: "文章列表",
          component: backAarticleList
        },
        {
          path: '/commentList',
          name: "评论列表",
          component: commentList
        }
      ]
    }
  ]
})
