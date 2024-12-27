<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { getTableDataApi, getTableDataApiId } from "@/api/appRecord"
import type { GetTableData } from "@/api/appRecord/types/table"
import { ref, computed } from "vue"
import { getFileUrl } from "@/utils/index"
import { Search } from "@element-plus/icons-vue"
import { appTypeEnum1 } from "@/views/manage/selectList"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "appApplication"
})

setTheme("normal")
const input = ref("")
const currentS = ref(999)
const handleSelect = (e: number) => {
  currentS.value = e
}
const handleSearch = () => {
  console.log("🚀 ~ input:", input)

  loadData()
}
const loadData = () => {
  getTableDataApi({
    MaxResultCount: 999,
    Name: input.value === "" ? null : input.value
  }).then((data) => {
    appList.value = data.items.map((item) => {
      return {
        ...item,
        rate: 5
      }
    })
  })
}
loadData()
const filterList = computed(() => {
  // return [
  //   {
  //     name: "全部",
  //     resolvePainPoints:
  //       "全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部全部v",
  //     value: 999
  //   }
  // ]
  if (currentS.value == 999) {
    return appList.value.filter((item) => {
      return item.isKillerApp
    })
  }
  return appList.value.filter((item) => {
    return item.appType === currentS.value
  })
})
const appList = ref<any[]>([])
const carouselList = [
  {
    name: "1234.jpg"
  },
  {
    name: "carousel2.png"
  },
  {
    name: "carousel3.png"
  }
]
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/newHome/${imgUrl}`, import.meta.url).href
}
const dialogVisible = ref(false)
const diaData = ref<any>({})
const open = (row: any) => {
  getTableDataApiId(row.id).then((res: any) => {
    // formData.value.pictureFieldList123.push({
    //   name: formData.value.fileDownloadInfoModels_CasePicture.expectedFileName,
    //   url: "api" + formData.value.fileDownloadInfoModels_CasePicture.downloadUrl
    // })
    diaData.value = res
    dialogVisible.value = true
  })
}
const goPush = (url: string) => {
  if (url === null || url === "") return
  window.open(url)
}
</script>

<template>
  <!-- <el-carousel>
    <el-carousel-item v-for="item in carouselList" :key="item">
      <img :src="getUrl(item.name)" alt="" class="w-full" />
    </el-carousel-item>
  </el-carousel> -->
  <el-dialog v-model="dialogVisible">
    <div class="flex flex-row items-center">
      <div class="h-16 w-16 mt-2 mr-8 rounded-1 flex-shrink-0">
        <img
          :src="getFileUrl(diaData.fileDownloadInfoModel ? diaData.fileDownloadInfoModel.downloadUrl : '')"
          alt=""
          class="h-full w-full object-cover rounded-1"
        />
      </div>
      <div class="flex flex-col justify-between">
        <div class="font-600 text-3xl">{{ diaData.name }}</div>
        <div>{{ diaData.deliveryMethod }}</div>
        <div>版本：{{ diaData.componentVersion }}</div>
      </div>
      <div class="ml-auto mt-auto">
        <el-button color="#d7d7d7" type="primary" @click="goPush(diaData.componentUsageLink)">使用APP</el-button>
        <el-button color="#d7d7d7" type="primary" @click="goPush(diaData.componentTrialLink)">试用APP</el-button>
      </div>
    </div>
    <div class="p-10 flex flex-col">
      <span class="font-600 text-3xl">应用场景</span>
      <span class="pl-10 mt-6 text-xl">目标用户群体</span>
      <span class="pl-20 mt-6 text-4">{{ diaData.targetUserGroup }}</span>
      <span class="pl-10 mt-6 text-xl">解决痛点</span>
      <span class="pl-20 mt-6 text-4">{{ diaData.resolvePainPoints }}</span>
      <span class="pl-10 mt-6 text-xl">应用介绍</span>
      <span class="pl-20 mt-6 text-4">{{ diaData.applicationIntroduction }}</span>
      <span class="pl-10 mt-6 text-xl">案例</span>
      <template v-if="diaData.fileDownloadInfoModels_CasePicture">
        <div class="pl-20 mt-6 text-4 w-160" v-for="i in diaData.fileDownloadInfoModels_CasePicture" :key="i">
          <img :src="getFileUrl(i.downloadUrl)" alt="" class="h-full w-full object-cover" />
        </div>
      </template>
      <span class="pl-10 mt-6 text-xl">常见问题</span>
      <span class="pl-20 mt-6 text-4">{{ diaData.frequentlyAskedQuestion }}</span>
      <span class="pl-10 mt-6 text-xl">发布者</span>
      <span class="pl-20 mt-6 text-4">{{ diaData.publisher }}</span>
    </div>
  </el-dialog>
  <div class="relative">
    <img :src="getUrl(carouselList[0].name)" alt="" class="w-full object-cover h-100" />
    <div
      class="uno-flex-center justify-between absolute left-50% top-60% -transform-translate-x-50% w-60% bg-white p-10 rounded-1 shadow-2xl"
    >
      <ProjectTitle :title="'APP应用市场'" />

      <!-- <div class="flex flex-col">
        <span class="font-800 text-3xl">应用搜索</span>
        <span class="text-blueGray text-4">即刻搜索你想找的应用</span>
      </div> -->

      <div class="flex">
        <div class="w-160">
          <el-input v-model="input" placeholder="请输入名称" />
        </div>
        <el-button type="primary" class="w-20" :icon="Search" @click="handleSearch" />
      </div>
    </div>
  </div>
  <div class="px-[152px] pt-20 pb-36">
    <div class="flex flex-row mt-8">
      <div class="w-64 h-full">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            class="el-menu"
            text-color="#000"
            active-text-color="#fff"
            @select="handleSelect"
            :default-active="currentS"
          >
            <el-menu-item v-for="item in appTypeEnum1" :key="item.value" :index="item.value">{{
              item.label
            }}</el-menu-item>
          </el-menu></el-scrollbar
        >
      </div>
      <div class="flex-1 flex flex-row flex-wrap pl-10 justify-between content-start">
        <div
          :class="['flex flex-row max-w-[400px] aspect-ratio-[3/1] w-[30%] mb-8 text-desc h-30']"
          v-for="item in filterList"
          :key="item.rate"
          @click="open(item)"
        >
          <div class="h-12 w-12 mt-2 mr-8 rounded-1 flex-shrink-0">
            <img
              :src="getFileUrl(item.fileDownloadInfoModel ? item.fileDownloadInfoModel.downloadUrl : '')"
              alt=""
              class="h-full w-full object-cover rounded-1"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <span class="font-600">{{ item.name }}</span>
              <!-- <span
                class="ml-4 uno-Basics-text-color text-4 border border-1 border-solid p-1 px-2 rounded-1"
                v-if="item.isKillerApp"
                >天正</span
              > -->
              <!-- <span class="ml-4 text-[rgba(239,183,36,1)] text-4 border border-1 border-solid p-1 px-2 rounded-1"
                >PC端</span
              > -->
            </div>
            <el-rate v-model="item.rate" disabled text-color="#ff9900" />
            <span class="text-[rgba(148,148,148,1)] text-4 ellipsis-3">{{ item.resolvePainPoints }}</span>
            <!-- <span class="text-[rgba(148,148,148,1)] text-4">{{ item.remark }} </span> -->
          </div>
        </div>
        <div
          v-if="filterList.length % 3 === 2"
          :class="['flex flex-row max-w-[400px] aspect-ratio-[3/1] w-[30%] mb-8 ']"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-scrollbar {
  height: 101%;
  :deep(.scrollbar-wrapper) {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      display: none;
    }
  }
}
:deep(.el-menu) {
  padding-right: 20px;
  .is-active {
    background-color: var(--el-color-primary);
  }
  .el-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
      background-color: var(--el-color-primary);
      color: white;
    }
  }
}
.text-desc {
  box-sizing: border-box;
  /*必须设置border宽度和样式*/
  border-bottom: 2px solid;
  /*设置线性渐变*/
  border-image: linear-gradient(
      90deg,
      rgba(25, 162, 255, 0) 0%,
      rgba(148, 148, 148, 0.3) 50%,
      rgba(25, 162, 255, 0) 100%
    )
    2 2 2 2;
}
:deep(.el-input__wrapper) {
  background-color: white;
}
.ellipsis-3 {
  display: -webkit-box; /* 使用Flexbox进行布局 */
  -webkit-box-orient: vertical; /* 垂直布局方向 */
  overflow: hidden; /* 隐藏超出的部分 */
  text-overflow: ellipsis; /* 添加省略号 */
  line-clamp: 3; /* 限制显示行数 */
  -webkit-line-clamp: 3; /* 限制显示3行（WebKit内核） */
}
</style>
