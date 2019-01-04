import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Index from '@/views/layout/Index'
import Userlist from '@/views/account/Userlist'
import Useradd from '@/views/account/Useradd'
import Passedit from '@/views/account/Passedit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/userlist',
          name: 'Userlist',
          component: Userlist
        },
        {
          path: '/useradd',
          name: 'Useradd',
          component: Useradd
        },
        {
          path: '/passedit',
          name: 'Passedit',
          component: Passedit
        }
      ],
      redirect: '/userlist'
    }
  ],
  mode: 'history'
})
