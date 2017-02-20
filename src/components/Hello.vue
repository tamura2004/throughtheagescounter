<template lang="pug">
.container
  .row
    .col(v-for="(user, index) in users")
      button.btn.btn-block(:class="user.color")
        h4 {{ user.name }}
      hr

      PointPanel(
        v-for="(point,key) in user.values",
        :user="user",
        :valueKey="key"
      )

</template>

<script>
import { mapGetters } from 'vuex'
import router from '../router'
import PointPanel from './PointPanel'

export default {
  name: 'hello',
  computed: mapGetters(['users']),
  components: { PointPanel },
  methods: {
    move () {
      router.push('/calc')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.col
  border solid 0px black
</style>
