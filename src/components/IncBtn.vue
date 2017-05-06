<template lang="pug">
  .btn.btn-lg.btn-warning(@click="INC_VALUE") +1
</template>

<script>
import { mapActions } from 'vuex'
import { INC_VALUE } from '../vuex/mutation-types'

export default {
  name: 'SetBtn',
  methods: mapActions([INC_VALUE])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  width 72px
  height 72px
  font-size 32px

</style>
