<template>
  <TwelveTemplate
    :title="'设备联网'"
    :subDetail="'SCADA系统,用于实时监控和控制工业过程中各种设备的自动化控制系统，广泛应用于电力、水务、石油与天然气等行业。它能够收集现场数据、执行远程命令，并通过直观的人机界面为操作员提供决策支持，从而实现对复杂工业过程的有效管理。'"
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
    img: ["61.png", "62.png"],
    textDetail:
      "SCADA（Supervisory Control And Data Acquisition）系统，即监控与数据采集系统，是一种对分散的工业现场设备或生产过程进行集中监视和控制的自动化系统."
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    img: "63.png",
    textDetail:
      "SCADA系统通常采用分布式架构，包括现场设备层、数据采集层、数据传输层、监控层以及管理层。各层级之间通过标准的通信协议集成第三方系统进行数据交互，实现信息的共享和协同工作。"
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    img: ["64.png", "65.png"],
    textDetail: null
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    textDetail: null,
    subList: [
      {
        title: "异常预警",
        img: "66.png"
      },
      {
        title: "MES等边缘系统由SCADA系统转发数据至设备",
        img: "67.png"
      },
      {
        title: "SCADA实时数据采集上报",
        img: "68.png"
      },
      {
        title: "远程监控",
        img: "69.png"
      }
    ]
  }
])
</script>
<style lang="scss" scoped></style>
