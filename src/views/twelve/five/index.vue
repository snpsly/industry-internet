<template>
  <TwelveTemplate
    :title="'质量系统'"
    :subDetail="'用信息技术和数据分析手段，将质量控制流程转化为数字形式，实现更精准的质量监测与管理。通过实时数据收集与分析，企业能够快速识别问题、改进生产过程，并持续提升产品质量和服务水平。'"
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
    img: "24.png",
    textDetail: null
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "25.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "26.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "27.png",
    textDetail:
      "QMS质量管理系统，主要应用在供应商来料质量检验、制造过程质量检验、成品完工质量检验、物流出货质量检验，全面提升公司质量管理标准化水平，助力产品质量持续提升。"
  },
  {
    label: "使用攻略",
    value: "e",
    index: 5,
    img: ["28.png", "29.png", "30.png", "31.png"],
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
