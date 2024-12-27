<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { computed, ref } from "vue"
const { setTheme } = useTheme()
import { getfl, getfltotal } from "@/api/newApi"
import { getfl as getfl1, getfltotal as getfltotal1 } from "@/api/newApi123"
defineOptions({
  // 命名当前组件
  name: "manufacturingScheme"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../assets/1029/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "1.jpg"
  },
  {
    name: "2.jpg"
  },
  {
    name: "3.jpg"
  },
  {
    name: "4.jpg"
  },
  {
    name: "5.jpg"
  },
  {
    name: "6.jpg"
  },
  {
    name: "manufacturingScheme7.jpg"
  },
  {
    name: "manufacturingScheme8.jpg"
  }
]
const currentItem = ref(1)
const itemEnter = (index: number) => {
  console.log(index)
  currentItem.value = index
}
setTheme("normal")
const currentS = ref("上海正*电气有限公司")
const currentS1 = ref("上海正*电气有限公司")
const num = ref([])
const numtotal = ref(0)
const num1 = ref<any[]>([])
const numtotal1 = ref(0)
const getTableData = () => {
  getfl({
    Manufacturer: currentS.value === "全部" ? null : currentS.value
  }).then((res) => {
    num.value = res
  })
  getfltotal({
    Manufacturer: currentS.value === "全部" ? null : currentS.value
  }).then((res) => {
    numtotal.value = res
  })
  getfl1({
    Manufacturer: currentS1.value === "全部" ? null : currentS1.value
  }).then((res) => {
    num1.value = res
  })
  getfltotal1({
    Manufacturer: currentS1.value === "全部" ? null : currentS1.value
  }).then((res) => {
    numtotal1.value = res
  })
}
getTableData()
const searchData1 = (e: string) => {
  currentS1.value = e
  getTableData()
}
const searchData = (e: string) => {
  currentS.value = e
  getTableData()
}
const num1Filter = computed<any>(() => {
  return num1.value.slice(1)
})
const numFilter = computed<any>(() => {
  return num.value.slice(1)
})
</script>

