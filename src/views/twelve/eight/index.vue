<template>
  <TwelveTemplate
    :title="'设备管理系统'"
    :subDetail="'集成化平台对企业的固定资产、流动资产等进行全面跟踪和管理，确保资产的有效利用与安全。它支持从采购到报废的全生命周期管理，帮助企业提高资产管理效率，同时降低运营成本和风险。'"
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
    img: ["53.png", "54.png"],
    textDetail:
      "EAM系统，即企业资产管理系统(EnterpriseAsset Management)是有效地管理其资产并最大化资产价值的综合管理系统。EAM系统通过现代信息技术手段，涵盖了从资产采购、使用和维护到报废处理的全过程，实现了对企业资产的全生命周期管理。其目的在于提高资产的利用率，降低维护成本，增强企业的竞争力和经济效益。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "55.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "56.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: ["57.png", "58.png", "59.png", "60.png"],
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
