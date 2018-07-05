import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import About from './components/About.vue'
import Home from './components/Home.vue'
import Update from './components/Update.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    }
  ]
});
