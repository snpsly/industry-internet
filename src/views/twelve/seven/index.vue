<template>
  <TwelveTemplate
    :title="'能源管理系统'"
    :subDetail="'利用先进的信息技术来监控、分析和优化企业或建筑内能源消耗的解决方案，帮助用户降低能耗、节约成本并减少环境影响。通过实时数据收集与智能分析，该系统能够识别节能潜力、制定有效的能源使用策略，并支持可持续发展目标。'"
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
    img: ["44.png", "45.png"],
    textDetail:
      "能源管理系统（EMS）是一种信息化管控系统，旨在帮助工业生产企业在扩大生产的同时，合理计划和利用能源，降低单位产品能源消耗，提高经济效益，并降低CO2排放量。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: ["46.png", "47.png", "48.png"],
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "49.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "50.png",
    textDetail: null,
    subList: [
      {
        title: "苏吕园区",
        img: "51.png"
      },
      {
        title: "盐盘园区",
        img: "52.png"
      }
    ]
  }
])
</script>
<style lang="scss" scoped></style>
