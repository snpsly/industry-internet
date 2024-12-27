<script lang="ts" setup>
import { useRouter } from "vue-router"
const router = useRouter()
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref, defineAsyncComponent, onMounted } from "vue"
import CountTo from "@/components/CountTo/index.vue"
import type { Component } from "vue"
import { indexgetTableDataApi as IndustryTableApi } from "@/api/modelList"
import { getTableDataApi as ServiceTableApi } from "@/api/serviceEnterprises"
import { getTableDataApi as WorkTableApi } from "@/api/newApi"
import { getTableDataApi as ProductTableApi } from "@/api/newApi123"
const UserTable = defineAsyncComponent(() => import("./components/UserTable.vue"))
const IndustryTable = defineAsyncComponent(() => import("./components/IndustryTable.vue"))
const ServiceTable = defineAsyncComponent(() => import("./components/ServiceTable.vue"))
const WorkTable = defineAsyncComponent(() => import("./components/WorkTable.vue"))
const ProductTable = defineAsyncComponent(() => import("./components/ProductTable.vue"))

const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "home1"
})
const numData = ref({
  industry: 0,
  user: 0,
  service: 0,
  work: 0,
  product: 0
})
const loadData = () => {
  IndustryTableApi({ MaxResultCount: 999 }).then((data) => {
    numData.value.industry = data && data.reduce((acc: any, item: any) => acc + item.count, 0)
  })
  ServiceTableApi({ MaxResultCount: 999 }).then((data) => {
    numData.value.service = data.totalCount
  })
  WorkTableApi({ MaxResultCount: 999 }).then((data) => {
    numData.value.work = data.totalCount
  })
  ProductTableApi({ MaxResultCount: 999 }).then((data) => {
    numData.value.product = data.totalCount
  })
}
const getUrl = (imgUrl: string) => {
  return new URL(`../../assets/newHome/${imgUrl}`, import.meta.url).href
}
const num = ref(0)
onMounted(() => {
  loadData()
  const a = localStorage.getItem("homeNum")
  if (a !== null && a !== "") {
    num.value = parseInt(a)
  }
})
const carouselList = [
  {
    name: "carousel33.png"
  },
  {
    name: "carousel4.png"
  },
  {
    name: "carousel5.png"
  }
]
const advantageList = [
  {
    name: "advantage1.png"
  },
  {
    name: "advantage2.png"
  },
  {
    name: "advantage3.png"
  },
  {
    name: "advantage4.png"
  }
]
const workoutList = [
  {
    name: "workout1.png"
  },
  {
    name: "workout2.png"
  },
  {
    name: "workout3.png"
  },
  {
    name: "workout4.png"
  },
  {
    name: "workout5.png"
  }
]
setTheme("normal")
const Tname = ref<Component>()
const numm = ref(0)
const dialogVisible = ref(false)
const openTable = (num: string) => {
  numm.value++
  switch (num) {
    case "1":
      Tname.value = UserTable
      dialogVisible.value = true
      break
    case "2":
      Tname.value = IndustryTable
      dialogVisible.value = true

      break
    case "3":
      Tname.value = ServiceTable
      dialogVisible.value = true
      break
    case "4":
      Tname.value = WorkTable
      dialogVisible.value = true
      break
    case "5":
      Tname.value = ProductTable
      dialogVisible.value = true
      break
    case "6":
      break
    default:
      break
  }
}
</script>

