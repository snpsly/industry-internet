<script lang="ts" setup>
defineOptions({
  // 命名当前组件
  name: "gyhlwwfw"
})
const goPush = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="background-image" />
  <div
    class="position-absolute top-24% left-4% w-60 h-30 cursor-pointer"
    @click="
      goPush(
        'https://cas.casicloud.com/login?service=https%3A%2F%2Fetpss.casicloud.com%2Fhome%2Fyxzx%2Ffkd%2Floginc%3Fret%3Dhttp%253A%252F%252Fetpss.casicloud.com%252Fhome%252Fyxzx%252Ffkd%252Flist '
      )
    "
  />
</template>

<style lang="scss" scoped>
.background-image {
  background-image: url("/src/assets/docs/gyhlwwfw.png");
  background-size: cover; /* Ensure the image covers the whole container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
