import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Services from '@/page/Services'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      props: true
    }
  ]
})
