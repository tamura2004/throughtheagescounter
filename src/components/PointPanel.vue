<template lang="pug">
  button.btn.btn-block(
    :class="user.color",
    @click="EDIT_NUMBER({userKey: userKey, valueKey: valueKey})"
  )
    .row
      .col-2
        p {{ valueNames[valueKey] }}
      .col-10
        h2 {{ user.values[valueKey] }}

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EDIT_NUMBER } from '../vuex/mutation-types'

export default {
  name: 'pointPanel',
  computed: mapGetters(['users', 'valueNames']),
  methods: mapActions([EDIT_NUMBER]),
  props: ['user', 'userKey', 'valueKey']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

h2
  color color
  font-weight bold
  font-family Poppins
  letter-spacing -3px
  font-size 6rem
  text-shadow 2px 0 0 #000, 0 2px 0 #000, -2px 0 0 #000, 0 -2px 0 #000, 5px 4px 3px rgba(0,0,0,0.5)
</style>
