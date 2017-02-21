<template lang="pug">
.container
  h4 プレイヤーを選択してください
  hr
  .row
    .col
      UsrBtn(name="井上")
      UsrBtn(name="江原")
      UsrBtn(name="白石")
    .col
      UsrBtn(name="鈴木")
      UsrBtn(name="高山")
      UsrBtn(name="田村")
    .col
      UsrBtn(name="津下")
      UsrBtn(name="スペシャルゲスト")
      UsrBtn(name="なし")

</template>

<script>
import { mapGetters } from 'vuex'
import UsrBtn from './UsrBtn'

export default {
  name: 'selectUser',
  computed: mapGetters(['userKey']),
  components: { UsrBtn }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
