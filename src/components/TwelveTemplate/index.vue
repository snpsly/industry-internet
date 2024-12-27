<template>
  <div class="relative im h-80">
    <img src="/src/assets/twelve/bgack.png" alt="" class="h-full w-full object-cover" />
    <div class="absolute top-10 left-30">
      <div class="font-600 text-5xl">{{ title }}</div>
      <div class="mt-10 w-200 line-height-loose">
        {{ subDetail }}
      </div>
    </div>
  </div>
  <div class="">
    <div class="ff bg-white">
      <div class="w-80% mx-auto flex flex-row">
        <div
          :class="{ active: active == index }"
          @click="privilegeHeadClick(item.value, index)"
          v-for="(item, index) in menuList"
          :key="index"
          class="cursor-pointer ml-4 text-4"
        >
          <p class="transition">{{ item.label }}</p>
        </div>
      </div>
    </div>
    <div class="ff fixeds" ref="header3" v-show="isSticky">
      <div class="w-80% mx-auto flex flex-row">
        <div
          :class="{ active: active == index }"
          @click="privilegeHeadClick(item.value, index)"
          v-for="(item, index) in menuList"
          :key="index"
          class="cursor-pointer ml-4 text-4"
        >
          <p class="transition">{{ item.label }}</p>
        </div>
      </div>
    </div>
    <div class="scroll-container">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        :id="item.value"
        class="mx-auto w-80% privilege-wrap sections"
      >
        <div class="font-600 text-4xl my-12">
          {{ item.label }}
        </div>
        <div class="w-auto mx-auto">
          <div v-if="item.textDetail" class="py-8">
            {{ item.textDetail }}
          </div>
          <template v-if="item.img && Array.isArray(item.img)">
            <div v-for="i in item.img" :key="i" class="w-full">
              <img :src="getUrl(i)" alt="" class="object-contain w-full" />
            </div>
          </template>

          <div v-if="item.img && !Array.isArray(item.img)" class="w-full">
            <img :src="getUrl(item.img)" alt="" class="object-contain w-full" />
          </div>

          <template v-if="item.subList">
            <div v-for="sub in item.subList" :key="sub">
              <div v-if="sub.title" class="my-4">{{ sub.title }}</div>
              <div class="w-full">
                <img v-if="sub.img" :src="getUrl(sub.img)" alt="" class="object-contain w-full" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue"
interface propsType {
  menuList: Array<{
    label: string
    value: string
  }> &
    any
  title: string
  subDetail: string
}
const getUrl = (imgUrl: string) => {
  return new URL(`../../assets/twelve/${imgUrl}`, import.meta.url).href
}
const props = withDefaults(defineProps<propsType>(), {
  menuList: () => []
})
const isSticky = ref(false)
const header3 = ref(null)
const handleScroll = () => {
  const scroll = document.querySelector(".im")
  if (scroll) {
    isSticky.value = window.scrollY > scroll?.clientHeight
    header3.value && (header3.value.style.top = "77px")
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("scroll", onScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  window.removeEventListener("scroll", onScroll)
  clearTimeout(scrollTimeout)
})
let isScrolling = false
const active = ref(0)
let scrollTimeout: any = null
const privilegeHeadClick = (anchor: any, index: any) => {
  isScrolling = true
  active.value = index
  nextTick(() => {
    if (!anchor) return
    document.querySelector(`#${anchor}`).scrollIntoView({
      behavior: "smooth", // 平滑过渡
      block: "start" // 上边框与视窗顶部平齐。默认值
    })
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    scrollTimeout = setTimeout(() => {
      isScrolling = false // 设定延迟以确保滚动完成后再处理滚动事件
    }, 1000)
  })
}
const onScroll = (e: any) => {
  console.log("🚀 ~ onScroll ~ isScrolling:", isScrolling)

  if (isScrolling) return
  props.menuList.forEach((section) => {
    const element = document.getElementById(section.value)
    const bounding = element.getBoundingClientRect()
    if (bounding.top <= 100) {
      active.value = section.index - 1
    }
  })
}
</script>
<style lang="scss" scoped>
.ff {
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.1);
}
:deep(.el-tabs__nav-wrap:after) {
  display: none !important;
  height: 0;
}
.privilege-head {
  position: fixed;
  top: 0;
}
.active {
  font-weight: 600;
  border-bottom: 4px solid rgba(11, 165, 150, 1);
}
// .scroll-container {
//   overflow: auto;
// }
.fixeds {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: white;
}
.privilege-wrap {
  max-width: 100%;
}
body {
  overflow-x: hidden !important;
}
</style>