<template>
  <el-dialog v-model="dialogVisible"> <component :is="Tname" :key="numm" /></el-dialog>
  <el-carousel height="auto" :interval="6000">
    <el-carousel-item v-for="item in carouselList" :key="item" style="height: 400px">
      <img :src="getUrl(item.name)" alt="" class="w-full h-full object-cover" />
    </el-carousel-item>
  </el-carousel>
  <div class="px-[152px] pb-[142px]">
    <ProjectTitle :title="'企业平台能力'" class="mt-[62px]" />
    <div class="w-full mt-[35px] h-[163px] border-linear flex flex-row items-center">
      <div class="flex flex-col items-center justify-center h-full flex-1">
        <span class="text-linear"> <CountTo :startVal="0" :endVal="205" /></span
        ><span class="mt-4">注册开发用户数</span>
      </div>
      <div
        class="flex flex-col items-center justify-center h-full flex-1 text-desc cursor-pointer"
        @click="openTable('2')"
      >
        <span class="text-linear"> <CountTo :startVal="0" :endVal="numData.industry" /></span
        ><span class="mt-4">行业模型</span>
      </div>
      <div
        class="flex flex-col items-center justify-center h-full flex-1 text-desc cursor-pointer"
        @click="openTable('3')"
      >
        <span class="text-linear"> <CountTo :startVal="0" :endVal="numData.service" /></span
        ><span class="mt-4">服务企业</span>
      </div>
      <div
        class="flex flex-col items-center justify-center h-full flex-1 text-desc cursor-pointer"
        @click="openTable('4')"
      >
        <span class="text-linear"> <CountTo :startVal="0" :endVal="numData.work" /></span
        ><span class="mt-4">连接工业设备数</span>
      </div>
      <div
        class="flex flex-col items-center justify-center h-full flex-1 text-desc cursor-pointer"
        @click="openTable('5')"
      >
        <span class="text-linear"> <CountTo :startVal="0" :endVal="numData.product" /></span
        ><span class="mt-4">连接产品数</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1 text-desc">
        <span class="text-linear"> <CountTo :startVal="0" :endVal="num" /></span><span class="mt-4">访问量</span>
      </div>
    </div>
    <ProjectTitle :title="'平台优势'" class="mt-[62px]" />
    <div class="w-full mt-[35px] flex flex-row items-center">
      <div class="flex flex-col items-center justify-center h-full flex-1 pb-4 div-desc">
        <img :src="getUrl(advantageList[0].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">全球领先的IIOT技术</span>
        <span class="mt-2">软硬一体 自主可控</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1 pb-4 div-desc">
        <img :src="getUrl(advantageList[1].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">助力智能化战略布局</span>
        <span class="mt-2">授人以鱼 授人以渔</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1 pb-4 div-desc">
        <img :src="getUrl(advantageList[2].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">工业模型与知识沉淀</span>
        <span class="mt-2">横向集成 纵向贯通</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1 pb-4 div-desc">
        <img :src="getUrl(advantageList[3].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">丰富的持续运营经验</span>
        <span class="mt-2">平台开放 共建生态</span>
      </div>
    </div>
    <ProjectTitle :title="'解决方案'" class="mt-[62px]" />
    <div class="w-full mt-[35px] flex flex-row">
      <div class="flex flex-col items-center justify-center h-full flex-1">
        <img :src="getUrl(workoutList[0].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">数据采集</span>
        <span class="mt-4 w-60">实现对装备海量数据 的多模态数据的采集， 存储、处理和开发应用。</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1">
        <img :src="getUrl(workoutList[1].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">智慧物流</span>
        <span class="mt-4 w-60">实现行业多订单，多品种、 复杂批量的仓储配送要求。</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1">
        <img :src="getUrl(workoutList[2].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">协同创新</span>
        <span class="mt-4 w-60">基于信息技术与智能建造深度融合，构建大数据驱动研发的高效协同创新机制。</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1">
        <img :src="getUrl(workoutList[3].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">数字孪生</span>
        <span class="mt-4 w-60">基于5G+数字孪生技术， 虚实融合驱动业务创新。</span>
      </div>
      <div class="flex flex-col items-center justify-center h-full flex-1">
        <img :src="getUrl(workoutList[4].name)" class="h-[274px] w-[274px] object-contain" alt="" />
        <span class="font-600 text-6 mt-8">工业互联</span>
        <span class="mt-4 w-60">构建行业工业互联网平台，实现产业链服务全覆盖的产业生态。</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  background-color: rgba(9, 25, 53, 1) !important;
}
:deep(.el-carousel) {
  margin: 20px auto 0 auto;

  .el-carousel__arrow {
    display: none;
  }
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}
.border-linear {
  border-radius: 10px;
  box-shadow:
    inset 0 0 50px rgba(65, 179, 175, 0.28),
    inset 0 0 10px rgba(65, 179, 175, 0.28);
  .text-linear {
    font-weight: 600;
    font-size: 50px;
    background: linear-gradient(to bottom, rgba(85, 200, 190, 1), rgba(1, 173, 159, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .text-desc {
    box-sizing: border-box;
    /*必须设置border宽度和样式*/
    border-left: 2px solid;
    /*设置线性渐变*/
    border-image: linear-gradient(
        180deg,
        rgba(25, 162, 255, 0) 10%,
        rgba(60, 211, 191, 0.6) 50%,
        rgba(25, 162, 255, 0) 90%
      )
      2 2 2 2;
  }
}
.div-desc {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0; /* 定位在底部 */
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 将伪元素居中对齐 */
    width: 74px; /* 边框的宽度，比元素宽度短 */
    height: 4px; /* 边框的厚度 */
    background-color: rgba(11, 165, 150, 1); /* 边框的颜色 */
  }
}
</style>