<template>
  <div class="relative">
    <img :src="getUrl(imageList[0].name)" alt="" />
    <div class="absolute top-10 left-30 text-white">
      <div class="font-600 text-5xl">平台服务</div>
      <div class="mt-10 w-160 line-height-loose">
        提供全面的订单管理、数据分析和客户支持服务，帮助企业提高运营效率和客户满意度。通过易于使用的界面和强大的功能，用户可以轻松管理业务流程并实现持续增
        长。
      </div>
    </div>
  </div>
  <div class="px-28 pb-50">
    <div class="w-full flex flex-col justify-between items-center mt-8">
      <div class="flex flex-row w-full bg-[rgba(240,242,242,1)] py-4 px-8">
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'供应商服务'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">SUPPLIER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              企业与供应商之间建立长期稳定的合作关系，通过优化沟通流程、共同解决问题来提升供应链的整体效率与响应速度。良好的供应商关系有助于降低成本、提高质量并确保供应稳定性。
            </div>
          </div>
        </div>
        <div class="h-[273px] flex ml-auto">
          <img :src="getUrl(imageList[1].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="w-full flex flex-col justify-between items-center mt-8">
      <div class="flex flex-row w-full bg-[rgba(240,242,242,1)] py-4 px-8">
        <div class="h-[273px] flex mr-30">
          <img :src="getUrl(imageList[2].name)" class="h-full object-contain" alt="" />
        </div>
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'经销商服务'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">DEALER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              为客户提供高效自主挑选产品的服务，最大限度降低客单获取时间，达到5分钟内即可登记发货，并具备订单跟踪，可实时掌握车间生产进度、物流发货情况，为客户提前备货、紧急要货提供保障
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="w-full flex flex-col justify-between items-center mt-8 px-4 bg-[rgba(240,242,242,1)]">
      <div class="flex flex-row w-full py-4 px-4">
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'客户服务'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">CUSTOMER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              为客户提供统一的物联平台，对60000余台不同型号的设备进行数据采集及设备管理，与设备建立数据采集通道，实现一键调取，数据自动化采集。
            </div>
            <div class="flex flex-row mt-4">
              <div class="p-2 px-10 new-border cursor-pointer" @click="searchData1('上海正*电气有限公司')">
                上海正*电气有限公司
              </div>
              <div class="p-2 px-10 ml-4 new-border cursor-pointer" @click="searchData1('南昌恒*置业有限公司')">
                南昌恒*置业有限公司
              </div>
              <div class="p-2 px-10 ml-4 new-border cursor-pointer" @click="searchData1('大庆高*石油科技有限公司')">
                大庆高*石油科技有限公司
              </div>
            </div>
            <div class="mt-4">产品数：{{ numtotal1 }}</div>
          </div>
        </div>
        <div class="h-[273px] flex ml-auto">
          <img :src="getUrl(imageList[3].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
      <el-scrollbar class="w-full">
        <div class="flex flex-row w-full my-4">
          <div class="flex-1 uno-flex-center flex-col py-8 min-w-50 bg-white">
            <div class="uno-Basics-text-color text-2xl" v-if="num1[0]">{{ num1[0].count }}</div>
            <div class="mt-2" v-if="num1[0]">{{ num1[0].monitorProductTypeName }}</div>
          </div>
          <div
            class="flex-1 uno-flex-center flex-col py-8 text-desc min-w-50 bg-white"
            v-for="item in num1Filter"
            :key="item"
          >
            <div class="uno-Basics-text-color text-2xl">{{ item.count }}</div>
            <div class="mt-2 text-4">{{ item.monitorProductTypeName }}</div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 4 -->
    <div class="w-full flex flex-col justify-between items-center mt-8 px-4 bg-[rgba(240,242,242,1)]">
      <div class="flex flex-row w-full py-4 px-4">
        <div class="h-[273px] flex mr-30">
          <img :src="getUrl(imageList[4].name)" class="h-full object-contain" alt="" />
        </div>
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'企业案例'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">CUSTOMER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              采用先进设备，显著提升了生产效率和产品质量，实现了业务的快速增长和满意度的大幅提升。
            </div>
            <div class="flex flex-row mt-4">
              <div class="p-2 px-10 new-border cursor-pointer" @click="searchData('上海正*电气有限公司')">
                上海正*电气有限公司
              </div>
              <div class="p-2 px-10 ml-4 new-border cursor-pointer" @click="searchData('南昌恒*置业有限公司')">
                南昌恒*置业有限公司
              </div>
              <div class="p-2 px-10 ml-4 new-border cursor-pointer" @click="searchData('大庆高*石油科技有限公司')">
                大庆高*石油科技有限公司
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-auto ml-24">设备数：{{ numtotal }}</div>

      <div class="bg-white flex flex-row w-full my-4">
        <el-scrollbar class="w-full">
          <div class="flex flex-row w-full my-4">
            <div class="flex-1 uno-flex-center flex-col py-8 min-w-50 bg-white">
              <div class="uno-Basics-text-color text-2xl" v-if="num[0]">{{ num[0].count }}</div>
              <div class="mt-2" v-if="num[0]">{{ num[0].equipmentTypeName }}</div>
            </div>
            <div
              class="flex-1 uno-flex-center flex-col py-8 text-desc min-w-50 bg-white"
              v-for="item in numFilter"
              :key="item"
            >
              <div class="uno-Basics-text-color text-2xl">{{ item.count }}</div>
              <div class="mt-2 text-4">{{ item.equipmentTypeName }}</div>
            </div>
          </div>
        </el-scrollbar>
        <!-- <div class="flex-1 uno-flex-center flex-col py-8">
          <div class="uno-Basics-text-color text-2xl">137</div>
          <div class="mt-2">运行设备</div>
        </div>
        <div class="flex-1 uno-flex-center flex-col py-8 text-desc">
          <div class="uno-Basics-text-color text-2xl">1150</div>
          <div class="mt-2">加工设备</div>
        </div>
        <div class="flex-1 uno-flex-center flex-col py-8 text-desc">
          <div class="uno-Basics-text-color text-2xl">1150</div>
          <div class="mt-2">行走设备</div>
        </div>
        <div class="flex-1 uno-flex-center flex-col py-8 text-desc">
          <div class="uno-Basics-text-color text-2xl">1150</div>
          <div class="mt-2">其他设备</div>
        </div>
        <div class="flex-1 uno-flex-center flex-col py-8 text-desc">
          <div class="uno-Basics-text-color text-2xl">1150</div>
          <div class="mt-2">能源管理设备</div>
        </div> -->
      </div>
    </div>
    <!-- <div class="bg-[rgba(240,242,242,1)] p-4 w-full h-120 mt-4">
      <div class="w-full h-full flex flex-row content-box-show">
        <div class="bg-[rgba(240,242,242,1)] flex flex-col w-[400px] h-full">
          <div :class="'border-item ' + (currentItem === 1 ? 'hover-class' : '')" @mouseenter="itemEnter(1)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[3].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">供应商服务</span>
          </div>
          <div :class="'border-item ' + (currentItem === 2 ? 'hover-class' : '')" @mouseenter="itemEnter(2)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[4].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">经销商</span>
          </div>
          <div :class="'border-item ' + (currentItem === 3 ? 'hover-class' : '')" @mouseenter="itemEnter(3)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[5].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">客户</span>
          </div>
          <div :class="'border-item ' + (currentItem === 4 ? 'hover-class' : '')" @mouseenter="itemEnter(4)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[6].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">工业企业</span>
          </div>
        </div>
        <div class="bg-white flex-1 right-content p-2">
          <img :src="getUrl(imageList[7].name)" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.text-linear {
  font-weight: 600;
  font-size: 30px;
  background: linear-gradient(to bottom, rgba(69, 69, 69, 0.1), transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.content-box-show {
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
}
.border-item {
  flex: 1;
  border: 1px solid rgba(151, 151, 151, 0.47);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
    border-right: none;
  }
}
.hover-class {
  background-color: white;
  border-right: none;
}
.right-content {
  border: 1px solid rgba(151, 151, 151, 0.47);
  border-left: none;
}
.new-border {
  border: 1px solid rgba(23, 185, 173, 0.9);
  border-radius: 8px;
  color: rgba(23, 185, 173, 0.9);
  background-color: white;
}
.text-desc {
  box-sizing: border-box;
  /*必须设置border宽度和样式*/
  border-left: 2px solid;
  /*设置线性渐变*/
  border-image: linear-gradient(180deg, rgba(25, 162, 255, 0) 10%, rgba(79, 79, 79, 0.4), rgba(25, 162, 255, 0) 90%) 2 2
    2 2;
}
</style>
