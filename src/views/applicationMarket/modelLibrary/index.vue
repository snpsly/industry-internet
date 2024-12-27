<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { getTableDataApi, getTableDataApiId } from "@/api/modelList"
import type { GetTableData } from "@/api/modelList/types/table"
import { ref, computed, onMounted } from "vue"
import { getFileUrl } from "@/utils/index"
import { Search } from "@element-plus/icons-vue"
import { classificationEnum } from "@/views/manage/selectList"
import { useRoute } from "vue-router"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "modelLibrary"
})
const route = useRoute()
setTheme("normal")
const input = ref("")

const currentS = ref(0)
const handleSelect = (e: string) => {
  loadData()
}
const loadData = () => {
  getTableDataApi({
    MaxResultCount: 999,
    Name: input.value === "" ? null : input.value,
    ApplicationScenarios: radio1.value === "全部" ? null : radio1.value,
    IndustryModelClassification: radio.value === "全部" ? null : radio.value
  }).then((data) => {
    appList.value = data.items.map((item) => {
      return {
        ...item,
        rate: 5
      }
    })
  })
}
const radioChange = (e: any) => {
  console.log("🚀 ~ radioChange ~ e:", e)
  if (e.value !== "全部") {
    radio1.value = "全部"
  }
  loadData()
}
const radioChange1 = (e: any) => {
  if (e.value !== "全部") {
    radio.value = "全部"
  }
  console.log("🚀 ~ radioChange ~ e:", e)
  loadData()
}
const filterList = computed(() => {
  return appList.value.filter((item) => {
    return item.industryModelClassification === currentS.value
  })
})
const appList = ref<GetTableData[]>([])
const carouselList = [
  {
    name: "12345.jpg"
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
const radio1 = ref("全部")
const radio = ref("全部")
onMounted(() => {
  if (typeof route.query.id === "string") {
    radio1.value = "2"
  }
  loadData()
})
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
const dialogVisible = ref(false)
</script>

<template>
  <el-dialog v-model="dialogVisible">
    <div class="flex flex-row items-center">
      <div class="h-16 w-16 mt-2 mr-8 rounded-1 flex-shrink-0">
        <img
          :src="getFileUrl(diaData.fileDownloadInfoModel ? diaData.fileDownloadInfoModel.downloadUrl : '')"
          alt=""
          class="h-full w-full object-cover rounded-1"
        />
      </div>
      <div>
        <div class="mb-2 font-600 text-3xl">{{ diaData.name }}</div>
        <div>{{ diaData.remark }}</div>
      </div>
      <!-- <div class="ml-auto mt-auto">
        <el-button color="#d7d7d7" type="primary">使用APP</el-button>
        <el-button color="#d7d7d7" type="primary">试用APP</el-button>
      </div> -->
    </div>
    <div class="p-10 flex flex-col">
      <span class="font-600 text-3xl">内容介绍</span>
      <span class="pl-10 mt-6 text-xl">{{ diaData.contentIntroduction }}</span>
      <span class="font-600 mt-6 text-3xl">公式/原理</span>
      <span class="pl-10 mt-6 text-xl">{{ diaData.formula }}</span>
      <span class="font-600 mt-6 text-3xl">实例</span>
      <template v-if="diaData.fileDownloadInfoModels_ExamplePicture">
        <div class="pl-20 mt-6 text-4 w-160" v-for="i in diaData.fileDownloadInfoModels_ExamplePicture" :key="i">
          <img :src="getFileUrl(i.downloadUrl)" alt="" class="h-full w-full object-cover" />
        </div>
      </template>
    </div>
  </el-dialog>
  <div class="relative">
    <img :src="getUrl(carouselList[0].name)" alt="" class="w-full object-cover h-100" />
    <div
      class="uno-flex-center justify-between absolute left-50% top-60% -transform-translate-x-50% w-60% bg-white p-10 rounded-1 shadow-2xl"
    >
      <ProjectTitle :title="'行业模型管理库'" />
      <div class="flex">
        <div class="w-160">
          <el-input v-model="input" placeholder="请输入名称" />
        </div>
        <el-button type="primary" class="w-20" :icon="Search" @click="handleSelect" />
      </div>
    </div>
  </div>
  <div class="w-80% m-auto shadow-xl p-6">
    <div class="flex flex-row items-center mb-4 pb-4 ss">
      <div class="mr-6 font-600">模型类型</div>
      <el-radio-group v-model="radio" class="flex flex-row" @change="radioChange">
        <el-radio value="全部" size="large" border>全部</el-radio>
        <el-radio value="0" size="large" border>数据算法模型</el-radio>
        <el-radio value="1" size="large" border>研发仿真模型</el-radio>
        <el-radio value="2" size="large" border>行业机理模型</el-radio>
        <el-radio value="3" size="large" border>业务流程模型</el-radio>
      </el-radio-group>
    </div>
    <div class="flex flex-row items-center">
      <div class="mr-6 font-600">应用场景</div>
      <el-radio-group v-model="radio1" class="flex flex-row" @change="radioChange1">
        <el-radio value="全部" size="large" border>全部</el-radio>
        <el-radio value="0" size="large" border>生产</el-radio>
        <el-radio value="1" size="large" border>制造</el-radio>
        <el-radio value="2" size="large" border>运营</el-radio>
        <el-radio value="3" size="large" border>质量</el-radio>
        <el-radio value="4" size="large" border>其他</el-radio>
      </el-radio-group>
    </div>
  </div>

  <div class="px-[152px] pt-20 pb-36">
    <!-- <ProjectTitle :title="'行业模型管理库'"> -->
    <!-- <div class="ml-auto uno-flex-center">
        <div class="mr-4 w-80">
          <el-input v-model="input" placeholder="请输入名称" />
        </div>
        <el-button type="primary" class="w-20" :icon="Search" @click="handleSelect" />
      </div>
    </ProjectTitle> -->
    <div class="flex flex-row mt-8">
      <!-- <div class="w-64 h-full">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            class="el-menu"
            text-color="#000"
            active-text-color="#fff"
            @select="handleSelect"
            :default-active="currentS"
          >
            <el-menu-item v-for="item in classificationEnum" :key="item.value" :index="item.value">{{
              item.label
            }}</el-menu-item>
          </el-menu></el-scrollbar
        >
      </div> -->
      <div class="flex-1 flex flex-row flex-wrap pl-10 justify-between content-start">
        <div
          :class="['flex flex-row max-w-[400px] aspect-ratio-[3/1] w-[30%] mb-8 text-desc h-30']"
          v-for="item in appList"
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
                v-if="item.isCoreIndustrialModel"
                >天正</span
              >
              <span class="ml-4 text-[rgba(239,183,36,1)] text-4 border border-1 border-solid p-1 px-2 rounded-1"
                >PC端</span
              > -->
            </div>
            <el-rate v-model="item.rate" disabled text-color="#ff9900" />
            <span class="text-[rgba(148,148,148,1)] text-4">{{ item.majorFunction }} </span>
          </div>
        </div>
        <div
          v-if="appList.length % 3 === 2"
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
:deep(.el-radio__input) {
  display: none;
}
.ss {
  border-bottom: 1px solid black;
}
</style>
