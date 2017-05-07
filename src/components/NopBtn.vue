<template lang="pug">
  .btn.btn-lg.btn-warning(@click="NOP") 戻
</template>

<script>
import { mapActions } from 'vuex'
import { NOP } from '../vuex/mutation-types'

export default {
  name: 'NopBtn',
  methods: mapActions([NOP])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  width 72px
  height 72px
  font-size 32px

</style>
