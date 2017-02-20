<template lang="pug">
  .btn.btn-lg.btn-secondary(@click="APPEND_NUMBER(num)") {{ num }}
</template>

<script>
import { mapActions } from 'vuex'
import { APPEND_NUMBER } from '../vuex/mutation-types'

export default {
  name: 'numBtn',
  methods: mapActions([APPEND_NUMBER]),
  props: ['num']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  width 72px
  height 72px
  font-size 32px
</style>
