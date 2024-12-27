<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, reactive } from "vue"
import { use } from "echarts/core"
import { PieChart } from "echarts/charts"
import { TooltipComponent, LegendComponent } from "echarts/components"
import { CanvasRenderer } from "echarts/renderers"
import type { ComposeOption } from "echarts/core"
import type { PieSeriesOption } from "echarts/charts"
import type { TooltipComponentOption, LegendComponentOption } from "echarts/components"
import axios from "axios"
import { sha1 } from "js-sha1"
use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

type EChartsOption = ComposeOption<TooltipComponentOption | LegendComponentOption | PieSeriesOption>

import { Search, Refresh } from "@element-plus/icons-vue"
defineOptions({
  // 命名当前组件
  name: "userCase"
})

// 设置页面背景颜色
onMounted(() => {
  document.querySelector("body")?.setAttribute("style", "background-color: rgba(237, 237, 237, 1)")
})
// 页面销毁时清空背景色
onBeforeUnmount(() => {
  document.querySelector("body")?.removeAttribute("style")
})
const loading = ref<boolean>(false)
const searchData = reactive({
  username: "",
  phone: ""
})
const handleSearch = () => {}
const resetSearch = () => {}
const dataList = ref([])
// const config = {
//   method: "post",
//   url: "http://zg-yzkj.com:27923/login", // 目标URL
//   headers: {
//     "Content-Type": "application/json" // 请求头设置为JSON
//     // 可以根据需要添加其他头信息，例如认证token
//   },
//   data: {
//     loginId: "",
//     tonce: Date.now(),
//     ciphertext: sha1("0" + Date.now() + "WSDstarenergy@201510"),
//     faceId: "",
//     code: "glcnys",
//     staffName: "13566289621",
//     password: "0dbd827d7eef5d2183f44f13f0bb8fa8"
//   }
//   // 这里放置你要发送的数据
// }
const option = ref<EChartsOption>({
  tooltip: {
    trigger: "item"
  },
  legend: {
    width: "50%",
    top: "20%",
    right: "10%"
  },

  series: [
    {
      name: "",
      type: "pie",
      radius: ["80%", "90%"],
      avoidLabelOverlap: false,
      center: ["30%", "50%"],
      label: {
        normal: {
          show: true,
          position: "center",
          formatter: ["{title|" + 0 + "}", "{value|总采集点}"].join("\n"),
          rich: {
            title: {
              color: "#000",
              lineHeight: 22,
              align: "center"
            },
            value: {
              color: "#666",
              lineHeight: 22,
              align: "center"
            }
          }
        }
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 123, name: "工业设备" },
        { value: 22, name: "正常" },
        { value: 22, name: "告警" },
        { value: 300, name: "离线" }
      ]
    }
  ]
})
axios
  .get("http://zg-yzkj.com:27923/EquipMonitorService/GetAllPowers", {
    loginId: localStorage.getItem("loginId"),
    tonce: Date.now(),
    ciphertext: sha1("0" + Date.now() + "WSDstarenergy@201510")
  })
  .then((ress) => {
    // dataList.value = ress.data.Data
    ress.data.Data.forEach((element) => {
      console.log("🚀 ~ ress.data.Data.forEach ~ element:", element.DoorList)
      // element.DoorList.map((item) => {
      //   return {
      //     DevTypeName: item.DevTypeName
      //   }
      // })
      dataList.value = dataList.value.concat(element.DoorList)
    })
    option.value.series[0].label = {
      normal: {
        show: true,
        position: "center",
        formatter: function (value) {
          return ["{title|" + dataList.value.length + "}", "{value|总采集点}"].join("\n")
        },

        rich: {
          title: {
            color: "#000",
            lineHeight: 22,
            align: "center"
          },
          value: {
            color: "#666",
            lineHeight: 22,
            align: "center"
          }
        }
      }
    }
    option.value.series[0].data = [
      { value: 0, name: "工业设备" },
      { value: dataList.value.length, name: "正常" },
      { value: 0, name: "告警" },
      { value: 0, name: "离线" }
    ]

    console.log("🚀 ~ ress.data.Data.forEach ~ dataList:", dataList)
  })
