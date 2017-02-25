<template lang="pug">
#app
  link(
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    rel="stylesheet",
    integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ",
    crossorigin="anonymous"
  )
  nav.navbar.navbar-toggleable-md.navbar-inverse.bg-inverse
    .navbar-brand ThroughTheAges得点カウンター
    .navbar-nav
      .nav-item.nav-link(@click="INIT_ALL") リセット
      router-link.nav-item.nav-link(to="/", :class="{active: isRoutePath}") 得点表
      router-link.nav-item.nav-link(to="/logs") 記録を見る
      .nav-item.nav-link(@click="SAVE") セーブ
      .nav-item.nav-link(@click="LOAD", :class="{active: isLoadPath}") ロード

  router-view
</template>

<script>
import { mapActions } from 'vuex'
import { INIT_ALL, SAVE, LOAD } from './vuex/mutation-types'

export default {
  name: 'app',
  methods: mapActions([INIT_ALL, SAVE, LOAD]),
  computed: {
    isRoutePath () { this.$route.path === '/' },
    isLogsPath () { this.$route.path === '/logs' },
    isLoadPath () { this.$route.path === '/load' }
  }
}
</script>

<style lang="stylus">
#app
  font-family "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

nav
  margin-bottom 32px
  // background-color lightgray

</style>
