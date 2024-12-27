<template>
  <TwelveTemplate
    :title="'MOM/MES系统'"
    :subDetail="'以建设终端微断智能工厂为目标，对公司全业务流程进行顶层规划，利用自动化、数字化、信息化、物联网等新兴技术，重点完成制造过程信息化、智能物流等内容。'"
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
    img: ["32.png", "33.png"],
    textDetail:
      "天正电气MOM系统以建设终端微断智能工厂为目标，对公司全业务流程进行顶层规划，利用自动化、数字化、信息化、物联网等新兴技术，重点完成制造过程信息化、智能物流等内容。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: null,
    textDetail: null,
    subList: [
      {
        title: "业务架构",
        img: "34.png"
      },
      {
        title: "IT集成架构",
        img: "35.png"
      },
      {
        title: "服务器部署架构",
        img: "36.png"
      }
    ]
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "37.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: null,
    textDetail: null,
    subList: [
      {
        title: "工单管理",
        img: "38.png"
      },
      {
        title: "仓储物流管理",
        img: "39.png"
      },
      {
        title: "生产执行",
        img: "40.png"
      },
      {
        title: "质量管理",
        img: "41.png"
      },
      {
        title: "设备管理",
        img: "42.png"
      }
    ]
  },
  {
    label: "竞争力优势",
    value: "e",
    index: 5,
    img: "43.png",
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
