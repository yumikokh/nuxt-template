<template lang="pug">
  .wrapper(:data-sp="$isSP" ontouchstart="")
    nuxt

</template>

<script lang="ts">
import Vue from 'vue'

import wait from '@/assets/js/helpers/wait'

export default Vue.extend({
  mounted() {
    // 高さ取得
    this.$accessor.updateWh()

    window.addEventListener('resize', async () => {
      await wait(10)() // [memo] 稀にタブ切り替え時の高さ検出が遅れる対策
      this.$accessor.updateWh()
    })
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  // overflow: hidden;
}
</style>
