<script lang="ts" setup>
import Appppp from "./components/Appppp.vue"
import Warning from "./components/Warning.vue"
import { useTheme } from "@/hooks/useTheme"
import { useRouter } from "vue-router"
const router = useRouter()
const { setTheme } = useTheme()
setTheme("normal")
defineOptions({
  // 命名当前组件
  name: "collection"
})
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="text-4xl flex p-4 font-800">
    设备数据采集<el-button type="primary" @click="goBack" class="ml-auto">返回</el-button>
  </div>
  <el-tabs :tab-position="'left'" class="demo-tabs">
    <el-tab-pane label="设备管理" :lazy="true">
      <Appppp />
    </el-tab-pane>
    <el-tab-pane label="告警管理" :lazy="true">
      <Warning />
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
iframe {
  height: 100%;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
}
</style>