</script>

<template>
  <div class="mx-10 mt-8 bg-white header">
    <div class="font-600 text-white uno-Basics-bgColor p-4 pl-8 b-rd-10 header">设备统计</div>
    <div class="flex flex-row p-4">
      <div class="flex flex-row items-center justify-between pl-8 w-[1200px]">
        <div class="flex flex-row items-center">
          <SvgIcon name="404" class="text-4xl text-red" />
          <div class="ml-3">
            <div class="font-bold text-7">0</div>
            <div class="text-4">工业设备数量</div>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <SvgIcon name="bug" class="text-4xl text-pink" />
          <div class="ml-3">
            <div class="font-bold text-7">{{ dataList.length }}</div>
            <div class="text-4">正常采集点</div>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <SvgIcon name="component" class="text-4xl text-orange" />
          <div class="ml-3">
            <div class="font-bold text-7">0</div>
            <div class="text-4">告警采集点</div>
          </div>
        </div>

        <div class="flex flex-row items-center">
          <SvgIcon name="menu" class="text-4xl text-fuchsia" />
          <div class="ml-3">
            <div class="font-bold text-7">0</div>
            <div class="text-4">离线采集点</div>
          </div>
        </div>

        <div class="flex flex-row items-center">
          <SvgIcon name="link" class="text-4xl text-amber" />
          <div class="ml-3">
            <div class="font-bold text-7">{{ dataList.length }}</div>
            <div class="text-4">总采集点</div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <v-chart class="w-full h-24" :option="option" autoresize />
      </div>
    </div>
  </div>
  <!-- <el-card v-loading="loading" class="mx-10 mt-8">
    <el-form ref="searchFormRef" :inline="true" :model="searchData" class="flex w-full items-center">
      <el-form-item prop="username" label="设备编号">
        <el-input v-model="searchData.username" placeholder="请输入" />
      </el-form-item>
      <el-form-item prop="phone" label="设备状态">
        <el-input v-model="searchData.phone" placeholder="请输入" />
      </el-form-item>
      <el-form-item prop="phone" label="告警类型">
        <el-input v-model="searchData.phone" placeholder="请输入" />
      </el-form-item>
      <el-form-item prop="phone" label="资产编号">
        <el-input v-model="searchData.phone" placeholder="请输入" />
      </el-form-item>
      <el-form-item class="ml-auto">
        <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
        <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card> -->
  <div class="grid gap-5 mt-8 px-10 pb-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
    <!-- Device items go here -->
    <div class="bg-white border border-[#ddd] rounded-4" v-for="(item, index) in dataList" :key="index">
      <div class="flex items-center py-3 px-6 uno-Basics-bgColor item-border text-white text-4">
        <div class="rounded-full bg-white h-10 w-10 mr-2" />
        {{ item.DoorName }}
        <div
          class="w-3 h-3 rounded-full ml-auto mr-2 border-r-white border-solid border-2"
          :style="
            item.state === 0
              ? 'background:rgba(156, 156, 156, 1)'
              : item.state === 2
                ? 'background:rgba(232, 88, 88, 1)'
                : 'background:rgba(91, 216, 0, 1)'
          "
        />
        {{ item.state === 0 ? "离线" : item.state === 2 ? "告警" : "正常" }}
      </div>
      <div class="p-8 text-4 flex flex-col h-40 justify-between">
        <span class="">设备名称：{{ item.DoorName }}</span>
        <span class="">设备编号：{{ item.DeviceID }}</span>
        <span class="">设备类型：{{ item.DevTypeName }}</span>
        <!-- <span class="">详细地址:</span>
        <span class="">布防状态:</span> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  background-color: red !important;
}
.header {
  border-radius: 10px 10px 0 0;
}
.item-border {
  border-radius: 10px 10px 0 0;
}
:deep(.el-form-item) {
  margin-bottom: 0px;
}
:deep(.el-card__body) {
  height: auto;
}
</style>
