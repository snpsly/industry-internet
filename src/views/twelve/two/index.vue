<template>
  <TwelveTemplate
    :title="'经销商平台'"
    :subDetail="'为客户提供高效自主挑选产品的服务，最大限度降低客单获取时间，达到5分钟内即可登记发货，并具备订单跟踪，可实时掌握车间生产进度、物流发货情况，为客户提前备货、紧急要货提供保障'"
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
    img: "6.png",
    textDetail:
      "经销商平台，为客户提供高效自主挑选产品的服务，最大限度降低客单获取时间，达到5分钟内即可登记发货，并具备订单跟踪，可实时掌握车间生产进度、物流发货情况，为客户提前备货、紧急要货提供保障。同时支持全品类个性化定制，满足低压电器在各行各业不同的特殊要求，为公司拓宽拓宽覆盖面。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "7.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "8.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "9.png",
    textDetail:
      "经销商数字化赋能，主要针对线上采购选型、线上退货售后、线上授信管理、WMS扫码扩展、线上财务结算等应用场景，打造高效、透明、完善的一站式管理平台，对采购物流和资金流全过程进行有效的控制和跟踪，实现经销存闭环。"
  },
  {
    label: "使用攻略",
    value: "e",
    index: 5,
    img: "10.png",
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
