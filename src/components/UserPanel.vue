<template lang="pug">
  button.btn.btn-block(
    :class="user.color",
    @click="EDIT_USER(userKey)"
  )
    h4 {{ user.name }}

</template>

<script>
import { mapActions } from 'vuex'
import { EDIT_USER } from '../vuex/mutation-types'

export default {
  name: 'pointPanel',
  methods: mapActions([EDIT_USER]),
  props: ['user', 'userKey']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
