<template lang="pug">
  div(:class="active")
    button.btn.btn-block(
      :class="user.color"
      @click="EDIT_NUMBER({userKey: userKey, valueKey: valueKey})"
    )
      .row
        .col-4
          p(v-html="valueNames[valueKey]")
        .col-8
          h2 {{ user.values[valueKey] }}

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EDIT_NUMBER } from '../vuex/mutation-types'

export default {
  name: 'miniPanel',
  computed: {
    ...mapGetters(['users', 'valueNames', 'edit']),
    active () {
      if (this.userKey === this.edit.userKey && this.valueKey === this.edit.valueKey) {
        return { animated: true, bounce: true } //, infinite: true }
      } else {
        return {}
      }
    }
  },
  methods: mapActions([EDIT_NUMBER]),
  props: ['user', 'userKey', 'valueKey']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
button
  margin-top 8px

p
  font-size 1rem
  margin-bottom 2px

h2
  color white
  font-weight bold
  font-family Poppins
  font-size 2rem

</style>
