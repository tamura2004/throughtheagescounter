<template lang="pug">
  button.btn.btn-block.btn-secondary(
    @click="NEXT_TURN(userKey)"
  )
    h4 {{ user.turn }} ターン

</template>

<script>
import { mapActions } from 'vuex'
import { NEXT_TURN } from '../vuex/mutation-types'

export default {
  name: 'nextTurnPanel',
  methods: mapActions([NEXT_TURN]),
  props: ['user', 'userKey']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
