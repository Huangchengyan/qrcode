import Vue from 'vue'
import Router from 'vue-router'
import company from '../components/company/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'company',
      component: company
    }
  ]
})
