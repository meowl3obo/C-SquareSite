<template>
  <div>
    <Header />
    <div style="margin-top: 195px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GetClassifies } from '@/library/global/Data'

export default defineComponent({
  components: {
    Header: defineAsyncComponent(() => import('@/components/global/header/Header.vue'))
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      window.addEventListener("resize", windowWidth);
      windowWidth()
    })

    const windowWidth = () => {
      const width = window.innerWidth
      store.dispatch("Global/SetWidth", width)
    }

    GetClassifies()
  },
})
</script>
