import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async function (to, _, next) {
    store.dispatch('auth/verifyLogin')
    if (to.meta.requiresAuth && !store.getters['auth/isLoggedIn']) {
      next('/login')
    } else if (to.path !== '/' && !to.meta.requiresAuth && store.getters['auth/isLoggedIn']) {
      next('/')
    } else {
      if (store.getters['auth/isLoggedIn']) {
        await store.dispatch('auth/refreshToken')
      }
      next()
    }
  })

  return Router
}
