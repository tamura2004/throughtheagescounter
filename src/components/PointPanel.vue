<template lang="pug">
  button.btn.btn-block(:class="user.color")
    p {{ valueNames[valueKey] }}
    h2 {{ user.values[valueKey] }}

</template>

<script>
import { mapGetters } from 'vuex'
// import router from '../router'

export default {
  name: 'pointPanel',
  computed: mapGetters(['users', 'valueNames']),
  props: ['user', 'valueKey']
  // methods: {
  //   move () {
  //     router.push('/calc')
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
