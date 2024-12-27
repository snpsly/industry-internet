<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import { useRouter } from "vue-router"
const router = useRouter()
const { setTheme } = useTheme()
setTheme("normal")

defineOptions({
  // 命名当前组件
  name: "online"
})
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="text-4xl flex p-4 font-800">
    在线服务<el-button type="primary" @click="goBack" class="ml-auto">返回</el-button>
  </div>
  <el-tabs :tab-position="'left'" class="demo-tabs">
    <el-tab-pane label="行业知识库">
      <div class="h-full w-full">
        <img src="/src/assets/online/hyzsk.png" alt="" class="h-full w-full object-contain object-top" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="线上展厅">
      <div class="h-full w-full">
        <img src="/src/assets/online/xszt.png" alt="" class="h-full w-full object-contain object-top" /></div
    ></el-tab-pane>
    <el-tab-pane label="供需撮合">
      <div class="h-full w-full">
        <img src="/src/assets/online/xqzh.png" alt="" class="h-full w-full object-contain object-top" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100vh;
  width: 400px;
}
:deep(.el-tabs__content .el-tab-pane) {
  height: 100vh;
}
</style>
