<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import { getTableDataApi } from "@/api/developerHelp"
import { ref } from "vue"
import VideoPlayer from "@/components/VideoPlayer/index.vue"
import { getFileUrl } from "@/utils/index"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "introduce"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/IntelligentInternet/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "introduce1.jpg"
  }
]

setTheme("normal")

const currentTabs = ref(1)
const clickTabs = (index: number) => {
  currentTabs.value = index
}

const fileList = ref([])
getTableDataApi().then((data) => {
  console.log(data.items)
  fileList.value = data.items.filter((item) => {
    return item.fileType === 0
  })
  videoList.value = data.items.filter((item) => {
    return item.fileType === 1
  })
})
const videoList = ref([])
const downLoad = (item) => {
  window.open(getFileUrl(item.fileDownloadInfoModel.downloadUrl))
  // downloadFile({
  //   id: item.id,
  //   token: item.fileDownloadInfoModel.token
  // }).then((bean) => {
  //   const blob = new Blob([bean.data], { type: "video/mp4" }) // 选择适当的 MIME 类型
  //   const url = URL.createObjectURL(blob)
  //   const a = document.createElement("a")
  //   a.href = url
  //   a.download = item.name // 指定下载的文件名
  //   document.body.appendChild(a)
  //   a.click()
  //   document.body.removeChild(a)
  //   URL.revokeObjectURL(url)
  // })
}
</script>

<template>
  <div class="relative text-white">
    <div class="h-80">
      <img :src="getUrl(imageList[0].name)" class="w-full h-full object-cover" alt="" />
    </div>
    <div class="absolute top-10 left-30 text-white">
      <div class="font-600 text-5xl">BPM开发</div>
      <div class="mt-10 w-160 line-height-loose">
        提供了详尽的开发文档和直观的视频教程，旨在为开发者们在使用平台或工具时提供全方位的技术支持与指导。通过这些资源，无论是初学者还是经验丰富的开发者都能够快速上手并解决遇到的技术难题。
      </div>
    </div>
  </div>
  <div class="bg-white rounded-2 h-20 uno-flex-center">
    <span :class="'p-4 tabs  cursor-pointer ' + (currentTabs === 1 ? 'tabs-border' : '')" @click="clickTabs(1)"
      >开发文档</span
    >
    <span :class="'p-4 tabs  cursor-pointer ' + (currentTabs === 2 ? 'tabs-border' : '')" @click="clickTabs(2)"
      >培训视频</span
    >
  </div>
  <div class="w-80% mx-auto" v-if="currentTabs === 1">
    <div class="mt-6 uno-Basics-bgColor text-white flex flex-row justify-between py-2 car-title">
      <span class="uno-flex-center flex-1">序号</span>
      <span class="uno-flex-center flex-[5]">文档名称</span>
      <span class="uno-flex-center flex-1">操作</span>
    </div>
    <div class="car-content">
      <el-scrollbar height="400px">
        <div
          v-for="(item, index) in fileList"
          :key="index"
          class="flex flex-row justify-between py-4 car-item even:bg-[rgba(11,165,150,0.06)]"
        >
          <span class="uno-flex-center flex-1">{{ index + 1 }}</span>
          <span class="uno-flex-center flex-[5]">{{ item.fileName }}</span>
          <span class="uno-flex-center flex-1 uno-Basics-text-color cursor-pointer" @click="downLoad(item)">下载</span>
        </div>
      </el-scrollbar>
    </div>
  </div>
  <div class="w-80% mx-auto" v-else>
    <el-scrollbar height="400px">
      <div class="flex flex-row items-center justify-between flex-wrap">
        <div
          v-for="(item, index) in videoList"
          :key="index"
          class="rounded-1 w-22% uno-flex-center flex-col relative cursor-pointer"
        >
          <div class="rounded-1 aspect-ratio-[357/206] w-full relative">
            <VideoPlayer
              :url="getFileUrl(item.fileDownloadInfoModel.downloadUrl)"
              class="rounded-1 w-full h-full object-cover"
            />

            <!-- <img :src="getUrl(imageList[0].name)" class="rounded-1 w-full h-full object-cover" alt="" /> -->
            <!-- <SvgIcon name="video_light" class="absolute left-50% -transform-translate-50% text-7xl top-50%" /> -->
          </div>

          <span class="my-4">{{ item.fileName }}</span>
        </div>
        <div
          v-if="videoList.length % 4 !== 1 && videoList.length % 4 !== 0"
          v-for="i in videoList.length % 4"
          :key="i"
          class="rounded-1 w-22% aspect-ratio-[357/206]"
        />
      </div>
    </el-scrollbar>
  </div>
  <div class="h-20" />
</template>

<style lang="scss" scoped>
.tabs {
  border-bottom: solid 6px transparent;
}
.tabs-border {
  font-weight: 600;
  border-bottom: solid 6px rgba(26, 179, 164, 1);
}
.car-title {
  border-radius: 10px 10px 0 0;
}
</style>
