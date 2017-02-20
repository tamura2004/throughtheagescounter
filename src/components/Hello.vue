<template lang="pug">
.container
  .row
    .col(v-for="(user, userKey) in users")
      button.btn.btn-block(:class="'btn-'+user.color")
        h4 {{ user.name }}
      hr

      PointPanel(
        v-for="(value,valueKey) in user.values",
        :user="user",
        :userKey="userKey",
        :valueKey="valueKey"
      )

</template>

<script>
import { mapGetters } from 'vuex'
import PointPanel from './PointPanel'

export default {
  name: 'hello',
  computed: mapGetters(['users']),
  components: { PointPanel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
