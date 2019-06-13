/* 路由器模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import Article from '../views/Article';
Vue.use(VueRouter)

export default new VueRouter({
  hashbang: true,
  history: false, //这个参数改为false就可以了
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes: [{
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      //嵌套路由写在下面
      children: [{
          path: '/home/news',
          component: News
        },
        {
          path: 'message', //简化写法
          component: Message
        }
      ]

    },
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/article',
      component: Article
    }
    /* ,
    { //当为请求 /时  即默认显示 重定向 About
      path: '/',
      redirect: '/home'
    } */
  ]
})