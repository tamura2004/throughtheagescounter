import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Calc from 'components/Calc'
import Logs from 'components/Logs'
import Load from 'components/Load'
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
    },
    {
      path: '/load',
      name: 'Load',
      component: Load
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    }
  ]
})
