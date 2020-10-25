<template>
  <div>{{ item.title }}</div>
  <!-- <div>{{ fooCount }}</div> -->
</template>

<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.items[this.$route.params.id]
    },
  },
}

// Vue.mixin({
//   beforeMount () {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       // 将获取数据操作分配给 promise
//       // 以便在组件中，我们可以在数据准备就绪后
//       // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
//       this.dataPromise = asyncData({
//         store: this.$store,
//         route: this.$route
//       })
//     }
//   }
// })
// Vue.mixin({
//   beforeRouteUpdate (to, from, next) {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         route: to
//       }).then(next).catch(next)
//     } else {
//       next()
//     }
//   }
// })

// // 在这里导入模块，而不是在 `store/index.js` 中
// import fooStoreModule from '../store/modules/foo'

// export default {
//   asyncData ({ store }) {
//     store.registerModule('foo', fooStoreModule)
//     return store.dispatch('foo/inc')
//   },

//   // 重要信息：当多次访问路由时，
//   // 避免在客户端重复注册模块。
//   destroyed () {
//     this.$store.unregisterModule('foo')
//   },

//   computed: {
//     fooCount () {
//       return this.$store.state.foo.count
//     }
//   }
// }
</script>

<style scoped>
</style>
