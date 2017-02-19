<template lang="pug">
.container
  mixin btn(num)
    .btn.btn-secondary(@click="value = Number(value + '#{num}')") #{num}
    
  .row
    button.btn.btn-secondary.btn-wide(type="button") {{value}}
  .row
    .col-xs-1
      each num in [7,8,9]
        +btn(num)
      button.btn.btn-warning(type="button" v-on:click="value = 0") C
    .col-xs-1
      each num in [4,5,6]
        +btn(num)
      button.btn.btn-warning(type="button" v-on:click="value = 0") -
    .col-xs-1
      each num in [1,2,3]
        +btn(num)
      button.btn.btn-warning(type="button" v-on:click="value = 0") +
    .col-xs-1
      +btn(0)
      +btn("")
      +btn("")
      button.btn.btn-warning(type="button" v-on:click="value = 0") =

</template>

<script>
export default {
  name: 'calc',
  data () {
    return {
      value: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  margin 4px
  width 100px
  height 100px
  font-size 72px

.btn-wide
  width 424px
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 20px

</style>
