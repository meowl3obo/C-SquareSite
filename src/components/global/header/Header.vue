<template>
  <header>
    <nav class="main-nav">
      <div class="nav-start">
        <transition name="ease_top_bottom">
          <ClassifySM v-show="isScrollToBottom" />
        </transition>
      </div>
      <div>
        <h1 class="logo" :class="isScrollToBottom ? 'logo-sm' : ''">
          <a href="/" @click.prevent="toPath('/')">C.Squared</a>
        </h1>
      </div>
      <div class="nav-end">
        <UserControl />
      </div>
    </nav>
    <transition name="ease_top_bottom">
      <Classify v-show="!isScrollToBottom" />
    </transition>
    <!-- <div v-show="isShowChildClassify" class="child-classifies">
      <div class="content" :style="`left: ${childLeft}px`">
        <div v-for="item in childClassify" :key="item.Id" class="child-claddify">
          {{ item.Name }}
        </div>
      </div>
    </div> -->
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/_animation.scss";
@import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');
// @include pc {
//   header {
//     height: 200px;
//   }
// }
// @include mobile {
//   header {
//     height: 70px;
//   }
// }

header {
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
  transition: height 0.2s ease-out;
  padding: 20px ;

  .main-nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: var(--bg-color-20);
    backdrop-filter: blur(50px);

    .nav-start {
      display: flex;
      justify-content: flex-start;
      flex-basis: 50%;

      .classify {
        span {
          padding: 15px;
        }
        & > span:nth-child(odd) {
          cursor: pointer;
        }
      }
    }
    .logo {
      font-family: 'Nothing You Could Do', cursive;
      font-size: 54px;
      margin-block: 20px;
      transition: all 0.3s ease-in-out;

      a {
        cursor: pointer;
        text-decoration: none;
        color: var(--main-font);
      }
    }
    .logo-sm {
      font-size: 24px;
      margin-block: 0px;
    }
    .nav-end {
      display: flex;
      justify-content: flex-end;
      flex-basis: 50%;
    }
  }
  .child-classifies {
    position: absolute;
    bottom: -5px;
    transform: translateY(100%);
    width: 100%;
    border-radius: 10px;
    background-color: var(--drop);
    backdrop-filter: blur(50px);
    height: 190px;

    .content {
      position: absolute;
    }

    .child-claddify {
      cursor: pointer;
      padding-block: 5px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    UserControl: defineAsyncComponent(() => import("./UserControl.vue")),
    Classify: defineAsyncComponent(() => import("./Classify.vue")),
    ClassifySM: defineAsyncComponent(() => import("./ClassifySM.vue")),
  },
  setup() {
    const router = useRouter();
    const nowScrollTop = ref<number>(0);
    const isScrollToBottom = ref<boolean>(false);

    const toPath = (path: string) => {
      router.push(path)
    }

    onMounted(() => {
      nowScrollTop.value = document.documentElement.scrollTop
      window.addEventListener("scroll", () => {
        const newScorllTop = document.documentElement.scrollTop
        if (newScorllTop > nowScrollTop.value) isScrollToBottom.value = true;
        else isScrollToBottom.value = false;
        nowScrollTop.value = newScorllTop
      })
    },)

    return { isScrollToBottom, toPath };
  },
});
</script>

