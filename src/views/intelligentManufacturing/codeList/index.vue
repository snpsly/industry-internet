<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { computed, ref } from "vue"
import { Search } from "@element-plus/icons-vue"
import { useShopCarStore } from "@/store/modules/shopCar"
import { storeToRefs } from "pinia"
import { getTableDataApi } from "@/api/deviceTable"
import { getTableDataApi as equipmentListData } from "@/api/productTypes"
const store = useShopCarStore()
const { addCar, removeCar, editCarNum } = store
const { carTotal, shopList, carPriceTotal } = storeToRefs(store)
import { getFileUrl } from "@/utils/index"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "codeList"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/codeSelect/${imgUrl}`, import.meta.url).href
}
const getIUrl = (imgUrl: string) => {
  return new URL(`../../../assets/IntelligentInternet/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "introduce1.jpg"
  },
  {
    name: "codeSelectBg.png"
  },
  {
    name: "delete.png"
  },
  {
    name: "menu.png"
  },
  {
    name: "share.png"
  }
]
const currentTabs = ref(1)
const clickTabs = (index: number) => {
  currentTabs.value = index
}
getTableDataApi().then((res) => {
  productList.value = res.items.map((item) => {
    return {
      name: item.name,
      id: item.id,
      state: 0
    }
  })
})
equipmentListData().then((res) => {
  shopListAll.value = res.items.map((item) => {
    return {
      id: item.id,
      path: "shop1.png",
      price: item.amountMoney,
      name: item.name,
      subTitle: item.functionDescription,
      type: item.model,
      image: getFileUrl(item.fileDownloadInfoModel ? item.fileDownloadInfoModel.downloadUrl : "")
    }
  })
})
const productList = ref([
  {
    id: 1,
    name: "交流接触器",
    state: 0
  },
  {
    id: 2,
    name: "测试仪",
    state: 0
  },
  {
    id: 3,
    name: "开关电源",
    state: 0
  },
  {
    id: 4,
    name: "继电器",
    state: 0
  },
  {
    id: 5,
    name: "交流充电桩",
    state: 0
  }
])
setTheme("normal")
const selectItem = (id: number) => {
  console.log(id)
  const index = productList.value.findIndex((p) => {
    return p.id == id
  })
  if (index !== -1) {
    productList.value[index].state = productList.value[index].state === 0 ? 1 : 0
  }
}
const filterList = computed(() => {
  return productList.value.filter((p) => p.state === 1)
})
const handleSelect = () => {
  console.log("carTotal", carTotal)
}
const shopListAll = ref([])
</script>

