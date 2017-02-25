<template lang="pug">
.container
  h4 セーブデータ一覧
  table.table
    thead.bg-inverse.text-white
      tr
        td(colspan="4") ユーザー名/ターン数/科学/科学増加/文化/文化増加
        td 保存日時
        td 操作
        td
    tbody
      tr(v-for="score in scores")
        td(v-for="user in score.users") {{ user | userToString }}
        td {{ score.updated_at | ISOStringToDate }}
        td
          button.btn.btn-sm.btn-primary(@click="USE_SCORE(score._id)") ロード
        td
          button.btn.btn-sm.btn-danger(@click="DELETE(score._id)") 削除

</template>

<script>
// import axios from 'axios'
// import ajax from '../vuex/ajax'
import { USE_SCORE, DELETE } from '../vuex/mutation-types'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'load',
  computed: mapGetters(['scores']),
  methods: mapActions([USE_SCORE, DELETE])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
table td
  padding-top 4px
  padding-bottom 4px

td
  text-valigh center
  
</style>
