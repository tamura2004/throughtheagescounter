<template lang="pug">
#app
  link(
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    rel="stylesheet",
    integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ",
    crossorigin="anonymous"
  )
  nav.navbar
    a.navbar-brand(@click="INIT_ALL") ThroughTheAges得点カウンター
  router-view
</template>

<script>
import { mapActions } from 'vuex'
import { INIT_ALL } from './vuex/mutation-types'

export default {
  name: 'app',
  methods: mapActions([INIT_ALL])

}
</script>

<style lang="stylus">
#app
  font-family "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

nav
  margin-bottom 32px
  background-color lightgray

</style>
