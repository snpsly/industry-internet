<template>
  <TwelveTemplate
    :title="'APS产品'"
    :subDetail="'先进规划排程系统是一种利用高级算法和技术来优化生产流程、资源分配以及时间安排的解决方案，旨在提高效率、减少浪费。它帮助企业实现更灵活且高效的生产计划，以更好地应对市场需求变化和不确定性。'"
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
    img: "11.png",
    textDetail:
      "APS系统是先进规划排程系统（Advanced Planning & Scheduling System）的缩写，是一种以系统模拟或数理规划等方式填写甘特图，利用先进的规划管理技术，包括限制理论、作业研究、基因演算法、限制条件满足技术等；追求供给与需求间的平衡规划，利用资讯的储存与分析能力，以最短的期限，达到最有效的规划。"
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "12.png",
    textDetail: null
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: "13.png",
    textDetail: `APS系统的核心功能主要包括：
1）销售预测管理：利用历史数据和市场趋势，对未来的需求进行预测，提前规划生产，避免因需求波动造成的生产瓶颈。
2）自动派工管理：提供自动和手动的高级图形化排产功能，按交货期、计划优先级、生产周期自动计算排产。
3）采购预测管理：根据实时库存情况进行采购需求的动态调整，避免供需失衡，减少库存积压和生产中断，提高企业运营效率。
4）工单齐套管理：通过实时监控库存信息和精细化管理物料需求，动态调整生产资源配置，实时响应生产数据的变化和订单的变动。`
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    img: "14.png",
    textDetail:
      "APS用途广泛，在离散型制造业中，可以实现工序顺序的科学安排，优化生产排程，确保物料的及时供应，提高生产效率和产品质量，降低成本，提升企业竞争力。"
  },
  {
    label: "使用攻略",
    value: "e",
    index: 5,
    img: "15.png",
    textDetail: null
  }
])
</script>
<style lang="scss" scoped></style>
