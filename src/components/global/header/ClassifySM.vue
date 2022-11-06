<template>
  <div class="div-classify" @mouseleave="parentHover(-1)">
    <div class="classify">
      <span>Sale</span>
      <span>新品</span>
      <template v-for="item in classifies" :key="item.Id">
        <span @mouseenter="(e) => parentHover(item.Id, e)">
          {{ item.Name }}
        </span>
      </template>
    </div>
    <div v-show="isShowChildClassify" class="child-classifies">
      <div class="content" :style="`left: ${childLeft}px`">
        <div v-for="item in childClassify" :key="item.Id" class="child-claddify">
          {{ item.Name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.div-classify {
  position: relative;
  display: flex;
  justify-content: center;

  .classify {
    span {
      cursor: pointer;
      padding: 10px;
    }
  }
  .child-classifies {
    position: absolute;
    bottom: -5px;
    transform: translateY(100%);
    width: 100%;
    border-radius: 10px;
    background-color: var(--drop-40);
    backdrop-filter: blur(50px);
    height: 190px;
    box-shadow: 0px 0px 10px var(--drop-60);
    padding-block: 10px;

    .content {
      position: absolute;
    }

    .child-claddify {
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 10px;
      transition: background-color 0.25s ease-in-out;

      &:hover {
        background-color: var(--drop-hover);
      }
    }
  }
}
</style>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { IParentClassify, IChildClassify } from "@/types/product/Classify";

export default defineComponent({
  setup() {
    const store = useStore()
    const classifies = computed(() => store.getters["Product/GetClassify"] as Array<IParentClassify>);
    const isShowChildClassify = ref<boolean>(false);
    const childClassify = ref<Array<IChildClassify>>([]);
    const childLeft = ref<number>(0);

    const parentHover = (parentID: number, e?: MouseEvent) => {
      const classify = classifies.value.find((x) => x.Id == parentID);
      if (classify && classify.Child.length > 0 && e) {
        const path = e.composedPath() as Array<HTMLElement>
        isShowChildClassify.value = true;
        childClassify.value = classify.Child
        childLeft.value = path[0].offsetLeft - 7
      } else {
        isShowChildClassify.value = false;
        childClassify.value = []
      }
    }

    return { classifies, isShowChildClassify, childClassify, childLeft, parentHover }
  },
})
</script>
