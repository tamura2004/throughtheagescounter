<template lang="pug">
.container
  .row
    .col(v-for="(user, userKey) in users")
      UserPanel(
        :user="user",
        :userKey="userKey"
      )
      NextTurnPanel(:userKey="userKey")
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
import UserPanel from './UserPanel'
import NextTurnPanel from './NextTurnPanel'

export default {
  name: 'hello',
  computed: mapGetters(['users']),
  components: { PointPanel, UserPanel, NextTurnPanel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
