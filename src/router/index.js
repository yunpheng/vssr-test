import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/item/:id',
    name: 'Item',
    // route level code-splitting
    // this generates a separate chunk (test.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: Item
    component: () => import(/* webpackChunkName: "test" */ '@/views/Item.vue'),
  },
]

export function createRouter() {
  return new Router({
    mode: 'history',
    routes,
  })
}
