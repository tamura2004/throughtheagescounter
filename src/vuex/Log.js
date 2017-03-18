export function Log (state, action, oldValue = 0) {
  let user = state.score.users[state.edit.userKey]
  let userName = user.name
  let valueName = state.valueNames[state.edit.valueKey]

  const actionNames = {
    ADD_VALUE: '増加させました。',
    SUB_VALUE: '減少させました。',
    SET_VALUE: 'に設定しました。',
    INIT_ALL: 'すべて初期化しました。',
    NEXT_TURN: 'ターン更新処理を行いました。'
  }

  let actionName = actionNames[action]

  switch (action) {
    case 'NEXT_TURN':
      let spName = state.valueNames['sp']
      let sd = user.values['sd']
      let cpName = state.valueNames['cp']
      let cd = user.values['cd']

      state.logs.unshift(`${userName}の${user.turn - 1}ターンを終了します。`)
      state.logs.unshift(`${userName}の${spName}を${sd}ポイント増加させました。`)
      state.logs.unshift(`${userName}の${cpName}を${cd}ポイント増加させました。`)
      state.logs.unshift(`${userName}の${user.turn}ターンを開始します。`)

      break

    case 'INIT_ALL':
      state.logs.unshift('得点表をすべて初期化しました。')
      break

    default:
      state.logs.unshift(`${userName}の${valueName}を${oldValue}から${state.edit.number}ポイント${actionName}`)
  }
}
