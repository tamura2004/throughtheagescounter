<template lang="pug">
.container-fluid
  .row
    .col(v-for="(user, userKey) in users")
      UserPanel(
        :user="user",
        :userKey="userKey"
      )
      NextTurnPanel(
        :user="user",
        :userKey="userKey"
      )
      PointPanel(
        :user="user",
        :userKey="userKey",
        valueKey="vp"
      )
      
      MiniPanel(:user="user", :userKey="userKey", valueKey="sp")

      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="sd")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="hp")

      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="cp")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="cd")

      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="fp")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="rp")

      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="mi")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="co")


      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="t1")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="t2")

      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="p1")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="p2")

      .row
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="w1")
        .col-6: MiniPanel(:user="user", :userKey="userKey", valueKey="w2")

</template>

<script>
import { mapGetters } from 'vuex'
import PointPanel from './PointPanel'
import UserPanel from './UserPanel'
import NextTurnPanel from './NextTurnPanel'
import MiniPanel from './MiniPanel'

export default {
  name: 'hello',
  computed: mapGetters(['users']),
  components: { PointPanel, UserPanel, NextTurnPanel, MiniPanel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
