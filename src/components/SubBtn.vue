<template lang="pug">
  .btn.btn-lg.btn-warning(@click="SUB_VALUE") -
</template>

<script>
import { mapActions } from 'vuex'
import { SUB_VALUE } from '../vuex/mutation-types'

export default {
  name: 'subBtn',
  methods: mapActions([SUB_VALUE])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  width 72px
  height 72px
  font-size 32px

</style>
