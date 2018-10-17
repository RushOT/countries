import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Random from './views/Random.vue'
import Info from './views/Info.vue'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: About
      },
      {
          path: '/random',
          name: 'random',
          component: Random
      },
      {
          path: '/countries/:id/info',
          name: 'info',
          component: Info,
          props: true
      }

  ],

    linkExactActiveClass: 'active'
})
