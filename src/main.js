// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.filter('toTableColor', function (value) {
  if (value === 'btn-primary') {
    return 'table-info'
  } else {
    return 'table-' + value.substr(4)
  }
})

Vue.filter('userToString', function (user) {
  const name = user.name + '/' +
  user.turn + '/' +
  user.values.sp + '/' +
  user.values.sd + '/' +
  user.values.cp + '/' +
  user.values.cd
  return name
})

Vue.filter('ISOStringToDate', function (date) {
  const month = date.substr(5, 2)
  const day = date.substr(8, 2)
  const hour = date.substr(11, 2)
  const minute = date.substr(14, 2)
  return `${month}/${day} ${hour}:${minute}`
})

Vue.filter('json', function (obj) {
  return JSON.stringify(obj)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
