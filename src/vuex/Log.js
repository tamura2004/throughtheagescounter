export function Log (state, action) {
  let user = state.users[state.edit.userKey]
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

      state.logs.push(`${userName}の${user.turn - 1}ターンを終了します。`)
      state.logs.push(`${userName}の${spName}を${sd}ポイント増加させました。`)
      state.logs.push(`${userName}の${cpName}を${cd}ポイント増加させました。`)
      state.logs.push(`${userName}の${user.turn}ターンを開始します。`)

      break

    case 'INIT_ALL':
      state.logs.push('得点表をすべて初期化しました。')
      break

    default:
      state.logs.push(`${userName}の${valueName}を${state.edit.number}ポイント${actionName}`)
  }
}
