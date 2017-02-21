<template lang="pug">

  button.btn.btn-block(
    type="button",
    @click="SET_USER_NAME(name)"
  )
    | {{ name }}

</template>

<script>
import { mapActions } from 'vuex'
import { SET_USER_NAME } from '../vuex/mutation-types'

export default {
  name: 'usrBtn',
  methods: mapActions([SET_USER_NAME]),
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
button
  padding 18px 10px
  font-size 32px
</style>
