import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
Vue.use(Vuex)

import {
  APPEND_NUMBER,
  ADD_VALUE,
  CLEAR_NUMBER,
  EDIT_NUMBER
} from './mutation-types'

import { USERS } from './users'

const state = {
  edit: {
    number: 0,
    userKey: 'blue',
    valueKey: 'sp'
  },
  users: USERS,
  valueNames: {
    sp: '科学P',
    sd: '+科学',
    cp: '文明P',
    cd: '+文明'
  }
}

const actions = {
  [APPEND_NUMBER] ({ commit }, keyword) {
    commit(APPEND_NUMBER, keyword)
  },

  [ADD_VALUE] ({ commit }, keyword) {
    commit(ADD_VALUE, keyword)
  },

  [CLEAR_NUMBER] ({ commit }, keyword) {
    commit(CLEAR_NUMBER, keyword)
  },

  [EDIT_NUMBER] ({ commit }, keyword) {
    commit(EDIT_NUMBER, keyword)
  }
}

const getters = {
  edit: state => state.edit,
  users: state => state.users,
  valueNames: state => state.valueNames
}

const mutations = {
  [APPEND_NUMBER] (state, keyword) {
    if (state.edit.number < 10000000) {
      state.edit.number *= 10
      state.edit.number += Number(keyword)
    } else {
      alert('数字は8桁が上限です')
    }
  },

  [ADD_VALUE] (state, keyword) {
    let { number, userKey, valueKey } = state.edit
    state.users[userKey].values[valueKey] += number
    router.push('/')
  },

  [CLEAR_NUMBER] (state, keyword) {
    state.edit.number = 0
  },

  [EDIT_NUMBER] (state, keyword) {
    state.edit.number = 0
    state.edit.userKey = keyword.userKey
    state.edit.valueKey = keyword.valueKey
    router.push('/calc')
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
