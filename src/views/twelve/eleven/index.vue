<template>
  <TwelveTemplate
    :title="'园区服务'"
    :subDetail="'集成物联网、大数据、云计算等先进技术，为园区提供智能化管理和服务解决方案，包括安全监控、环境监测、能源管理等方面，以提升园区运营效率及入驻企业的工作生活体验。它还支持智能导航、在线缴费等多种便捷功能，促进了信息交流与资源共享，助力构建更加绿色、高效、舒适的现代产业园区。'"
    :menu-list="list"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue"
import TwelveTemplate from "@/components/TwelveTemplate/index.vue"
const list = ref([
  {
    label: "快速了解",
    value: "a",
    index: 1,
    img: ["75.png"],
    textDetail: `智慧园区服务是现代科技与传统园区管理相结合的产物，具备迅捷信息采
集、高速信息传输、高度集中计算、智能事务处理能力，利用物联网、云计算、大数据等现代信息技术手段，对园区内的人员、物资、设备、环境等进行全面的智能化管理和优化，以提升园区的整体运营效率和服务质量。`
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "76.png"
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "77.png",
    subList: [
      {
        title:
          "1.智能安防监控：高清摄像头网络覆盖园区，24小时不间断监控，通过人脸、指纹、车辆识别等先进技术，实现园区出入口智能化管理",
        img: "78.png"
      },
      {
        title: "2.智慧能源管理：实时采集和分析园区内各类设备的能耗数据，调整能源供应，预测并提前发现能源设备潜在故障；",
        img: "79.png"
      },
      {
        title: "",
        img: "80.png"
      },
      {
        title:
          "3.数据整合与分析：整合园区内各类设备、系统的数据，形成统一的数据仓库，利用数据算法对园区数据进行深度挖掘和分析，为园区管理者提供数据驱动的决策支持，提升园区的运营效率和服务质量",
        img: "81.png"
      },
      {
        title: "",
        img: "82.png"
      },
      {
        title:
          "4.智慧办公与协同：通过申请预约、远程协作等技术，提高会议室使用效率，支持手机、平板等移动设备接入。为团队及个人提供信息共享、任务分配、进度跟踪等协同服务；",
        img: null
      }
    ]
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    textDetail:
      "智慧园区通过集成现代信息技术，实现了办公、安防、车辆、能源、生产、物流管理等多个场景的智能化管理与服务，提升了园区的整体运营效率与用户体验。",
    img: ["83.png", "84.png", "85.png"]
  }
])
</script>
<style lang="scss" scoped></style>
