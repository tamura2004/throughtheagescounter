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
      router-link.nav-item.nav-link(to="/") 得点表
      router-link.nav-item.nav-link(to="/logs") 記録を見る
      .nav-item.nav-link(@click="save") セーブ

  router-view
</template>

<!-- axios.get('https://api.mlab.com/api/1/databases/tools/collections/feats',{params: {apiKey: '504eb50ae4b02f705f156c2e'}}).then(r => console.log(r.data)).catch(e => console.log(e)) -->

<script>
import { mapActions, mapGetters } from 'vuex'
import { INIT_ALL } from './vuex/mutation-types'
import axios from 'axios'

export default {
  name: 'app',
  computed: mapGetters(['users']),
  methods: {
    save () {
      axios({
        method: 'post',
        url: 'https://api.mlab.com/api/1/databases/throughtheagescounter/collections/users',
        data: {
          data: JSON.stringify(this.users)
        },
        params: {
          apiKey: '504eb50ae4b02f705f156c2e'
        }
      })
      .then(r => console.log(r))
      .catch(e => console.log(e))
    },
    ...mapActions([INIT_ALL])
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
