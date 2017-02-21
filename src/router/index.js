import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Calc from 'components/Calc'
import SelectUser from 'components/SelectUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/selectuser',
      name: 'SelectUser',
      component: SelectUser
    },
    {
      path: '/calc',
      name: 'Calc',
      component: Calc
    }
  ]
})
