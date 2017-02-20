<template lang="pug">
  .btn.btn-lg.btn-warning(@click="CLEAR_NUMBER") C
</template>

<script>
import { mapActions } from 'vuex'
import { CLEAR_NUMBER } from '../vuex/mutation-types'

export default {
  name: 'clrBtn',
  methods: mapActions([CLEAR_NUMBER])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  width 72px
  height 72px
  font-size 32px

</style>
