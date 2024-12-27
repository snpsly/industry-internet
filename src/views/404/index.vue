<script lang="ts" setup>
import { useRouter } from "vue-router"
const router = useRouter()
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref, defineAsyncComponent, onMounted } from "vue"
import type { Component } from "vue"

const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "home1"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../assets/newHome/${imgUrl}`, import.meta.url).href
}
const carouselList = [
  {
    name: "carousel1.jpg"
  },
  {
    name: "carousel2.png"
  },
  {
    name: "carousel3.png"
  }
]
const advantageList = [
  {
    name: "advantage1.png"
  },
  {
    name: "advantage2.png"
  },
  {
    name: "advantage3.png"
  },
  {
    name: "advantage4.png"
  }
]
const workoutList = [
  {
    name: "workout1.png"
  },
  {
    name: "workout2.png"
  },
  {
    name: "workout3.png"
  },
  {
    name: "workout4.png"
  },
  {
    name: "workout5.png"
  }
]
setTheme("normal")
</script>

<template>
  <div class="h-[90vh] uno-flex-center">该页面暂未提供</div>
</template>

<style lang="scss" scoped>
body {
  background-color: rgba(9, 25, 53, 1) !important;
}
:deep(.el-carousel) {
  margin: 20px auto 0 auto;

  .el-carousel__arrow {
    display: none;
  }
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}
.border-linear {
  border-radius: 10px;
  box-shadow:
    inset 0 0 50px rgba(65, 179, 175, 0.28),
    inset 0 0 10px rgba(65, 179, 175, 0.28);
  .text-linear {
    font-weight: 600;
    font-size: 50px;
    background: linear-gradient(to bottom, rgba(85, 200, 190, 1), rgba(1, 173, 159, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .text-desc {
    box-sizing: border-box;
    /*必须设置border宽度和样式*/
    border-left: 2px solid;
    /*设置线性渐变*/
    border-image: linear-gradient(
        180deg,
        rgba(25, 162, 255, 0) 10%,
        rgba(60, 211, 191, 0.6) 50%,
        rgba(25, 162, 255, 0) 90%
      )
      2 2 2 2;
  }
}
.div-desc {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0; /* 定位在底部 */
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 将伪元素居中对齐 */
    width: 74px; /* 边框的宽度，比元素宽度短 */
    height: 4px; /* 边框的厚度 */
    background-color: rgba(11, 165, 150, 1); /* 边框的颜色 */
  }
}
</style>
