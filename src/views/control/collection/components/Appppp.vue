<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue"
import * as echarts from "echarts"
import { Search, Refresh } from "@element-plus/icons-vue"
defineOptions({
  // 命名当前组件
  name: "Appppp"
})
const chartContainer = ref(null)

onMounted(() => {
  const chart = echarts.init(chartContainer.value)
  const option = {
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
        name: "Access From",
        type: "pie",
        radius: ["90%", "100%"],
        avoidLabelOverlap: false,
        center: ["30%", "50%"],
        label: {
          normal: {
            show: true,
            position: "center",
            formatter: ["{title|80836}", "{value|总采集点}"].join("\n"),
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
          { value: 1048, name: "工业设备" },
          { value: 735, name: "正常" },
          { value: 580, name: "告警" },
          { value: 484, name: "失联" },
          { value: 300, name: "离线" },
          { value: 300, name: "其他" }
        ]
      }
    ]
  }

  chart.setOption(option)
})
const loading = ref<boolean>(false)
const searchData = reactive({
  username: "",
  phone: ""
})
const handleSearch = () => {}
const resetSearch = () => {}
</script>

<template>
  <h1 class="bg-white p-4">设备统计</h1>
  <div class="header">
    <div class="statistics">
      <div class="flex flex-row items-center">
        <SvgIcon name="404" class="text-4xl text-red" />
        <div class="stat-item">
          <div class="stat-value">1831</div>
          <div class="stat-label">工业设备数量</div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <SvgIcon name="bug" class="text-4xl text-pink" />
        <div class="stat-item">
          <div class="stat-value">78301</div>
          <div class="stat-label">正常采集点</div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <SvgIcon name="component" class="text-4xl text-orange" />
        <div class="stat-item">
          <div class="stat-value">2205</div>
          <div class="stat-label">告警采集点</div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <SvgIcon name="dashboard" class="text-4xl text-emerald" />
        <div class="stat-item">
          <div class="stat-value">132</div>
          <div class="stat-label">失联采集点</div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <SvgIcon name="menu" class="text-4xl text-fuchsia" />
        <div class="stat-item">
          <div class="stat-value">25</div>
          <div class="stat-label">离线采集点</div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <SvgIcon name="lock" class="text-4xl text-blue" />
        <div class="stat-item">
          <div class="stat-value">0</div>
          <div class="stat-label">其它采集点</div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <SvgIcon name="link" class="text-4xl text-amber" />
        <div class="stat-total">
          <div class="total-value">80663</div>
          <div class="total-label">总采集点</div>
        </div>
      </div>
      <div ref="chartContainer" style="width: 600px; height: 80px" />
    </div>
  </div>
  <el-card v-loading="loading" shadow="never" class="search-wrapper mt-4">
    <el-form ref="searchFormRef" :inline="true" :model="searchData" class="flex w-full">
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
  </el-card>
  <div class="grid gap-5 p-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
    <!-- Device items go here -->
    <div class="bg-white border border-[#ddd] rounded-4 p-5">
      <div class="flex items-center mb-2.5">
        烟感控制器1#
        <div class="w-2.5 h-2.5 rounded-full bg-green ml-auto" />
        正常
      </div>
      <div>
        <p class="m-1.25">设备名称:</p>
        <p class="m-1.25">设备编号:</p>
        <p class="m-1.25">设备类型:</p>
        <p class="m-1.25">详细地址:</p>
        <p class="m-1.25">布防状态:</p>
      </div>
    </div>
    <div class="bg-white border border-[#ddd] rounded-4 p-5">
      <div class="flex items-center mb-2.5">
        烟感控制器1#
        <div class="w-2.5 h-2.5 rounded-full bg-green ml-auto" />
        正常
      </div>
      <div>
        <p class="m-1.25">设备名称:</p>
        <p class="m-1.25">设备编号:</p>
        <p class="m-1.25">设备类型:</p>
        <p class="m-1.25">详细地址:</p>
        <p class="m-1.25">布防状态:</p>
      </div>
    </div>
    <div class="bg-white border border-[#ddd] rounded-4 p-5">
      <div class="flex items-center mb-2.5">
        烟感控制器2#
        <div class="w-2.5 h-2.5 rounded-full bg-red ml-auto" />
        告警
      </div>
      <div>
        <p class="m-1.25">设备名称:</p>
        <p class="m-1.25">设备编号:</p>
        <p class="m-1.25">设备类型:</p>
        <p class="m-1.25">详细地址:</p>
        <p class="m-1.25">布防状态:</p>
      </div>
    </div>
    <div class="bg-white border border-[#ddd] rounded-4 p-5">
      <div class="flex items-center mb-2.5">
        烟感控制器3#
        <div class="w-2.5 h-2.5 rounded-full bg-yellow ml-auto" />
        失联
      </div>
      <div>
        <p class="m-1.25">设备名称:</p>
        <p class="m-1.25">设备编号:</p>
        <p class="m-1.25">设备类型:</p>
        <p class="m-1.25">详细地址:</p>
        <p class="m-1.25">布防状态:</p>
      </div>
    </div>
    <div class="bg-white border border-[#ddd] rounded-4 p-5">
      <div class="flex items-center mb-2.5">
        烟感控制器4#
        <div class="w-2.5 h-2.5 rounded-full bg-blue ml-auto" />
        正常
      </div>
      <div>
        <p class="m-1.25">设备名称:</p>
        <p class="m-1.25">设备编号:</p>
        <p class="m-1.25">设备类型:</p>
        <p class="m-1.25">详细地址:</p>
        <p class="m-1.25">布防状态:</p>
      </div>
    </div>
    <!-- Repeat similar blocks for other devices -->
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}
.header {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.statistics {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}

.stat-item,
.stat-total {
  text-align: center;
}

.stat-value,
.total-value {
  font-size: 24px;
  font-weight: bold;
}

.stat-label,
.total-label {
  font-size: 14px;
  color: #888;
}

.search-bar {
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

.search-bar input {
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
