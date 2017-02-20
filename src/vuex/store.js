import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
Vue.use(Vuex)

import {
  APPEND_NUMBER,
  ADD_VALUE,
  CLEAR_NUMBER
} from './mutation-types'

const state = {
  calc: {
    number: 0,
    user_id: 0,
    value_type: 'sp'
  },
  users: [
    {name: '高山', values: {sp: 0, sd: 1, cp: 0, cd: 0}, color: 'btn-primary'},
    {name: '江原', values: {sp: 0, sd: 1, cp: 0, cd: 0}, color: 'btn-success'},
    {name: '津下', values: {sp: 0, sd: 1, cp: 0, cd: 0}, color: 'btn-warning'},
    {name: '田村', values: {sp: 0, sd: 1, cp: 0, cd: 0}, color: 'btn-danger'}
  ],
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
    router.push('/')
  },

  [CLEAR_NUMBER] ({ commit }, keyword) {
    commit(CLEAR_NUMBER, keyword)
  }
}

const getters = {
  number: state => state.calc.number,
  calc: state => state.calc,
  user: state => state.users[state.calc.user_id],
  users: state => state.users,
  value: state => state.users[state.calc.user_id][state.calc.value_type],
  valueNames: state => state.valueNames
}

const mutations = {
  [APPEND_NUMBER] (state, keyword) {
    if (state.calc.number < 10000000) {
      state.calc.number *= 10
      state.calc.number += Number(keyword)
    } else {
      alert('数字は8桁が上限です')
    }
  },

  [ADD_VALUE] (state, keyword) {
    console.log(state)
    // state.users[state.calc.user_id].values[state.calc.value_id] = state.calc.number
    state.users[state.calc.user_id][state.calc.value_type] += state.calc.number
  },

  [CLEAR_NUMBER] (state, keyword) {
    state.calc.number = 0
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
