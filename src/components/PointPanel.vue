<template lang="pug">
  button.btn.btn-block(
    :class="user.color",
    @click="EDIT_NUMBER({userKey: userKey, valueKey: valueKey})"
  )
    p {{ valueNames[valueKey] }}
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
</style>
