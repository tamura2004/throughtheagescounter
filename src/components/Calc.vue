<template lang="pug">
  .container
    .row
      .col-3
        button.btn.btn-block(:class="'btn-'+user.color")
      .col-9
        .card: h4 {{ edit.number }}
        table
          tr
            td: NumBtn(num="9")
            td: NumBtn(num="8")
            td: NumBtn(num="7")
            td: ClrBtn
          tr
            td: NumBtn(num="6")
            td: NumBtn(num="5")
            td: NumBtn(num="4")
            td: AddBtn
          tr
            td: NumBtn(num="3")
            td: NumBtn(num="2")
            td: NumBtn(num="1")
          tr
            td: NumBtn(num="0" colspan=3)


</template>

<script>
import { mapGetters } from 'vuex'
import NumBtn from './NumBtn'
import ClrBtn from './ClrBtn'
import AddBtn from './AddBtn'
import PointPanel from './PointPanel'

export default {
  name: 'calc',
  components: { NumBtn, ClrBtn, AddBtn, PointPanel },
  computed: mapGetters(['edit', 'user', 'userKey', 'valueKey'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
p
  padding 2px 24px
  font-size 16px

.card
  padding 12px 24px
  width 294px
  height 72px
  margin 2px
  h4
    text-align right
    font-size 32px

</style>
