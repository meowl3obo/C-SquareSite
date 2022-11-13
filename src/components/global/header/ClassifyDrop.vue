<template>
  <div class="classifies" :class="isOpen ? 'm-open-classies' : 'm-close-classies'">
    <div class="content">
      <div class="classify" v-if="width <= 1024" >
        <input type="text" placeholder="Search">
      </div>
      <div class="classify">
        <div class="classify-title">Sale</div>
      </div>
      <div class="classify">
        <div class="classify-title">New</div>
      </div>
      <div v-for="item in classifies" :key="item.Id" class="classify">
        <div class="classify-title">{{ item.Name }}</div>
        <template v-if="width > 1024">
          <div v-for="item2 in item.Child" :key="item2.Id" class="child-classify">
            {{ item2.Name }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_common.scss";
@include mobile {
  .classifies {
    bottom: -10px;
    width: calc(100vw - 40px);
    .classify-title {
      font-size: 20px;
      opacity: .9;
    }
  }
  .m-open-classies {
    padding-block: 10px;
    height: calc(100vh - 100px);
  }
}
@include pc {
  .classifies {
    bottom: 0px;
    width: calc(100vw - 80px);
    .content {
      display: flex;
      .classify-title {
        opacity: .6;
      }
    }
  }
  .m-open-classies {
    height: 250px;
  }
}
.m-close-classies {
  padding-block: 0px;
  height: 0;
}
.classifies {
  left: -10px;
  border-radius: 10px;
  background-color: var(--drop-60);
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 10px var(--drop-60);
  overflow: hidden;
  transition: all 0.2s ease-out;

  .content {
    padding-inline: 10px;

    & > div {
      min-width: 150px;
    }
  }

  .classify {
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: bold;

    .classify-title {
      cursor: pointer;
      padding: 5px 10px;
    }
    .child-classify {
      cursor: pointer;
      opacity: .9;
      margin-top: 3px;
      padding: 5px 10px;
      border-radius: 10px;
      transition: background-color 0.25s ease-in-out;
      &:hover {
        background-color: var(--drop-hover);
      }
    }

    input {
      width: 100%;
      &::placeholder {
        text-align: center;
      }
    }
  }
}
</style>

<script lang="ts">
import { computed, defineComponent, Ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { IParentClassify } from "@/types/product/Classify";

export default defineComponent({
  props: {
    IsOpen: Boolean
  },
  setup(props) {
    const isOpen = toRefs(props).IsOpen as Ref<boolean>
    const store = useStore()
    const width = computed(() => store.getters["Global/GetWidth"] as number)
    const classifies = computed(() => store.getters["Product/GetClassify"] as Array<IParentClassify>);

    return { width, classifies, isOpen }
  },
})
</script>
