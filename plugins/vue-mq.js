import Vue from 'vue'
import VueMq from 'vue-mq'

import { BREAKPOINT } from '@/constants'

// https://github.com/AlexandreBonaventure/vue-mq

Vue.use(VueMq, {
  breakpoints: {
    sp: BREAKPOINT,
    other: Infinity,
  },
  defaultBreakpoint: 'other',
})

Vue.mixin({
  computed: {
    $isSP() {
      return this.$mq === 'sp'
    },
  },
})
