<template>
  <div class="h-100vh w-100vw" @click="goPush('https://facility.tengen.com.cn:5280')">
    <div class="background-image" />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router"
const router = useRouter()
const goPush = (url: string) => {
  // router.push(url)
  window.open(url, "_blank") // Open the link in a new tab
}
</script>
<style lang="scss" scoped>
.background-image {
  background-image: url("/src/assets/middle/能源管理.png");
  background-size: cover; /* Ensure the image covers the whole container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  width: 100%;
  height: 100%;
}
</style>
