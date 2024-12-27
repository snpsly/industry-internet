<script lang="ts" setup>
import Footer from "./Footer/index.vue"
</script>

<template>
  <section class="app-main">
    <div class="app-scrollbar">
      <router-view v-slot="{ Component, route }">
        <!-- <transition name="el-fade-in" mode="out-in"> -->
        <!-- <keep-alive :include="tagsViewStore.cachedViews"> -->
        <component :is="Component" :key="route.path" class="app-container-grow" />
        <!-- </keep-alive> -->
        <!-- </transition> -->
      </router-view>
      <!-- 页脚 -->
      <Footer />
    </div>
    <!-- 返回顶部 -->
    <el-backtop />
    <!-- 返回顶部（固定 Header 情况下） -->
    <el-backtop target=".app-scrollbar" />
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.app-main {
  width: 100%;
  display: flex;
}

.app-scrollbar {
  height: 100%;
  flex-grow: 1;
  overflow: auto;
  // min-height: 1000px;
  @extend %scrollbar;
  display: flex;
  flex-direction: column;
  .app-container-grow {
    flex-grow: 1;
  }
}
</style>
