<template>
  <div>
    <div v-for="item in productList" :key="item.Id">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { GetProductList } from '@/apis/Product'
import { IGetProductsQuery, IProductIntro } from '@/types/product/Product'

export default defineComponent({
  setup() {
    const route = useRoute()
    const params = computed(() => route.params)
    const parentID = ref<string>("")
    const childID = ref<string>("")
    const productList = ref<Array<IProductIntro>>([])

    const setID = () => {
      parentID.value = params.value['main'] ? params.value['main'] as string : ''
      childID.value = params.value['child'] ? params.value['child'] as string : ''
      console.log(parentID.value, childID.value)
    }

    const getProductList = async () => {
      const query: IGetProductsQuery = {}
      if (childID.value != '') query.child = childID.value
      const response = await GetProductList(parentID.value, query)
      if (response.status == 200) {
        const { data } = response
        productList.value = data
      }
    }

    onMounted(async () => {
      setID()
      getProductList()
    })


    watch(
      () => { return params.value },
      () => {
        setID()
        getProductList()
      },
      { deep: true}
    )

    return { productList }
  },
})
</script>
