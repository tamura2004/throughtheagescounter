<template lang="pug">
.container
  .row
    .col-sm-3
      .btn.btn-primary(@click="move")
        p.card-text 科学ポイント
        h4.card-title {{users[0].science.current}}

</template>

<script>
import router from '../router'

export default {
  name: 'hello',
  methods: {
    move () {
      router.push('/calc')
    }
  },
  data () {
    return {
      users: [
        {
          name: '田村',
          color: 'btn-danger',
          science: {
            current: 0,
            increase: 1
          },
          culture: {
            current: 0,
            increase: 0
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 20px

</style>
