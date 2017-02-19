<template lang="pug">
.container
  .row
    .col-sm-3
      router-link.btn.btn-warning(to="/")
        p.card-text 文化ポイント
        h4.card-title {{users[0].science.current}}

</template>

<script>
export default {
  name: 'calc',
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
