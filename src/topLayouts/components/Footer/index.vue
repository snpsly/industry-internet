<script lang="ts" setup>
import { useRouter } from "vue-router"
import { watch, ref } from "vue"
import logo from "@/assets/layouts/logo.png?url"
const router = useRouter()
const routerList = router.getRoutes()
const navList = routerList.filter((item) => {
  return item.meta.menu
})
const handleSelect = (key: string, keyPath: string[]) => {
  if (key.includes("http")) {
    window.open(key, "_blank")
  } else {
    if (keyPath && keyPath.length > 0) {
      router.push(keyPath.join("/"))
    }
  }
}
const currentPath = ref("")
watch(
  () => router.currentRoute.value,
  (newValue) => {
    currentPath.value = newValue.path
  },
  { immediate: true }
)
</script>

<template>
  <footer class="layout-footer flex flex-row items-center justify-between px-8 relative">
    <div class="layout-logo-container">
      <img :src="logo" class="layout-logo-text" />
    </div>
    <div class="w-6xl flex items-center justify-between">
      <el-menu
        class="el-menu w-full uno-flex-center"
        mode="horizontal"
        background-color="black"
        text-color="#fff"
        @select="handleSelect"
        :default-active="currentPath"
      >
        <template v-for="item in navList" :key="item.path">
          <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
            <template #title>{{ item.name }}</template>
            <template v-for="item1 in item.children" :key="item1.path">
              <el-sub-menu v-if="item1.children && item1.children.length > 0" :index="item1.path">
                <template #title> {{ item1.name }}</template>
                <el-menu-item v-for="item2 in item1.children" :key="item2.path" :index="item2.path">{{
                  item2.name
                }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item1.path">{{ item1.name }}</el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item v-else :index="item.path">{{ item.name }}</el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="flex items-center">
      <span>咨询热线</span><span class="font-600 text-8 ml-4 h-full flex items-baseline">400-866-0006</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  position: relative;
  height: 45px;
  line-height: 49px;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;

  .layout-logo {
    display: none;
  }
  .layout-logo-text {
    height: 100%;
    vertical-align: middle;
    object-fit: contain;
  }
}
.layout-footer {
  width: 100%;
  min-height: 85px;
  color: #fff;
  background-color: black;
}
:deep(.el-menu--horizontal.el-menu) {
  border-bottom: none;
}
</style>
