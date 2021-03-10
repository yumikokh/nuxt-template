import { accessorType } from '@/store'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $ga: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
