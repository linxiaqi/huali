import Vue from 'vue'
import Router from 'vue-router'
import HLhome from '@/components/HLhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HLhome
    }
  ]
})
