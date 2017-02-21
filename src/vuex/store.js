import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
Vue.use(Vuex)

import {
  APPEND_NUMBER,
  ADD_VALUE,
  CLEAR_NUMBER,
  EDIT_NUMBER,
  INIT_ALL
} from './mutation-types'

import { USERS } from './users'
import { Say } from './Say'

const state = {
  edit: {
    number: 0,
    userKey: 'blue',
    valueKey: 'sp'
  },
  users: Object.assign({}, USERS),
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
  },

  [INIT_ALL] ({ commit }, keyword) {
    commit(INIT_ALL, keyword)
  }
}

const getters = {
  edit: state => Object.assign({
    userName: state.users[state.edit.userKey].name,
    valueName: state.valueNames[state.edit.valueKey],
    value: state.users[state.edit.userKey].values[state.edit.valueKey]
  }, state.edit),
  users: state => state.users,
  valueNames: state => state.valueNames,
  user: state => state.users[state.edit.userKey],
  userKey: state => state.edit.userKey,
  valueKey: state => state.edit.valueKey
}

const mutations = {
  [APPEND_NUMBER] (state, keyword) {
    if (state.edit.number < 10000000) {
      state.edit.number *= 10
      state.edit.number += Number(keyword)
    } else {
      Say('数字はハチ桁が上限です')
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
  },

  [INIT_ALL] (state, keyword) {
    for (let ukey of ['blue', 'green', 'yellow', 'red']) {
      for (let vkey of ['sp', 'sd', 'cp', 'cd']) {
        state.users[ukey].values[vkey] = vkey === 'sd' ? 1 : 0
      }
    }
    Say('科学ポイントと文化ポイントを、全部初期化します。')
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
