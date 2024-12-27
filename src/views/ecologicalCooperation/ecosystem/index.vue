<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref, onMounted, onBeforeUnmount, computed } from "vue"
import { Search } from "@element-plus/icons-vue"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "ecosystem"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/ecologicalCooperation/${imgUrl}`, import.meta.url).href
}

setTheme("normal")
// onMounted(() => {
//   document.querySelector("body")?.setAttribute("style", "background-color: rgba(237, 237, 237, 1)")
// })
// // 页面销毁时清空背景色
// onBeforeUnmount(() => {
//   document.querySelector("body")?.removeAttribute("style")
// })
const input = ref("")
const currentPath = ref(1)
const appList = ref([
  {
    name: "工业用地",
    detail: "乐清市工业用地项目申报平台",
    icon: "1.png",
    path: "https://ysyth.yueqing.gov.cn/gyydxm-front/login",
    state: 2
  },
  {
    name: "企业码",
    detail: "一企一码，企业服务 码通办",
    icon: "2.png",
    path: "https://qymgw.jxt.zj.gov.cn/web/companyDeclare",
    state: 2
  },
  {
    name: "智造荟",
    detail: "智造在线公共服务平台",
    icon: "3.png",
    path: "https://xzz.jxt.zj.gov.cn/computer/web/index",
    state: 2
  },
  {
    name: "惠企直通车",
    detail: "温州市产业政策奖励兑现系統",
    icon: "4.png",
    path: "https://reward.wenzhou.gov.cn/app/apply_list/",
    state: 2
  },
  {
    name: "产业人才服务",
    detail: "乐清市产业人才综合服务平台",
    icon: "5.png",
    path: "",
    state: 2
  },
  {
    name: "共富车间",
    detail: "打造乡村振兴新引擎",
    icon: "6.png",
    path: "",
    state: 2
  },
  {
    name: "智造项目申报",
    detail: "技术创新管理平台",
    icon: "7.png",
    path: "https://www.zhidiancloud.com/user/login",
    state: 2
  },
  {
    name: "亩均论英推",
    detail: '"亩均论英雄"大数据平台',
    icon: "8.png",
    path: "https://yqjxdsjxt.yueqing.gov.cn/gy_mjlyx/Auth/Login.aspx",
    state: 2
  },
  {
    name: "老旧厂房改造",
    detail: "助推老旧工业区块（厂房)政造提升工作",
    icon: "9.png",
    path: "",
    state: 2
  },
  {
    name: "碳均论英雄",
    detail: '"碳均论英雄"大数据平台',
    icon: "10.png",
    path: "https://www.zhidiancloud.com/user/login",
    state: 2
  },
  {
    name: "温州金融服务",
    detail: "温州金融综合服务平台",
    icon: "11.png",
    path: "",
    state: 2
  },
  {
    name: "产业预测预警",
    detail: "产业景气监测、产业上下游监测",
    icon: "12.png",
    path: "",
    state: 2
  },
  {
    name: "产业景气监测",
    detail: "产业景气监测、归因分析、指标监测",
    icon: "13.png",
    path: "",
    state: 2
  },
  {
    name: "浙商银行数智贷",
    detail: " 为企业提供产业大脑数智金融服务 ",
    icon: "3.png",
    path: "",
    state: 3
  },
  {
    name: "智电云学堂",
    detail: " 为企业提供一站式学习服务 ",
    icon: "2.png",
    path: "",
    state: 3
  },
  {
    name: "企业画像",
    detail: " 全面了解企业状况，建立有效企业标签 ",
    icon: "1.png",
    path: "",
    state: 3
  },
  {
    name: "大数据监控决策",
    detail: "  未来工厂监控决策，助力企业数字化转型  ",
    icon: "7.png",
    path: "",
    state: 4
  },
  {
    name: "工业条码",
    detail: "  实现产品追踪溯源，帮助企业获取客户信任，打造品牌影响力  ",
    icon: "8.png",
    path: "",
    state: 4
  }
])
const filterList = computed(() => {
  return currentPath.value === 1 ? appList.value : appList.value.filter((item) => item.state === currentPath.value)
})
const handleSelect = (e: number) => {
  console.log(e)
  currentPath.value = e
  // appList.value = [
  //   {
  //     name: "工业用地",
  //     detail: "乐清市工业用地项目申报平台",
  //     icon: "1.png",
  //     path: "https://ysyth.yueqing.gov.cn/gyydxm-front/login"
  //   },
  //   {
  //     name: "企业码",
  //     detail: "一企一码，企业服务 码通办",
  //     icon: "2.png",
  //     path: "https://qymgw.jxt.zj.gov.cn/web/companyDeclare"
  //   },
  //   {
  //     name: "智造荟",
  //     detail: "智造在线公共服务平台",
  //     icon: "3.png",
  //     path: "https://xzz.jxt.zj.gov.cn/computer/web/index"
  //   },
  //   {
  //     name: "惠企直通车",
  //     detail: "温州市产业政策奖励兑现系統",
  //     icon: "4.png",
  //     path: "https://reward.wenzhou.gov.cn/app/apply_list/"
  //   },
  //   {
  //     name: "产业人才服务",
  //     detail: "乐清市产业人才综合服务平台",
  //     icon: "5.png",
  //     path: ""
  //   },
  //   {
  //     name: "共富车间",
  //     detail: "打造乡村振兴新引擎",
  //     icon: "6.png",
  //     path: ""
  //   },
  //   {
  //     name: "智造项目申报",
  //     detail: "技术创新管理平台",
  //     icon: "7.png",
  //     path: "https://www.zhidiancloud.com/user/login"
  //   },
  //   {
  //     name: "亩均论英推",
  //     detail: '"亩均论英雄"大数据平台',
  //     icon: "8.png",
  //     path: "https://yqjxdsjxt.yueqing.gov.cn/gy_mjlyx/Auth/Login.aspx"
  //   },
  //   {
  //     name: "老旧厂房改造",
  //     detail: "助推老旧工业区块（厂房)政造提升工作",
  //     icon: "9.png",
  //     path: ""
  //   },
  //   {
  //     name: "碳均论英雄",
  //     detail: '"碳均论英雄"大数据平台',
  //     icon: "10.png",
  //     path: "https://www.zhidiancloud.com/user/login"
  //   },
  //   {
  //     name: "温州金融服务",
  //     detail: "温州金融综合服务平台",
  //     icon: "11.png",
  //     path: ""
  //   },
  //   {
  //     name: "产业预测预警",
  //     detail: "产业景气监测、产业上下游监测",
  //     icon: "12.png",
  //     path: ""
  //   },
  //   {
  //     name: "产业景气监测",
  //     detail: "产业景气监测、归因分析、指标监测",
  //     icon: "13.png",
  //     path: ""
  //   }
  // ]
}
const appTypeList = ref([
  {
    id: 1,
    name: "全部应用"
  },
  {
    id: 2,
    name: "政府应用"
  },
  {
    id: 3,
    name: "生态服务"
  },
  {
    id: 4,
    name: "智造服务"
  }
])

const openUrl = (url: string) => {
  url !== "" && window.open(url, "_blank")
}
</script>

<template>
  <div class="px-[152px] pt-20 pb-36">
    <ProjectTitle :title="'生态合作'">
      <div class="ml-auto uno-flex-center">
        <div class="mr-4 w-80">
          <el-input v-model="input" placeholder="请输入名称" />
        </div>
        <el-button type="primary" class="w-20" :icon="Search" @click="handleSelect" />
      </div>
    </ProjectTitle>
    <div class="flex flex-row mt-8">
      <div class="w-64 h-full">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            class="el-menu"
            text-color="#000"
            active-text-color="#fff"
            @select="handleSelect"
            :default-active="currentPath"
          >
            <el-menu-item v-for="item in appTypeList" :key="item.id" :index="item.id">{{ item.name }}</el-menu-item>
          </el-menu></el-scrollbar
        >
      </div>
      <div class="flex-1 flex flex-row flex-wrap ml-4 px-4 pb-4 justify-between bg-[rgba(237,237,237,1)] min-h-[900px]">
        <!-- <div
          class="flex flex-col aspect-ratio-[3/1] w-[32.5%] mt-4 bg-white p-6 rounded-1 cursor-pointer h-40"
          v-for="item in filterList"
          :key="item.icon"
          @click="openUrl(item.path)"
        >
          <div class="flex flex-row items-center">
            <div class="h-10 w-10">
              <img :src="getUrl(item.icon)" alt="" class="h-full w-full object-contain" />
            </div>
            <div class="ml-4">
              {{ item.name }}
            </div>
          </div>
          <div class="mt-4 color-[rgba(148,148,148,1)] text-4">
            {{ item.detail }}
          </div>
        </div>
        <div
          v-if="filterList.length % 3 === 2"
          :class="['flex flex-row max-w-[400px] aspect-ratio-[3/1] w-[30%] mb-8 ']"
        /> -->
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
</style>
