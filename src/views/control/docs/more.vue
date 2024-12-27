<script lang="ts" setup>
defineOptions({
  // 命名当前组件
  name: "more"
})
</script>

<template>
  <div class="background-image" />
</template>

<style lang="scss" scoped>
.background-image {
  background-image: url("/src/assets/docs/more.png");
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
