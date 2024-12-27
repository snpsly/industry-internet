<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Search } from "@element-plus/icons-vue"
import type { TabsPaneContext } from "element-plus"
const { setTheme } = useTheme()
const router = useRouter()
defineOptions({
  // 命名当前组件
  name: "intellSolution"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/${imgUrl}`, import.meta.url).href
}

const workoutList = [
  {
    name: "sssssssssssssss/44444.png"
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
const sfList = [
  {
    name: "sssssssssssssss/a1.png",
    title: "设备互联"
  },
  {
    name: "sssssssssssssss/a2.png",
    title: "场景赋能"
  },
  {
    name: "sssssssssssssss/a3.png",
    title: "工厂管理"
  },
  {
    name: "sssssssssssssss/a4.png",
    title: "园区管控"
  },
  {
    name: "sssssssssssssss/a5.png",
    title: "企业服务"
  }
]
const sfList1 = [
  {
    name: "sssssssssssssss/a1.png",
    title: "供：经销商平台能力",
    subList: [
      {
        title: "供应商平台",
        path: "/twelve/one"
      },
      {
        title: "经销商平台",
        path: "/twelve/two"
      }
    ]
  },
  {
    name: "sssssssssssssss/a2.png",
    title: "研：产品研发",
    subList: [
      {
        title: "APS产品",
        path: "/twelve/three"
      }
      // {
      //   title: "CRM系统",
      //   path: "/twelve/three"
      // }
    ]
  },
  {
    name: "sssssssssssssss/a3.png",
    title: "产：生产、质量系统",
    subList: [
      {
        title: "智能仓储",
        path: "/twelve/four"
      },
      {
        title: "质量系统",
        path: "/twelve/five"
      },
      {
        title: "MOM/MES系统",
        path: "/twelve/six"
      },
      {
        title: "能源管理系统",
        path: "/twelve/seven"
      },
      {
        title: "设备管理系统",
        path: "/twelve/eight"
      }
    ]
  },
  {
    name: "sssssssssssssss/a4.png",
    title: "销：经销商平台能力",
    subList: [
      {
        title: "设备联网",
        path: "/twelve/nine"
      }
    ]
  },
  {
    name: "sssssssssssssss/a5.png",
    title: "服：产品、方案、咨询、数据服务能力",
    subList: [
      {
        title: "API服务",
        path: "/twelve/ten"
      },
      {
        title: "园区服务",
        path: "/twelve/eleven"
      }
    ]
  }
]
setTheme("normal")

const activeName = ref("first")

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const goPush = (e) => {
  router.push(e)
}
const img = ref("sssssssssssssss/sss.png")
const oneList = ref([
  {
    title: "产品数字化研发与设计",
    path: "/thirteen/one"
  },
  {
    title: "数字孪生工厂运营优化",
    path: "/thirteen/four"
  },
  {
    title: "天正5G全连接工厂",
    path: "/thirteen/five"
  }
])
const twoList = ref([
  {
    title: "MTO/MTS混合生产模式的智能排产管理应用",
    path: "/thirteen/three"
  },
  {
    title: "产线自动化“一键换型”柔性生产",
    path: "/thirteen/seven"
  },
  {
    title: "质量追溯与分析改进",
    path: "/thirteen/twelve"
  },
  {
    title: "设备运行监控",
    path: "/thirteen/thirteen"
  }
])
const threeList = ref([
  {
    title: "智慧能源综合管理平台",
    path: "/thirteen/six"
  },
  {
    title: "基于数字化的精益生产管理",
    path: "/thirteen/eight"
  },
  {
    title: "应对复杂订单需求下的智慧物流系统解决方案",
    path: "/thirteen/nine"
  }
])
const fourList = ref([
  {
    title: "面向多品种、小批量产品定制订单的供应链协同平台",
    path: "/thirteen/two"
  },
  {
    title: "制造业服务化融合发展模式",
    path: "/thirteen/ten"
  },
  {
    title: "基于数据驱动的采购策略优化",
    path: "/thirteen/eleven"
  }
])
</script>

<template>
  <!-- <div class="w-full h-96">
    <img :src="getUrl(workoutList[0].name)" alt="" class="w-full h-full object-cover" />
  </div>
  <div class="py-10 uno-flex-center flex-col">
    <span class="font-600 text-3xl mb-10">提供更可靠的行业数字化服务</span>
    <div class="flex flex-row w justify-between">
      <div v-for="item in sfList" :key="item.name" class="f">
        <div class="w-full relative">
          <img :src="getUrl(item.name)" alt="" class="w-full" />
          <div class="absolute top-10 left-10 t uno-Basics-text-color">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-10 uno-flex-center flex-col">
    <span class="font-600 text-3xl mb-10">覆盖多场景的行业解决方案</span>
    <div class="flex flex-row w flex-wrap fff">
      <div v-for="item in sfList1" :key="item.name" class="w-33% ffff">
        <div class="ff p-4">{{ item.title }}</div>
        <div class="h-50">
          <template v-if="item.subList">
            <div
              v-for="i in item.subList"
              :key="i.title"
              @click="goPush(i.path)"
              class="text-4 pl-4 mt-4 cursor-pointer"
            >
              {{ i.title }} >
            </div>
          </template>
        </div>
      </div>
    </div>
  </div> -->
  <div class="page flex-col">
    <div class="box_1 flex-row">
      <div class="group_1 flex-col">
        <div class="w-full h-96">
          <img :src="getUrl(workoutList[0].name)" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="section_2 flex-row justify-between">
          <div class="box_2 flex-col" />
          <span class="text_11">覆盖多场景的行业解决方案</span>
        </div>
        <div class="section_3 flex-row justify-between">
          <div class="block_1 flex-col">
            <div class="text-wrapper_2 flex-col mb-10">
              <span class="text_12">研发设计</span>
            </div>
            <div
              class="uno-flex-center cursor-pointer mb-10"
              v-for="item in oneList"
              :key="item.title"
              @click="goPush(item.path)"
            >
              <span class="w-80% ellipsis">{{ item.title }}</span>
            </div>
          </div>
          <div class="block_2 flex-col">
            <div class="text-wrapper_3 flex-col mb-10">
              <span class="text_13">生产作业</span>
            </div>
            <div
              class="uno-flex-center cursor-pointer mb-10"
              v-for="item in twoList"
              :key="item.title"
              @click="goPush(item.path)"
            >
              <span class="w-80% ellipsis">{{ item.title }}</span>
            </div>
          </div>
          <div class="block_3 flex-col">
            <div class="text-wrapper_4 flex-col">
              <span class="text_14">生产管理</span>
            </div>
            <div
              class="uno-flex-center cursor-pointer mt-10"
              v-for="item in threeList"
              :key="item.title"
              @click="goPush(item.path)"
            >
              <span class="w-80% ellipsis">{{ item.title }}</span>
            </div>
          </div>
          <div class="block_4 flex-col">
            <div class="text-wrapper_5 flex-col">
              <span class="text_15">运营管理</span>
            </div>
            <div
              class="uno-flex-center cursor-pointer mt-10"
              v-for="item in fourList"
              :key="item.title"
              @click="goPush(item.path)"
            >
              <span class="w-80% ellipsis">{{ item.title }}</span>
            </div>
          </div>
          <!-- <div class="block_5 flex-col">
            <div class="text-wrapper_6 flex-col">
              <span class="text_16">企业服务</span>
            </div>
          </div> -->
        </div>
        <div class="section_4 flex-row justify-between">
          <div class="group_2 flex-col" />
          <span class="text_17">提供更可靠的行业数字化服务</span>
        </div>
        <div class="section_5 flex-row">
          <div class="section_6 flex-row cursor-pointer" @click="goPush('/twelve/three')">
            <div class="box_3 flex-col" />
            <span class="text_18">APS产品</span>
          </div>
          <div class="section_7 flex-row cursor-pointer" @click="goPush('/twelve/four')">
            <div class="group_3 flex-col" />
            <span class="text_19">智能仓储</span>
          </div>
          <div class="section_8 flex-row cursor-pointer" @click="goPush('/twelve/nine')">
            <div class="group_4 flex-col" />
            <span class="text_20">设备联网</span>
          </div>
          <div class="section_9 flex-row cursor-pointer" @click="goPush('/twelve/seven')">
            <div class="image-text_1 flex-row justify-between">
              <div class="group_5 flex-col" />
              <span class="text-group_1">能源管理系统</span>
            </div>
          </div>
        </div>
        <div class="grid_1 flex-row">
          <div class="section_10 flex-row cursor-pointer" @click="goPush('/twelve/ten')">
            <div class="box_4 flex-col" />
            <span class="text_21">API服务</span>
          </div>
          <div class="section_11 flex-row cursor-pointer" @click="goPush('/twelve/five')">
            <div class="box_5 flex-col" />
            <span class="text_22">质量系统</span>
          </div>
          <div class="section_12 flex-row cursor-pointer" @click="goPush('/twelve/six')">
            <div class="box_6 flex-col" />
            <span class="text_23">MOM/MES系统</span>
          </div>
          <div class="image-text_2 flex-row cursor-pointer" @click="goPush('/twelve/eight')">
            <div class="group_6 flex-col" />
            <span class="text-group_2">设备管理系统</span>
          </div>
          <div class="section_13 flex-row cursor-pointer" @click="goPush('/twelve/eleven')">
            <div class="section_14 flex-col" />
            <span class="text_24">园区服务</span>
          </div>
          <div class="image-text_3 flex-row cursor-pointer" @click="goPush('/twelve/two')">
            <div class="box_7 flex-col" />
            <span class="text-group_3">经销商平台</span>
          </div>
          <div class="section_15 flex-row cursor-pointer" @click="goPush('/twelve/one')">
            <div class="group_7 flex-col" />
            <span class="text_25">供应商平台</span>
          </div>
        </div>
        <div class="section_16 flex-row justify-between">
          <div class="group_8 flex-col" />
          <span class="text_26">服务高价值客户的典型案例</span>
        </div>

        <!-- <div class="section_17 flex-row justify-between" @click="goPush('/twelve/three')">
          <div class="box_8 flex-col" />
          <span class="text_31">服务高价值客户的典型案例</span>
        </div> -->
        <img class="image_4" referrerpolicy="no-referrer" :src="getUrl(img)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tabs__nav-wrap:after) {
  display: none !important;
  height: 0;
}
:deep(.el-tabs__nav-scroll) {
  text-align: center;
  display: flex;
  justify-content: center;
  border: none;
}
.ffff {
  border-left: 1px solid #e9f0f7;
}
.fff {
  box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.1);
}
.ff {
  background: linear-gradient(124deg, #eef7ff, #fcfeff 87%);
  font-size: 16px;
  font-weight: 700;
}
.w {
  width: 1280px;
}
.f {
  box-shadow: 0 -4px 6px 0 rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 357px;
}
.t {
  font-size: 18px;
  font-weight: 700;
  color: rgba(11, 165, 150, 1);
}
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
.ellipsis {
  white-space: nowrap; /* 确保文本在一行内显示 */
  overflow: hidden; /* 隐藏超出容器的文本 */
  text-overflow: ellipsis; /* 使用省略符号表示文本被截断 */
}
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100vw;
  height: 159.02vw;
  overflow: hidden;
  .box_1 {
    width: 100vw;
    height: 159.02vw;
    .group_1 {
      position: relative;
      width: 100vw;
      height: 154.64vw;
      .section_1 {
        width: 96.05vw;
        height: 2.71vw;
        margin: 0.83vw 0 0 2.55vw;
        .image_1 {
          width: 7.04vw;
          height: 2.35vw;
        }
        .text_1 {
          width: 16.46vw;
          height: 1.67vw;
          overflow-wrap: break-word;
          color: rgba(22, 179, 167, 1);
          font-size: 1.4vw;
          letter-spacing: 4.401275634765625px;
          font-family: Kingsoft_Cloud_Font;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.93vw;
          margin: 0.31vw 0 0 0.78vw;
        }
        .text_2 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 15.62vw;
        }
        .text_3 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_4 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_5 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_6 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_7 {
          width: 2.82vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 4.27vw;
        }
        .text_8 {
          width: 2.82vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.18vw;
        }
        .text_9 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 1.66vw;
        }
        .text-wrapper_1 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 8px;
          height: 2.66vw;
          width: 7.04vw;
          margin: 0.05vw 0 0 1.82vw;
          .text_10 {
            width: 1.88vw;
            height: 1.31vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 0.93vw;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: right;
            white-space: nowrap;
            line-height: 1.31vw;
            margin: 0.67vw 0 0 2.55vw;
          }
        }
      }
      .image_2 {
        width: 100vw;
        height: 14.54vw;
        margin-top: 1.1vw;
      }
      .section_2 {
        width: 35.47vw;
        height: 3.08vw;
        margin: 4.06vw 0 0 31.82vw;
        .box_2 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 0.99vw;
        }
        .text_11 {
          width: 33.13vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .section_3 {
        width: 83.6vw;
        height: 30.84vw;
        margin: 3.12vw 0 0 8.12vw;
        .block_1 {
          box-shadow: 0px -2px 9px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          height: 24.84vw;
          width: 15.37vw;
          .text-wrapper_2 {
            height: 10.42vw;
            background: url("/src/assets/sssssssssssssss/a1.png") -0.06vw 0vw no-repeat;
            background-size: 14.94vw 10.46vw;
            margin-top: 0.06vw;
            width: 14.9vw;
            .text_12 {
              width: 5.84vw;
              height: 1.72vw;
              overflow-wrap: break-word;
              color: rgba(38, 168, 146, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              white-space: nowrap;
              line-height: 1.72vw;
              margin: 3.48vw 0 0 1.82vw;
            }
          }
        }
        .block_2 {
          box-shadow: 0px -2px 9px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          height: 24.84vw;
          margin-left: 1.67vw;
          width: 15.37vw;
          .text-wrapper_3 {
            height: 10.42vw;
            background: url("/src/assets/sssssssssssssss/a2.png") -0.06vw 0vw no-repeat;
            background-size: 14.94vw 10.46vw;
            width: 14.9vw;
            margin: 0.05vw 0 10px 0.1vw;
            .text_13 {
              width: 5.84vw;
              height: 1.72vw;
              overflow-wrap: break-word;
              color: rgba(38, 168, 146, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              white-space: nowrap;
              line-height: 1.72vw;
              margin: 3.48vw 0 0 0.93vw;
            }
          }
        }
        .block_3 {
          box-shadow: 0px -2px 9px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          height: 24.84vw;
          margin-left: 1.72vw;
          width: 15.37vw;
          .text-wrapper_4 {
            height: 10.42vw;
            background: url("/src/assets/sssssssssssssss/a3.png") -0.06vw 0vw no-repeat;
            background-size: 14.94vw 10.46vw;
            width: 14.9vw;
            margin: 0.05vw 0 0 0.15vw;
            .text_14 {
              width: 5.84vw;
              height: 1.72vw;
              overflow-wrap: break-word;
              color: rgba(38, 168, 146, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              white-space: nowrap;
              line-height: 1.72vw;
              margin: 3.48vw 0 0 1.3vw;
            }
          }
        }
        .block_4 {
          box-shadow: 0px -2px 9px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          height: 24.84vw;
          margin-left: 1.67vw;
          width: 15.37vw;
          .text-wrapper_5 {
            height: 10.42vw;
            background: url("/src/assets/sssssssssssssss/a4.png") -0.06vw 0vw no-repeat;
            background-size: 14.94vw 10.46vw;
            width: 14.9vw;
            margin: 0.05vw 0 0 0.26vw;
            .text_15 {
              width: 5.84vw;
              height: 1.72vw;
              overflow-wrap: break-word;
              color: rgba(38, 168, 146, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              white-space: nowrap;
              line-height: 1.72vw;
              margin: 3.48vw 0 0 1.25vw;
            }
          }
        }
        .block_5 {
          box-shadow: 0px -2px 9px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          height: 30.84vw;
          margin-left: 1.72vw;
          width: 15.37vw;
          .text-wrapper_6 {
            height: 10.42vw;
            background: url("/src/assets/sssssssssssssss/a5.png") -0.06vw 0vw no-repeat;
            background-size: 14.94vw 10.46vw;
            width: 14.9vw;
            margin: 0.05vw 0 0 0.31vw;
            .text_16 {
              width: 5.84vw;
              height: 1.72vw;
              overflow-wrap: break-word;
              color: rgba(38, 168, 146, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              white-space: nowrap;
              line-height: 1.72vw;
              margin: 3.48vw 0 0 1.61vw;
            }
          }
        }
      }
      .section_4 {
        width: 32.92vw;
        height: 3.08vw;
        margin: 2.65vw 0 0 33.48vw;
        .group_2 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 0.99vw;
        }
        .text_17 {
          width: 30.58vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .section_5 {
        width: 87.4vw;
        height: 6.88vw;
        margin: 3.12vw 0 0 6.3vw;
        .section_6 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          .box_3 {
            width: 3.39vw;
            height: 3.75vw;
            background: url("/src/assets/1126/1.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.56vw 0 0 2.96vw;
          }
          .text_18 {
            width: 5.42vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 7.18vw 0 1.87vw;
          }
        }
        .section_7 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin-left: 1.2vw;
          .group_3 {
            width: 4.17vw;
            height: 4.17vw;
            background: url("/src/assets/1126/2.png") 0vw 0vw no-repeat;
            background-size: 4.21vw 4.11vw;
            margin: 1.35vw 0 0 3.33vw;
          }
          .text_19 {
            width: 5.84vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 6.19vw 0 1.3vw;
          }
        }
        .section_8 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin-left: 1.15vw;
          .group_4 {
            width: 3.81vw;
            height: 3.75vw;
            background: url("/src/assets/1126/3.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.56vw 0 0 2.81vw;
          }
          .text_20 {
            width: 5.84vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 6.35vw 0 2.03vw;
          }
        }
        .section_9 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin-left: 1.72vw;
          .image-text_1 {
            width: 14.02vw;
            height: 4.17vw;
            margin: 1.35vw 0 0 3.8vw;
            .group_5 {
              width: 4.17vw;
              height: 4.17vw;
              background: url("/src/assets/1126/4.png") 0.11vw 0vw no-repeat;
              background-size: 3.95vw 4.21vw;
            }
            .text-group_1 {
              width: 8.75vw;
              height: 1.25vw;
              overflow-wrap: break-word;
              color: rgba(57, 53, 53, 0.85);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: DFSongW9-GB;
              font-weight: normal;
              text-align: left;
              white-space: nowrap;
              line-height: 1.25vw;
              margin-top: 1.46vw;
            }
          }
        }
      }
      .grid_1 {
        width: 87.4vw;
        height: 15.06vw;
        flex-wrap: wrap;
        margin: 1.92vw 0 0 6.3vw;
        .section_10 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin: 0 1.19vw 1.3vw 0;
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:nth-last-child(-n + 3) {
            margin-bottom: 0;
          }
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:nth-last-child(-n + 3) {
            margin-bottom: 0;
          }
          .box_4 {
            width: 3.29vw;
            height: 3.29vw;
            background: url("/src/assets/1126/5.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.82vw 0 0 3.02vw;
          }
          .text_21 {
            width: 5.42vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 6.92vw 0 2.18vw;
          }
        }
        .section_11 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin: 0 1.14vw 1.3vw 0;
          .box_5 {
            width: 3.75vw;
            height: 3.81vw;
            background: url("/src/assets/1126/6.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.56vw 0 0 3.07vw;
          }
          .text_22 {
            width: 5.84vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 6.19vw 0 1.97vw;
          }
        }
        .section_12 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin: 0 1.71vw 1.3vw 0;
          .box_6 {
            width: 3.23vw;
            height: 3.23vw;
            background: url("/src/assets/1126/7.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.87vw 0 0 3.17vw;
          }
          .text_23 {
            width: 8.75vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 4.21vw 0 1.45vw;
          }
        }
        .image-text_2 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin-bottom: 1.31vw;
          .group_6 {
            width: 4.17vw;
            height: 4.17vw;
            background: url("/src/assets/1126/8.png") 0vw 0vw no-repeat;
            background-size: 3.8vw 4.21vw;
            margin: 1.35vw 0 0 4.06vw;
          }
          .text-group_2 {
            width: 8.75vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.81vw 3.02vw 0 0.83vw;
          }
        }
        .section_13 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin: 0 1.19vw 1.3vw 0;
          .section_14 {
            width: 3.81vw;
            height: 3.81vw;
            background: url("/src/assets/1126/9.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.3vw 0 0 2.76vw;
          }
          .text_24 {
            width: 5.84vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.55vw 6.66vw 0 1.77vw;
          }
        }
        .image-text_3 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin: 0 1.14vw 1.3vw 0;
          .box_7 {
            width: 3.91vw;
            height: 3.7vw;
            background: url("/src/assets/1126/10.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.35vw 0 0 3.12vw;
          }
          .text-group_3 {
            width: 7.3vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.55vw 5.46vw 0 1.04vw;
          }
        }
        .section_15 {
          box-shadow: -2px 0px 6px 0px rgba(153, 149, 149, 0.61);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 9px;
          width: 20.84vw;
          height: 6.88vw;
          margin-bottom: 1.31vw;
          .group_7 {
            width: 3.81vw;
            height: 3.81vw;
            background: url("/src/assets/1126/11.png") 100% no-repeat;
            background-size: 100% 100%;
            margin: 1.3vw 0 0 2.81vw;
          }
          .text_25 {
            width: 7.3vw;
            height: 1.25vw;
            overflow-wrap: break-word;
            color: rgba(57, 53, 53, 0.85);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: DFSongW9-GB;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 1.25vw;
            margin: 2.55vw 4.89vw 0 2.03vw;
          }
        }
      }
      .section_16 {
        width: 32.92vw;
        height: 3.08vw;
        margin: 2.86vw 0 0 33.48vw;
        .group_8 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 0.99vw;
        }
        .text_26 {
          width: 30.58vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .text-wrapper_7 {
        width: 43.55vw;
        height: 1.72vw;
        margin: 3.12vw 0 0 26.3vw;
        .text_27 {
          width: 7.3vw;
          height: 1.72vw;
          overflow-wrap: break-word;
          color: rgba(38, 168, 146, 1);
          font-size: 1.25vw;
          letter-spacing: 3.9122447967529297px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          line-height: 1.72vw;
        }
        .text_28 {
          width: 7.3vw;
          height: 1.72vw;
          overflow-wrap: break-word;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.25vw;
          letter-spacing: 3.9122447967529297px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          line-height: 1.72vw;
          margin-left: 4.8vw;
        }
        .text_29 {
          width: 7.3vw;
          height: 1.72vw;
          overflow-wrap: break-word;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.25vw;
          letter-spacing: 3.9122447967529297px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          line-height: 1.72vw;
          margin-left: 4.8vw;
        }
        .text_30 {
          width: 7.3vw;
          height: 1.72vw;
          overflow-wrap: break-word;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.25vw;
          letter-spacing: 3.9122447967529297px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          line-height: 1.72vw;
          margin-left: 4.8vw;
        }
      }
      .image_3 {
        width: 8.96vw;
        height: 0.06vw;
        margin: 0.67vw 0 0 25.46vw;
      }
      .section_17 {
        width: 32.92vw;
        height: 3.08vw;
        margin: 12.65vw 0 34.42vw 34.06vw;
        .box_8 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 0.99vw;
        }
        .text_31 {
          width: 30.58vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .image_4 {
        position: absolute;
        left: 11.1vw;
        top: 107.56vw;
        width: 76.72vw;
        height: 44.59vw;
      }
    }
    .text-wrapper_8 {
      background-color: rgba(17, 17, 17, 0.97);
      width: 100vw;
      height: 4.43vw;
      margin: 154.58vw 0 0 -100vw;
      .text_32 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 26.35vw;
      }
      .text_33 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_34 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_35 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_36 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_37 {
        width: 2.82vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 4.27vw;
      }
      .text_38 {
        width: 2.82vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.18vw;
      }
      .text_39 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 1.66vw;
      }
      .text_40 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 5.46vw;
      }
      .text_41 {
        width: 12.04vw;
        height: 2.35vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 1.66vw;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        text-align: right;
        white-space: nowrap;
        line-height: 2.35vw;
        margin: 0.78vw 4.21vw 0 0.88vw;
      }
    }
  }
}
body * {
  box-sizing: border-box;
  flex-shrink: 0;
}
body {
  font-family:
    PingFangSC-Regular,
    Roboto,
    Helvetica Neue,
    Helvetica,
    Tahoma,
    Arial,
    PingFang SC-Light,
    Microsoft YaHei;
}
input {
  background-color: transparent;
  border: 0;
}
button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
}

button:active {
  opacity: 0.6;
}
.van-nav-bar__left:active,
.van-nav-bar__right:active {
  opacity: 1;
}
[class*="van-"]::after {
  border-bottom: 0;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.justify-start {
  display: flex;
  justify-content: flex-start;
}
.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}
.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}
.justify-around {
  display: flex;
  justify-content: space-around;
}
.justify-between {
  display: flex;
  justify-content: space-between;
}
.align-start {
  display: flex;
  align-items: flex-start;
}
.align-center {
  display: flex;
  align-items: center;
}
.align-end {
  display: flex;
  align-items: flex-end;
}
</style>
