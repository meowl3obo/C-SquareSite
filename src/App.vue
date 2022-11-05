<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GetClassifies } from '@/library/global/Data'

export default defineComponent({
  setup() {
    GetClassifies()
  },
})
</script>
