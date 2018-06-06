import Vue from 'vue'
import Router from 'vue-router'
import HOME from '@/view/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    }
  ]
})
