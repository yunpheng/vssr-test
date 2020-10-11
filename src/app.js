import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

export function createApp() {
  // 创建 router 和 store 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态(router, state)到 store
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  })

  // 暴露 app, router 和 store
  return {
    app,
    router,
    store,
  }
}

// const createRouter = require('./router');
// const Vue = require('vue');

// module.exports = (context) => {
// 	const router = createRouter();
// 	const app = new Vue({
// 		router,
// 		data: {
// 			message: 'Hello Vue SSR',
// 			propsData: context.propsData,
// 			asyncData: context.asyncData,
// 		},
// 		template: `
//       <div>
//         <h1>{{message}}</h1>
//         <p>{{asyncData}}</p>
//         <p>{{propsData}}</p>
//         <ul>
//           <li>
//             <router-link to="/">home</router-link>
//           </li>
//           <li>
//             <router-link to="/about">about</router-link>
//           </li>
//         </ul>
//         <router-view></router-view>
//       </div>
//     `,
// 	});
// 	return {
// 		app,
// 		router,
// 	};
// };
