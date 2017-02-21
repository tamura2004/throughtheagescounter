import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import router from '../router'

import {
  APPEND_NUMBER,
  ADD_VALUE,
  SUB_VALUE,
  SET_VALUE,
  CLEAR_NUMBER,
  EDIT_NUMBER,
  EDIT_USER,
  SET_USER_NAME,
  NEXT_TURN,
  INIT_ALL
} from './mutation-types'

import { USERS } from './users'
import { Say } from './Say'
import { Log } from './Log'

const state = {
  edit: {
    number: 0,
    userKey: 'blue',
    valueKey: 'sp'
  },
  users: Object.assign({}, USERS),
  valueNames: {
    sp: '科学ポイント',
    sd: '科学増加',
    cp: '文明ポイント',
    cd: '文明増加'
  },
  logs: []
}

const actions = {
  [APPEND_NUMBER] ({ commit }, keyword) {
    commit(APPEND_NUMBER, keyword)
  },

  [ADD_VALUE] ({ commit }) {
    commit(ADD_VALUE)
    router.push('/')
  },

  [SUB_VALUE] ({ commit }) {
    commit(SUB_VALUE)
    router.push('/')
  },

  [SET_VALUE] ({ commit }) {
    commit(SET_VALUE)
    router.push('/')
  },

  [CLEAR_NUMBER] ({ commit }, keyword) {
    commit(CLEAR_NUMBER, keyword)
  },

  [EDIT_NUMBER] ({ commit }, keyword) {
    commit(EDIT_NUMBER, keyword)
    router.push('/calc')
  },

  [EDIT_USER] ({ commit }, keyword) {
    commit(EDIT_USER, keyword)
    router.push('/selectuser')
  },

  [SET_USER_NAME] ({ commit }, keyword) {
    commit(SET_USER_NAME, keyword)
    router.push('/')
  },

  [NEXT_TURN] ({ commit }, keyword) {
    commit(NEXT_TURN, keyword)
  },

  [INIT_ALL] ({ commit }, keyword) {
    let res = confirm('すべて初期化してよろしいですか')
    if (res === true) {
      commit(INIT_ALL, keyword)
    }
  }
}

const getters = {
  edit: state => state.edit,
  users: state => state.users,
  valueNames: state => state.valueNames,
  user: state => state.users[state.edit.userKey],
  userKey: state => state.edit.userKey,
  valueKey: state => state.edit.valueKey,
  logs: state => state.logs
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

  [ADD_VALUE] (state) {
    let { number, userKey, valueKey } = state.edit
    state.users[userKey].values[valueKey] += number
    Log(state, ADD_VALUE)
  },

  [SUB_VALUE] (state) {
    let { number, userKey, valueKey } = state.edit
    state.users[userKey].values[valueKey] -= number
    Log(state, SUB_VALUE)
  },

  [SET_VALUE] (state) {
    let { number, userKey, valueKey } = state.edit
    state.users[userKey].values[valueKey] = number
    Log(state, SET_VALUE)
  },

  [CLEAR_NUMBER] (state, keyword) {
    state.edit.number = 0
  },

  [EDIT_NUMBER] (state, keyword) {
    state.edit.number = 0
    state.edit.userKey = keyword.userKey
    state.edit.valueKey = keyword.valueKey
  },

  [EDIT_USER] (state, userKey) {
    state.edit.userKey = userKey
  },

  [SET_USER_NAME] (state, userName) {
    state.users[state.edit.userKey].name = userName
  },

  [NEXT_TURN] (state, userKey) {
    state.edit.userKey = userKey
    let user = state.users[userKey]
    let values = user.values
    user.turn += 1
    values.sp += values.sd
    values.cp += values.cd
    Log(state, NEXT_TURN)
  },

  [INIT_ALL] (state, keyword) {
    for (let ukey of ['blue', 'green', 'yellow', 'red']) {
      for (let vkey of ['sp', 'sd', 'cp', 'cd']) {
        state.users[ukey].values[vkey] = vkey === 'sd' ? 1 : 0
      }
    }
    Say('科学ポイントと文化ポイントを、全部初期化します。')
    Log(state, INIT_ALL)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
