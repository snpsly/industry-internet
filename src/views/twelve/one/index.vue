<template>
  <TwelveTemplate
    :title="'供应商平台'"
    :subDetail="'企业与供应商之间建立长期稳定的合作关系，通过优化沟通流程、共同解决问题来提升供应链的整体效率与响应速度。良好的供应商关系有助于降低成本、提高质量并确保供应稳定性。'"
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
    img: "1.png",
    textDetail:
      "SRM系统是供应商关系管理（Supplier Relationship Management）的缩写，旨在通过与供应商建立长期、稳定的合作关系，实现供应链的优化和价值最大化。 SRM的目标是通过有效的供应商管理，提高供应商的绩效和可靠性，降低采购成本，提高采购质量，增强供应链的灵活性和响应能力。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "2.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "3.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "4.png",
    textDetail: null
  },
  {
    label: "使用攻略",
    value: "e",
    index: 5,
    img: "5.png",
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
