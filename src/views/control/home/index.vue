<script lang="ts" setup>
import { useRouter } from "vue-router"
const router = useRouter()
import { useTheme } from "@/hooks/useTheme"
import { getTableDataApi, getTableDataApiId } from "@/api/appRecord"
import { ref, defineAsyncComponent, onMounted, onBeforeUnmount } from "vue"
import type { Component } from "vue"
const UserTable = defineAsyncComponent(() => import("./components/UserTable.vue"))
const ProductTable = defineAsyncComponent(() => import("./components/ProductTable.vue"))
const IndustryTable = defineAsyncComponent(() => import("./components/IndustryTable.vue"))
const ServiceTable = defineAsyncComponent(() => import("./components/ServiceTable.vue"))
const WorkTable = defineAsyncComponent(() => import("./components/WorkTable.vue"))
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "home"
})
onMounted(() => {
  document.querySelector("body")?.setAttribute("style", "background-color: rgba(9, 25, 53, 1)")
})
// 页面销毁时清空背景色
onBeforeUnmount(() => {
  document.querySelector("body")?.removeAttribute("style")
})
// setTheme("dark-blue")
const numKey = ref(0)
const Tname = ref<Component>()
const num = ref(0)
onMounted(() => {
  const a = localStorage.getItem("homeNum")
  if (a !== null && a !== "") {
    num.value = parseInt(a)
  }
})
const dialogVisible = ref(false)
const goPush = (path: string) => {
  if (path.includes("http")) {
    window.open(path, "_blank")
    return
  }
  const url = router.resolve({ name: path }).href
  window.open(url, "_blank")
  // router.push(path)
}
const goBack = () => {
  router.push("/")
}
const openTable = (num: string) => {
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
  numKey.value++
}
const leftList = ref([
  {
    img: ""
  }
])
// getTableDataApi({
//   MaxResultCount: 999
// }).then((data) => {
//   appList.value = data.items
// })
const appList = ref<any[]>([])
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/layouts/${imgUrl}`, import.meta.url).href
}
const rtoplist = ref([
  {
    img: "i1.png",
    name: "天易维",
    detail: "天易维是一款提供智慧用电管理的平台，通过数据采集分析实施远程智慧管理。"
  },
  {
    img: "i2.png",
    name: "天易盾",
    detail: "天易盾是一款提供安全用电管理的平台，通过对配电系统的负载数据的在线实时，保障电力服务安全。"
  },
  {
    img: "i3.png",
    name: "排程易",
    detail: "排程易是一款面向离散制造的计划排产系统，综合需求和产能等要素计算满足MTO、MTS方式的生产计划。"
  }
])
const rbotlist = ref([
  {
    name: "生产制造",
    detailList: [
      {
        img: "i4.png",
        detail: "智慧用电"
      },
      {
        img: "i5.png",
        detail: "智能仓储"
      },
      {
        img: "i6.png",
        detail: "产品可视化"
      },
      {
        img: "i10.png",
        detail: "数据管理"
      }
    ]
  },
  {
    name: "节能减排",
    detailList: [
      {
        img: "i7.png",
        detail: "能源管理"
      },
      {
        img: "i8.png",
        detail: "减排检测"
      },
      {
        img: "i9.png",
        detail: "咨询中心"
      },
      {
        img: "i11.png",
        detail: "计划台"
      }
    ]
  }
  // {
  //   name: "质量管控",
  //   detailList: [
  //     {
  //       img: "ICON0010.png",
  //       detail: "节能减排助手"
  //     },
  //     {
  //       img: "ICON0011.png",
  //       detail: "减排监测"
  //     },
  //     {
  //       img: "ICON0012.png",
  //       detail: "节能方案"
  //     },
  //     {
  //       img: "ICON094.png",
  //       detail: "其它"
  //     }
  //   ]
  // },
  // {
  //   name: "供应链",
  //   detailList: [
  //     {
  //       img: "ICON0013.png",
  //       detail: "掌上数字建设"
  //     },
  //     {
  //       img: "ICON0014.png",
  //       detail: "掌上数字建设"
  //     },
  //     {
  //       img: "ICON0015.png",
  //       detail: "掌上数字建设"
  //     },
  //     {
  //       img: "ICON094.png",
  //       detail: "其它"
  //     }
  //   ]
  // }
])
</script>

<template>
  <div class="w-full h-full uno-flex-center">
    <div class="box-bor">
      <div class="background-image" @click="goBack" />
      <el-dialog v-model="dialogVisible"> <component :is="Tname" /></el-dialog>
      <!-- <div class="gradient-text mt-4 text-xl w-full text-center">
    <span class="ml-4 cursor-pointer" @click="openTable('1')">注册开发用户数：105</span>
    <span class="ml-4 cursor-pointer" @click="openTable('2')">行业模型：32</span>
    <span class="ml-4 cursor-pointer" @click="openTable('3')">服务企业：2013</span>
    <span class="ml-4 cursor-pointer" @click="openTable('4')">连接工业设备数：1815</span>
    <span class="ml-4 cursor-pointer" @click="openTable('5')">连接产品数：80315</span>
    <span class="ml-4">访问量：{{ num }}</span>
  </div> -->
      <div class="app-content w-full flex flex-row min-h-180">
        <div class="relative w-26% sub-bg rounded-xl">
          <div class="relative h-14">
            <img src="/src/assets/layouts/subtitle.png" alt="" class="object-contain w-full" />
            <span
              class="position-absolute left-40 top-50% transform-translate-y--75% color-white"
              style="letter-spacing: 4px"
              >行业服务</span
            >
          </div>
          <div class="flex flex-col justify-between">
            <div class="flex flex-1 flex-row items-center w-full cursor-pointer px-10 bor">
              <div class="h-50 text-right">
                <img src="/src/assets/home/hyfw01.png" alt="" class="object-contain h-full w-full" />
              </div>
              <div class="ml-8 flex flex-col">
                <div class="relative">
                  <img src="/src/assets/layouts/subsubtitle.png" alt="" class="object-contain w-full" />
                  <span
                    class="position-absolute left-10 top-50% transform-translate-y--60% color-white text-xl"
                    style="letter-spacing: 4px"
                    >智慧物联服务</span
                  >
                </div>

                <div
                  class="gradient-text ml-10 text-xl flex-1 mt-4"
                  @click="goPush('https://facility.tengen.com.cn:5280')"
                >
                  能源管理系统
                </div>
                <div class="gradient-text ml-10 text-xl flex-1 mt-4" @click="goPush('https://tyd.tengen.com/')">
                  天易盾系统
                </div>
                <div class="gradient-text ml-10 text-xl flex-1 mt-4" @click="goPush('http://tyw03.tengen.com')">
                  天易维系统
                </div>
              </div>
            </div>
            <!-- <div class="bor w-80% mx-auto my-1" /> -->
            <div class="flex flex-1 flex-row items-center w-full cursor-pointer px-10">
              <div class="h-50 text-right">
                <img src="/src/assets/home/hyfw02.png" alt="" class="object-contain h-full w-full" />
              </div>
              <div class="ml-8 flex flex-col">
                <div class="relative">
                  <img src="/src/assets/layouts/subsubtitle.png" alt="" class="object-contain w-full" />
                  <span
                    class="position-absolute left-10 top-50% transform-translate-y--60% color-white text-xl"
                    style="letter-spacing: 4px"
                    >平台服务</span
                  >
                </div>
                <div class="gradient-text ml-10 text-xl flex-1 mt-4" @click="goPush('https://srm.tengen.com.cn/')">
                  供应商平台
                </div>
                <div class="gradient-text ml-10 text-xl flex-1 mt-4" @click="goPush('https://dmc.tengen.com.cn/pcweb')">
                  经销商平台
                </div>
              </div>
            </div>
            <!-- <div class="bor w-80% mx-auto my-1" /> -->

            <!-- <div class="bor w-80% mx-auto my-2" /> -->
            <div class="flex flex-1 flex-row items-center w-full cursor-pointer px-10 py-4">
              <div class="h-50 text-right">
                <img src="/src/assets/home/hyfw04.png" alt="" class="object-contain h-full w-full" />
              </div>
              <div class="ml-8 flex flex-col">
                <div class="relative">
                  <img src="/src/assets/layouts/subsubtitle.png" alt="" class="object-contain w-full" />
                  <span
                    class="position-absolute left-10 top-50% transform-translate-y--60% color-white text-xl"
                    style="letter-spacing: 4px"
                    >开发者服务</span
                  >
                </div>
                <div
                  class="gradient-text ml-10 text-xl flex-1 mt-4"
                  @click="goPush('https://eap3.tengen.com.cn/console/')"
                >
                  代码开发平台
                </div>
                <div
                  class="gradient-text ml-10 text-xl flex-1 mt-4"
                  @click="goPush('https://api2.tengen.com.cn:8888/')"
                >
                  数据接口平台
                </div>
              </div>
            </div>
            <!-- <div class="flex flex-1 flex-row items-center w-full cursor-pointer px-10 py-4">
          <div class="h-30 text-right">
            <img src="/src/assets/home/hyfw03.png" alt="" class="object-contain h-full w-full" />
          </div>
          <div class="ml-8 flex flex-col">
            <div class="relative">
              <img src="/src/assets/layouts/subsubtitle.png" alt="" class="object-contain w-full" />
              <span
                class="position-absolute left-10 top-50% transform-translate-y--60% color-white text-xl"
                style="letter-spacing: 4px"
                @click="goPush('物联方案介绍')"
                >生态服务</span
              >
            </div>
            <div class="gradient-text ml-10 text-xl flex-1 mt-4" @click="goPush('物联方案介绍')">伙伴类型</div>
            <div class="gradient-text ml-10 text-xl flex-1 mt-4" @click="goPush('物联方案介绍')">优秀伙伴</div> -->
            <!-- </div>
        </div> -->
            <!-- <div class="bor w-80% mx-auto my-4" /> -->
            <!-- <div class="flex flex-row gap-4 mx-auto mt-4">
          <div class="circle1" />
          <div class="circle" />
          <div class="circle" />
          <div class="circle" />
        </div> -->
          </div>
        </div>
        <div class="relative flex-1 sub-bg rounded-xl ml-12">
          <div class="in pt-1 flex flex-col h-full">
            <div class="flex flex-row justify-center px-10">
              <div
                class="flex flex-col items-center justify-between cursor-pointer relative"
                @click="goPush('https://newbi.tengen.com.cn/webroot/decision/login')"
              >
                <div class="h-80">
                  <img src="/src/assets/home/qydn03.png" alt="" class="object-contain w-full h-full" />
                </div>
                <span class="gradient-text absolute bottom-10">企业大脑</span>
              </div>
            </div>
            <div class="relative w-auto mx-10">
              <div class="w-full">
                <img src="/src/assets/home/sub-title.png" alt="" class="object-cover w-full" />
              </div>
              <span
                class="color-white position-absolute left-20 top-50% transform-translate-y--60%"
                style="letter-spacing: 4px"
                >客户满意</span
              >
            </div>
            <div class="flex flex-row items-center justify-center w-full h-20% pb-10 text-white mt-4">
              <div class="flex flex-col items-center h-full cursor-pointer" @click="goPush('PLM系统')">
                <div class="z-img-h">
                  <img src="/src/assets/home/t-1.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">研发-PLM</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="goPush('https://pm.tengen.com.cn/project/#/home/project/view/cBQZxPqm')"
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-2.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">项目-PMS</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="goPush('https://crm.tengen.com.cn/portal-page/defaultPortalDashboard')"
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-3.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">售前-CRM</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="goPush('https://dmc.tengen.com.cn/pcweb')"
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-4.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">售中-DMC</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="goPush('https://crm2.recloud.com.cn/t/tengen2/crmweb/index.html#/home')"
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-5.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">售后-FSC</span>
              </div>
            </div>
            <!-- <div class="relative w-auto mx-10">
          <div class="w-full">
            <img src="/src/assets/home/sub-title.png" alt="" class="object-contain w-full h-full" />
          </div>
          <span
            class="color-white position-absolute left-20 top-50% transform-translate-y--60%"
            style="letter-spacing: 4px"
            >销售</span
          >
        </div> -->
            <!-- <div class="flex flex-row items-center justify-center w-full h-20% pb-10 text-white"> -->
            <!-- <div
            class="flex flex-col items-center h-full cursor-pointer"
            @click="goPush('https://crm.tengen.com.cn/portal-page/defaultPortalDashboard')"
          >
            <div class="z-img-h">
              <img src="/src/assets/home/t-3.png" alt="" class="object-cover w-full h-full" />
            </div>
            <span class="mt-1 gradient-text text-xl">售前-CRM</span>
          </div> -->
            <!-- </div> -->
            <div class="relative w-auto mx-10">
              <div class="w-full">
                <img src="/src/assets/home/sub-title.png" alt="" class="object-contain w-full h-full" />
              </div>
              <span
                class="color-white position-absolute left-20 top-50% transform-translate-y--60%"
                style="letter-spacing: 4px"
                >智能制造</span
              >
            </div>
            <div class="flex flex-row items-center justify-center w-full h-20% pb-0 text-white mt-4">
              <div
                class="flex flex-col items-center h-full cursor-pointer"
                @click="goPush('http://10.8.15.114/ZD1_1/')"
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-6.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">生产-ERP</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="
                  goPush(
                    'http://10.8.15.113/report/#/prodashbord?Facility=P01&ProductionLine=%E6%95%B0%E5%AD%97%E5%8C%96%E4%B8%80%E7%BA%BF'
                  )
                "
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-7.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">制造-MOM</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="
                  goPush(
                    'http://10.8.15.113/report/#/prodashbord?Facility=P01&ProductionLine=%E6%95%B0%E5%AD%97%E5%8C%96%E4%B8%80%E7%BA%BF'
                  )
                "
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/hyfw03.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">计划-APS</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="
                  goPush(
                    'http://bi2.tengen.com.cn:8080/webroot/decision/view/form?viewlet=%E7%89%A9%E6%B5%81%E7%AE%A1%E7%90%86/%E5%A4%A9%E6%AD%A3%E6%99%BA%E8%83%BD%E7%89%A9%E6%B5%81%E4%B8%AD%E5%BF%83/logistics_wisdom.frm'
                  )
                "
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-8.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">物流-WMS</span>
              </div>
              <div
                class="flex flex-col items-center h-full ml-10 cursor-pointer"
                @click="goPush('http://10.8.1.22:8080/frame/OEE')"
              >
                <div class="z-img-h">
                  <img src="/src/assets/home/t-9.png" alt="" class="object-cover w-full h-full" />
                </div>
                <span class="mt-1 gradient-text text-xl">设备-SCADA</span>
              </div>
            </div>
            <!-- <div class="relative w-auto ml-10">
          <img src="/src/assets/home/sub-title.png" alt="" />
          <span
            class="gradient-text position-absolute left-0 top-50% transform-translate-y--50%"
            style="letter-spacing: 4px"
            >智能化供应链</span
          >
        </div> -->
            <!-- <div class="flex flex-row items-center justify-around w-full h-20% pb-14 text-white">
          <div class="flex flex-col items-center w-25% h-full">
            <div class="w-30 h-30">
              <img src="/src/assets/home/t-5.png" alt="" class="object-cover w-full h-full" />
            </div>
            <span class="mt-1">绿色化制造</span>
          </div>
          <div class="flex flex-col items-center w-25% h-full">
            <div class="w-30 h-30">
              <img src="/src/assets/home/t-6.png" alt="" class="object-cover w-full h-full" />
            </div>
            <span class="mt-1">精益化管理</span>
          </div>
          <div class="flex flex-col items-center w-25% h-full">
            <div class="w-30 h-30">
              <img src="/src/assets/home/t-7.png" alt="" class="object-cover w-full h-full" />
            </div>
            <span class="mt-1">数字化设计</span>
          </div>
          <div class="flex flex-col items-center w-25% h-full">
            <div class="w-30 h-30">
              <img src="/src/assets/home/t-8.png" alt="" class="object-cover w-full h-full" />
            </div>
            <span class="mt-1">智能化生产</span>
          </div>
        </div> -->
            <!-- <div class="h-80">
          <img src="/src/assets/home/666.png" alt="" class="h-full w-full object-corver" />
        </div> -->
          </div>
        </div>
        <div class="relative w-26% sub-bg rounded-xl ml-12 cursor-pointer" @click="goPush('APP应用市场')">
          <div class="relative">
            <img src="/src/assets/layouts/subtitle.png" alt="" class="object-contain w-full" />
            <span
              class="position-absolute left-40 top-50% transform-translate-y--75% color-white"
              style="letter-spacing: 4px"
              >APP超市</span
            >
          </div>
          <div>
            <div class="px-12 py-8">
              <div v-for="item in rtoplist" :key="item.img" class="p-2 flex flex-row color-white items-center">
                <div class="h-16 w-16 mt-2 mr-8 rounded-1 flex-shrink-0">
                  <img :src="getUrl(item.img)" alt="" class="h-full w-full object-cover rounded-1" />
                </div>
                <div>
                  <div class="text-5">{{ item.name }}</div>
                  <div class="text-4 multiline-ellipsis">{{ item.detail }}</div>
                  <!-- <div class="text-3 text-right">查看详情></div> -->
                </div>
              </div>
            </div>
            <div class="flex flex-row px-14 flex-wrap gap-2 py-6">
              <div v-for="item in rbotlist" :key="item.name" class="color-white item">
                <div class="text-5 text-center">{{ item.name }}</div>
                <div class="flex flex-row flex-wrap gap-2">
                  <div v-for="i in item.detailList" :key="i.detail" class="item1 uno-flex-center flex-col">
                    <div class="h-16 w-16 rounded-1 flex-shrink-0 my-4">
                      <img :src="getUrl(i.img)" alt="" class="h-full w-full object-cover rounded-1" />
                    </div>
                    <div class="text-3 text-center">{{ i.detail }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.z-img-h {
  height: 3rem;
  width: 3rem;
}
.circle {
  width: 1.2rem; /* 圆点的宽度 */
  height: 1.2rem; /* 圆点的高度 */
  background-color: rgba(58, 236, 253, 1); /* 圆点的颜色 */
  border-radius: 50%; /* 将元素变为圆形 */
  display: inline-block; /* 保持元素为内联块级，使其可以作为文本中的圆点 */
}
.circle1 {
  border: 2px solid rgba(58, 236, 253, 1);
  width: 1.2rem; /* 圆点的宽度 */
  height: 1.2rem; /* 圆点的高度 */
  background-color: transparent; /* 圆点的颜色 */
  border-radius: 50%; /* 将元素变为圆形 */
  display: inline-block; /* 保持元素为内联块级，使其可以作为文本中的圆点 */
}

.item {
  flex: 1 1 40%; /* 每个元素占 45% 的宽度，确保每行放两个 */
  box-sizing: border-box; /* 确保 padding 和 border 不影响宽度 */
}
.item1 {
  flex: 1 1 45%; /* 每个元素占 45% 的宽度，确保每行放两个 */
  box-sizing: border-box; /* 确保 padding 和 border 不影响宽度 */
}
.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示的最大行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bor {
  box-sizing: border-box;
  /*必须设置border宽度和样式*/
  border-bottom: 2px solid;
  /*设置线性渐变*/
  border-image: linear-gradient(
      180deg,
      rgba(25, 162, 255, 0) 10%,
      rgba(60, 211, 191, 0.6) 50%,
      rgba(25, 162, 255, 0) 90%
    )
    2 2 2 2;
}
.background-image {
  background-image: url("/src/assets/layouts/title.png");
  background-size: contain; /* Ensure the image covers the whole container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center; /* Center the image */
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
}
.sub-bg {
  background-image: url("/src/assets/layouts/subg.png");
  background-size: cover; /* Ensure the image covers the whole container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center; /* Center the image */
  top: 0;
  left: 0;
}
.app-content {
  padding: 12px 4rem 0px 4rem;
  height: auto;
}
.box-bor {
  // margin: 1px;
  border: 2px solid #a4eafd;
  margin: auto;
}
.box-border {
  //   border: 4px solid transparent;
  //   border-radius: 12px;
  //   border-image:
  //   background-origin: border-box;
  //   background-clip: content-box, border-box;
  &.out {
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 1), rgba(0, 234, 255, 1), rgba(109, 186, 236, 0.22));
  }
  > .in {
    height: 100%;
    background: rgba(9, 25, 53, 1);
    border-radius: 10px;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(9, 25, 53, 1);
    border-radius: 12px;
    font-size: 22px;
    z-index: 99;

    &.out {
      border-radius: 10px;
      padding: 1px;
      background: linear-gradient(270deg, rgba(255, 255, 255, 1), rgba(0, 234, 255, 1), rgba(109, 186, 236, 0.22));
    }
    > .in {
      height: 100%;
      padding: 4px 26px;
      background: rgba(9, 25, 53, 1);
      border-radius: 10px;
    }
  }
}
.left-content {
  width: 210px;
  height: 345px;
  border: 1px solid red;
}
</style>
