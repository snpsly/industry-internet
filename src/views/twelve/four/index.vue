<template>
  <TwelveTemplate
    :title="'智能仓储'"
    :subDetail="'智能仓储管理系统通过集成自动化设备、物联网技术和数据分析，实现了仓库内物品的高效存储、拣选与配送。该系统不仅提升了作业效率和准确性，还大大降低了运营成本，并有助于库存优化管理。'"
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
    img: "16.png",
    textDetail:
      "智能仓储管理系统，通过建立信息化、自动化与智能化的仓储物流系统，使成品仓储、拣选及发运各环节高效运转，建设包括托盘立体仓储系统、箱式立体仓储系统、自动拆托拣选系统、货到人拣选系统、复核包装及分拣系统、平库仓储系统，实现产品生产下线后入库、仓储、拣选、分拣与发运，同时将信息系统与自动化物流设备有机结合，实现全流程的自动化与智能化，定位高端，完成天正仓储物流的自动化、智能化的整体建设目标。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "17.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "18.png",
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "19.png",
    textDetail: null
  },
  {
    label: "使用攻略",
    value: "e",
    index: 5,
    img: ["20.png", "21.png", "22.png", "23.png"],
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
