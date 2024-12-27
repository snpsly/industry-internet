<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref } from "vue"
import { Search } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
const router = useRouter()
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "codeSelect"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/codeSelect/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "codeSelectBg.png"
  },
  {
    name: "codeSelect.png"
  },
  {
    name: "codeSelect2.png"
  },
  {
    name: "codeSelect3.png"
  }
]
const input = ref("")
const handleSelect = () => {}
const goListPage = () => {
  router.push("/intelligentManufacturing/codeList")
}

setTheme("normal")
</script>

<template>
  <ProjectTitle :title="'型号查询'" class="mt-8 px-28" />
  <div class="w-full mt-8 h-[calc(100vh-170px)] relative">
    <img :src="getUrl(imageList[0].name)" alt="" class="w-full h-full object-cover" />
    <div
      class="absolute top-20 left-50% -transform-translate-x-50% mx-auto p-8 bg-white rounded-2xl h-100 w-200 flex flex-col"
    >
      <span class="font-600 text-7">产品型号实时一键查询备份</span>
      <span class="text-5 mt-4">产品选型、价格、推解轻松获取，清单导出，一键分享</span>
      <div class="flex flex-row items-center mt-4">
        <el-input v-model="input" class="mr-4" placeholder="请输入名称" />
        <el-button type="primary" class="w-20" :icon="Search" @click="handleSelect" />
      </div>
      <div class="flex flex-row justify-between items-center mt-12 px-12">
        <div class="flex flex-col justify-center items-center p-4 px-8 box-s cursor-pointer">
          <div class="h-16 w-16">
            <img :src="getUrl(imageList[1].name)" class="h-full w-full object-cover" alt="" />
          </div>
          <span class="mt-4">查询</span>
        </div>
        <div class="flex flex-col justify-center items-center p-4 px-8 box-s cursor-pointer" @click="goListPage">
          <div class="h-16 w-16">
            <img :src="getUrl(imageList[3].name)" class="h-full w-full object-cover" alt="" />
          </div>
          <span class="mt-4">选型</span>
        </div>
        <div class="flex flex-col justify-center items-center p-4 px-8 box-s cursor-pointer">
          <div class="h-16 w-16">
            <img :src="getUrl(imageList[2].name)" class="h-full w-full object-cover" alt="" />
          </div>
          <span class="mt-4">分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-s {
  box-shadow: 1px 1px 5px 5px rgb(151, 150, 150, 0.1);
}
</style>
