import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Main from '../views/Main'
import Manage from '../views/Manage'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/main',
    children: [
      { path: '/main', component: Main }
    ]
  },
  { path: '/manage', component: Manage }

]

const router = new VueRouter({
  routes
})

export default router
