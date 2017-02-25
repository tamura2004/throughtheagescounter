import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import router from '../router'
import http from './axios'

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
  SAVE,
  LOAD,
  USE_SCORE,
  DELETE,
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
  score: {
    _id: null,
    users: USERS,
    updated_at: ''
  },
  scores: [],
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

  [CLEAR_NUMBER] ({ commit }) {
    commit(CLEAR_NUMBER)
  },

  [EDIT_NUMBER] ({ commit }, edit) {
    commit(EDIT_NUMBER, edit)
    router.push('/calc')
  },

  [EDIT_USER] ({ commit }, keyword) {
    commit(EDIT_USER, keyword)
    router.push('/selectuser')
  },

  [SET_USER_NAME] ({ commit }, name) {
    commit(SET_USER_NAME, name)
    router.push('/')
  },

  [NEXT_TURN] ({ commit, dispatch }, userKey) {
    commit(NEXT_TURN, userKey)
    dispatch(SAVE)
  },

  [SAVE] ({ commit, state }) {
    const id = state.score._id
    const method = id ? 'put' : 'post'
    const url = id ? `/${id.$oid}` : '/'
    state.score.updated_at = new Date()

    http({
      url: url,
      method: method,
      data: JSON.stringify(state.score)
    })
    .then(r => commit(SAVE, r.data))
    .catch(e => alert(e))
  },

  [LOAD] ({ commit }) {
    http({
      method: 'get',
      url: '/'
    })
    .then(r => commit(LOAD, r.data))
    .catch(e => alert(e))
    router.push('/load')
  },

  [USE_SCORE] ({ commit }, id) {
    commit(USE_SCORE, id)
    router.push('/')
  },

  [DELETE] ({ commit }, id) {
    http({
      method: 'delete',
      url: `/${id.$oid}`
    })
    .then(r => commit(DELETE, id))
    .catch(e => alert(e))
  },

  [INIT_ALL] ({ commit }) {
    let res = confirm('すべて初期化してよろしいですか')
    if (res === true) {
      commit(INIT_ALL)
    }
    router.push('/')
  }
}

const getters = {
  scores: state => state.scores,
  edit: state => state.edit,
  users: state => state.score.users,
  valueNames: state => state.valueNames,
  user: state => state.score.users[state.edit.userKey],
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
    state.score.users[userKey].values[valueKey] += number
    Log(state, ADD_VALUE)
  },

  [SUB_VALUE] (state) {
    let { number, userKey, valueKey } = state.edit
    state.score.users[userKey].values[valueKey] -= number
    Log(state, SUB_VALUE)
  },

  [SET_VALUE] (state) {
    let { number, userKey, valueKey } = state.edit
    state.score.users[userKey].values[valueKey] = number
    Log(state, SET_VALUE)
  },

  [CLEAR_NUMBER] (state) {
    state.edit.number = 0
  },

  [EDIT_NUMBER] (state, edit) {
    state.edit.number = 0
    state.edit.userKey = edit.userKey
    state.edit.valueKey = edit.valueKey
  },

  [EDIT_USER] (state, userKey) {
    state.edit.userKey = userKey
  },

  [SET_USER_NAME] (state, userName) {
    state.score.users[state.edit.userKey].name = userName
  },

  [NEXT_TURN] (state, userKey) {
    state.edit.userKey = userKey
    let user = state.score.users[userKey]
    let values = user.values
    user.turn += 1
    values.sp += values.sd
    values.cp += values.cd
    Log(state, NEXT_TURN)
  },

  [SAVE] (state, data) {
    state.score._id = data._id
  },

  [LOAD] (state, data) {
    state.scores = data
  },

  [USE_SCORE] (state, id) {
    for (const score of state.scores) {
      if (score._id === id) {
        state.score = score
      }
    }
  },

  [DELETE] (state, id) {
    let scores = []
    for (const score of state.scores) {
      if (score._id !== id) {
        scores.push(score)
      }
    }
    state.scores = scores
  },

  [INIT_ALL] (state) {
    for (let user of Object.values(state.score.users)) {
      user.turn = 1
      user.name = 'なし'
      for (let key of Object.keys(user.values)) {
        user.values[key] = key === 'sd' ? 1 : 0
      }
    }
    state.score._id = null
    state.score.updated_at = null
    Say('得点表を、初期化します。')
    Log(state, INIT_ALL)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
