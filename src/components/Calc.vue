<template lang="pug">
  .container
    table
      tr: td(colspan=4)
        .btn.btn-default {{ edit.number }}
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

export default {
  name: 'calc',
  components: { NumBtn, ClrBtn, AddBtn },
  computed: mapGetters(['users', 'edit'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.btn
  font-size 32px
  text-align center
// .d-flex
//   width 350px

</style>
