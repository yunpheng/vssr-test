import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    // component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}

// const vueRouter = require('vue-router');
// const Vue = require('vue');

// Vue.use(vueRouter);

// const routes = [
// 	{
// 		path: '/',
// 		component: {
// 			template: `<h1>this is home page</h1>`,
// 		},
// 		name: 'home',
// 	},
// 	{
// 		path: '/about',
// 		component: {
// 			template: `<h1>this is about page</h1>`,
// 		},
// 		name: 'about',
// 	},
// ];

// module.exports = () => {
// 	return new vueRouter({
// 		mode: 'history',
// 		routes,
// 	});
// };
