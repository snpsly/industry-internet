<template>
  <TwelveTemplate
    :title="'API服务'"
    :subDetail="'帮助组织方便快速地实现数据、应用、服务间的灵活流转与敏捷集成'"
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
    img: "70.png",
    textDetail: `“数聚蜂巢”iPaaS 平台，旨在帮助组织方便快速地实现数据、应用、服务
间的灵活流转与敏捷集成。中台基于 API 化解耦、微服务化、能力化的三层架构
设计理念，帮助企业方便快速地实现数据、应用、服务间的灵活流转与敏捷集成，
赋能企业技术创新与数字化转型，提升用户体验，助力业务创新。`
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "71.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "72.png",
    textDetail: `数聚蜂巢 iPaaS 平台主要由设计中心、管理中心、监控中
心、运行时、以及开放和共享中心组成。`
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "73.png",
    textDetail: null
  },
  {
    label: "使用攻略",
    value: "e",
    index: 5,
    img: "74.png",
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
