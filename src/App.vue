<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { GetClassifies } from '@/library/global/Data'

export default defineComponent({
  components: {
    Header: defineAsyncComponent(() => import('@/components/global/header/Header.vue'))
  },
  setup() {
    GetClassifies()
  },
})
</script>
