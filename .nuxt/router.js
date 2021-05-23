import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1362870f = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _64aa8b0b = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _20bfbd3a = () => interopDefault(import('..\\pages\\index backup.vue' /* webpackChunkName: "pages/index backup" */))
const _708ba6d9 = () => interopDefault(import('..\\pages\\common\\homecarusal.vue' /* webpackChunkName: "pages/common/homecarusal" */))
const _7a7fe957 = () => interopDefault(import('..\\pages\\common\\sidebar.vue' /* webpackChunkName: "pages/common/sidebar" */))
const _715ed590 = () => interopDefault(import('..\\pages\\blogs\\_post.vue' /* webpackChunkName: "pages/blogs/_post" */))
const _09250fb6 = () => interopDefault(import('..\\pages\\category\\_category.vue' /* webpackChunkName: "pages/category/_category" */))
const _e3e399e6 = () => interopDefault(import('..\\pages\\user\\_id\\index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _589bbcd8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _26a8fea3 = () => interopDefault(import('..\\pages\\_year\\_month.vue' /* webpackChunkName: "pages/_year/_month" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1362870f,
    name: "about"
  }, {
    path: "/blogs",
    component: _64aa8b0b,
    name: "blogs"
  }, {
    path: "/index%20backup",
    component: _20bfbd3a,
    name: "index backup"
  }, {
    path: "/common/homecarusal",
    component: _708ba6d9,
    name: "common-homecarusal"
  }, {
    path: "/common/sidebar",
    component: _7a7fe957,
    name: "common-sidebar"
  }, {
    path: "/blogs/:post",
    component: _715ed590,
    name: "blogs-post"
  }, {
    path: "/category/:category?",
    component: _09250fb6,
    name: "category-category"
  }, {
    path: "/user/:id",
    component: _e3e399e6,
    name: "user-id"
  }, {
    path: "/",
    component: _589bbcd8,
    name: "index"
  }, {
    path: "/:year/:month?",
    component: _26a8fea3,
    name: "year-month"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
