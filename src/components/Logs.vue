<template lang="pug">
.container
  table.table
    thead.bg-inverse.text-white
      tr
        td 行番号
        td ログ内容
    tbody
      tr(v-for="(log, index) in logs")
        td {{ index }}
        td {{ log }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'logs',
  computed: mapGetters(['logs'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
table td
  padding-top 4px
  padding-bottom 4px
  
</style>
