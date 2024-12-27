<script lang="ts" setup>
defineOptions({
  // 命名当前组件
  name: "qysyfw"
})
const goPush = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="background-image" />
  <div
    class="position-absolute top-66% left-16% w-50 h-60 cursor-pointer"
    @click="goPush('http://enass.casicloud.com/navigationHome')"
  />
  <div
    class="position-absolute top-66% left-27% w-50 h-60 cursor-pointer"
    @click="goPush('http://enass.casicloud.com/diagnosis')"
  />
  <div
    class="position-absolute top-66% left-39% w-50 h-60 cursor-pointer"
    @click="goPush('http://enass.casicloud.com/cloudServeHome')"
  />
  <div
    class="position-absolute top-66% left-51% w-50 h-60 cursor-pointer"
    @click="
      goPush(
        'https://cas.casicloud.com/login?service=https%3A%2F%2Fauth.ms.casicloud.com%2F1%2Foauth%2Flogin%3Fservice%3Dhttps%253A%252F%252Fauth.ms.casicloud.com%252F1%252Foauth%252Fauthorize%253Fclient_id%253Djhs1648cnnrg91dk%2526redirect_uri%253Dhttp%253A%252F%252Fenass.casicloud.com%2526response_type%253Dcode&systemId=10000077420009'
      )
    "
  />
  <div
    class="position-absolute top-66% left-63% w-50 h-60 cursor-pointer"
    @click="
      goPush(
        'https://cas.casicloud.com/login?service=https%3A%2F%2Fauth.ms.casicloud.com%2F1%2Foauth%2Flogin%3Fservice%3Dhttps%253A%252F%252Fauth.ms.casicloud.com%252F1%252Foauth%252Fauthorize%253Fclient_id%253Djhs1648cnnrg91dk%2526redirect_uri%253Dhttp%253A%252F%252Fenass.casicloud.com%2526response_type%253Dcode&systemId=10000077420009'
      )
    "
  />
  <div
    class="position-absolute top-66% left-74% w-50 h-60 cursor-pointer"
    @click="
      goPush(
        'https://cas.casicloud.com/login?service=https%3A%2F%2Fauth.ms.casicloud.com%2F1%2Foauth%2Flogin%3Fservice%3Dhttps%253A%252F%252Fauth.ms.casicloud.com%252F1%252Foauth%252Fauthorize%253Fclient_id%253Djhs1648cnnrg91dk%2526redirect_uri%253Dhttp%253A%252F%252Fenass.casicloud.com%2526response_type%253Dcode&systemId=10000077420009'
      )
    "
  />
</template>

<style lang="scss" scoped>
.background-image {
  background-image: url("/src/assets/docs/qysyfw.png");
  background-size: cover; /* Ensure the image covers the whole container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