<template>
  <div class="relative text-white w-full h-70">
    <img :src="getIUrl(imageList[0].name)" class="w-full h-full object-cover" alt="" />
    <span class="absolute left-20 top-16 text-3xl"> 产品型号实时一键查询 </span>
    <span class="absolute left-20 top-30 w-60% text-2xl line-height-loose">
      产品选型、价格、推解轻松获取，清单导出，一键分享
    </span>
  </div>
  <!-- <ProjectTitle :title="'型号查询'" class="mt-8 px-28" /> -->
  <div class="w-full relative bg">
    <!-- <img :src="getUrl(imageList[1].name)" alt="" class="w-full h-full object-cover" /> -->
    <div class="w-full p-2 px-4 flex flex-col">
      <div class="bg-white rounded-2 h-20 flex items-center pl-8">
        <span :class="'p-4 tabs  cursor-pointer ' + (currentTabs === 1 ? 'tabs-border' : '')" @click="clickTabs(1)"
          >型号列表</span
        >
        <el-badge
          :value="carTotal"
          :class="'p-4 tabs cursor-pointer ' + (currentTabs === 2 ? 'tabs-border' : '')"
          @click="clickTabs(2)"
        >
          <span>已选清单</span>
        </el-badge>
      </div>
      <div class="mt-4 flex flex-row min-h-2xl" v-if="currentTabs === 1">
        <div class="rounded-2 w-[250px] flex flex-col">
          <div class="uno-Basics-bgColor text-white p-4 title-border">请选择产品规格参数</div>
          <div class="bg-white p-4 flex-1">
            <div>产品类型</div>
            <div class="flex flex-wrap justify-between mt-2">
              <div
                v-for="item in productList"
                :key="item.id"
                :class="
                  'p-2 text-4 w-[46%] mt-2 flex justify-center items-center rounded-1 border-dashed cursor-pointer ' +
                  (item.state === 1 ? 'select-state' : '')
                "
                @click="selectItem(item.id)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="ml-4 flex-1">
          <div class="flex flex-row items-center justify-between w-full h-12">
            <div class="rounded-1 border-solid bg-white p-2 flex-1 h-full flex flex-row items-center">
              <el-tag v-for="tag in filterList" :key="tag.name" closable class="ml-2" @close="selectItem(tag.id)">
                {{ tag.name }}
              </el-tag>
            </div>
            <el-button type="primary" class="w-20 h-full ml-2" :icon="Search" @click="handleSelect" />
          </div>
          <div class="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-4">
            <div v-for="item in shopListAll" :key="item.id" class="flex flex-col bg-white rounded-1 p-4 px-6">
              <div class="h-60 flex-shrink-0">
                <img :src="item.image" alt="" class="h-full w-full object-contain" />
              </div>
              <span class="text-[red] mt-4">¥{{ parseInt(item.price).toFixed(2) }}</span>
              <span class="mt-2">{{ item.name }}</span>
              <span class="mt-2">{{ item.subTitle }}</span>
              <span class="mt-2">型号：{{ item.type }}</span>
              <el-button type="primary" class="h-10 w-20 mt-2 ml-auto" plain @click="addCar(item)">添加</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 bg-white p-8 px-14 rounded-1" v-else>
        <ProjectTitle :title="'已选清单'" />
        <div>
          <div class="mt-6 uno-Basics-bgColor text-white flex flex-row justify-between py-2 car-title">
            <span class="uno-flex-center flex-[5]">产品信息</span>
            <span class="uno-flex-center flex-1">产品价格</span>
            <span class="uno-flex-center flex-1">数量</span>
            <span class="uno-flex-center flex-1">操作</span>
          </div>
          <div class="car-content">
            <el-scrollbar height="400px">
              <div v-for="item in shopList" :key="item.id" class="flex flex-row justify-between py-2 car-item">
                <div class="flex-[5] flex flex-row items-center">
                  <div class="flex-shrink-0 h-[100px] w-[100px] ml-10">
                    <img :src="item.image" alt="" class="h-full w-full object-cover" />
                  </div>
                  <div class="flex flex-col ml-4">
                    <span>{{ item.name }}</span
                    ><span class="mt-4 text-4">型号：{{ item.type }}</span>
                  </div>
                </div>
                <span class="uno-flex-center flex-1 text-[red]">¥{{ parseInt(item.price).toFixed(2) }}</span>
                <div class="uno-flex-center flex-1">
                  <el-input-number v-model="item.num" :min="0" />
                </div>
                <div class="uno-flex-center flex-1 flex-shrink-0">
                  <img
                    :src="getUrl(imageList[2].name)"
                    alt=""
                    class="h-[30px] w-[30px] object-cover cursor-pointer"
                    @click="removeCar(item)"
                  />
                </div>
              </div>
            </el-scrollbar>
          </div>
        </div>
        <div class="flex items-center flex-row mt-8">
          <div class="ml-auto uno-flex-center">
            共<span class="uno-Basics-text-color font-500 px-2 text-6">{{ carTotal }}</span
            >件设备
          </div>
          <div class="ml-6">
            总价 <span class="text-[red]">¥{{ carPriceTotal.toFixed(2) }}</span>
          </div>
          <div class="uno-Basics-bgColor text-white uno-flex-center p-3 rounded-1 ml-6 cursor-pointer">
            <img :src="getUrl(imageList[3].name)" alt="" class="h-[20px] w-[20px] object-cover cursor-pointer mr-2" />
            清单导出
          </div>
          <div class="uno-Basics-bgColor text-white uno-flex-center ml-6 p-3 rounded-1 cursor-pointer">
            <img :src="getUrl(imageList[4].name)" alt="" class="h-[20px] w-[20px] object-cover cursor-pointer mr-2" />
            分享清单
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  border-bottom: solid 6px transparent;
}
.tabs-border {
  font-weight: 600;
  border-bottom: solid 6px rgba(26, 179, 164, 1);
}
.title-border {
  border-radius: 0.5rem 0.5rem 0 0;
}
.border-dashed {
  border: 1px dashed #666;
}
.border-solid {
  border: 1px solid rgba(38, 168, 146, 1);
}
.select-state {
  border: 1px solid rgba(38, 168, 146, 1);
  color: rgba(38, 168, 146, 1);
}
:deep(.el-button, .el-button--primary) {
  &.is-plain {
    height: auto;
    border-color: var(--el-color-primary);
  }
  height: 100%;
}
.bg {
  width: 100%; /* 设置宽度为父容器的100%，可以根据需要调整 */
  height: 100%; /* 设置高度为父容器的100%，可以根据需要调整 */
  background-image: url("../../../assets/codeSelect/codeSelectBg.png"); /* 替换为你的图片路径 */
  background-size: cover; /* 背景图片自动缩放以覆盖整个容器 */
  background-position: center; /* 背景图片居中显示 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}
.car-title {
  border-radius: 10px 10px 0 0;
}
.car-content {
  border: 1px solid rgba(132, 129, 129, 0.3);
  border-top: none;
}
.car-item {
  border: 1px solid rgba(132, 129, 129, 0.3);
}
</style>
