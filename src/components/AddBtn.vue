<template lang="pug">
  .btn.btn-lg.btn-warning(@click="ADD_VALUE") +
</template>

<script>
import { mapActions } from 'vuex'
import { ADD_VALUE } from '../vuex/mutation-types'

export default {
  name: 'clrBtn',
  methods: mapActions([ADD_VALUE])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  width 72px
  height 72px
  font-size 32px

</style>
