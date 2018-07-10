import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import about from './views/About.vue'
import services from './views/Services.vue'
import contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
