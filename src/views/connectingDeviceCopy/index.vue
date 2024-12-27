<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, reactive, watch } from "vue"
import { use } from "echarts/core"
import { PieChart } from "echarts/charts"
import { TooltipComponent, LegendComponent } from "echarts/components"
import { CanvasRenderer } from "echarts/renderers"
import { usePagination } from "@/hooks/usePagination"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
import {
  getTableDataApi,
  getqy,
  getById,
  getTableDataApiId,
  getfl,
  getfltotal,
  getTableDataApiIdHistory
} from "@/api/newApi123"
use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

import { Search, Refresh } from "@element-plus/icons-vue"
defineOptions({
  // 命名当前组件
  name: "userCase"
})
const appTypeEnum = ref<any[]>([
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // },
  // {
  //   value: 0,
  //   label: "安全生产"
  // },
  // {
  //   value: 1,
  //   label: "安全生产1"
  // },
  // {
  //   value: 2,
  //   label: "安全生产2"
  // }
])
const numtotal = ref(0)
const num = ref([])
// 设置页面背景颜色
onMounted(() => {
  getqy().then((res) => {
    console.log("🚀 ~ getqy ~ res:", res)
    const arr = res.map((item: any) => {
      return {
        value: item,
        label: item
      }
    })
    appTypeEnum.value = [
      {
        value: "全部",
        label: "全部"
      },
      ...arr
    ]
    // appTypeEnum.value.push({
    //   value: null,
    //   label: "全部"
    // })
  })
  document.querySelector("body")?.setAttribute("style", "background-color: rgba(237, 237, 237, 1)")
})
// 页面销毁时清空背景色
onBeforeUnmount(() => {
  document.querySelector("body")?.removeAttribute("style")
})
const loading = ref<boolean>(false)
const searchData = reactive({
  Name: "",
  MonitorProductTypeName: ""
})
const searchFormRef = ref<FormInstance | null>(null)
const resetSearch = () => {
  searchFormRef.value?.resetFields()
  handleSearch()
}

const currentS = ref("全部")
const handleSelect = (e: string) => {
  currentS.value = e
  getTableData()
}

const handleUpdate = (row: any) => {
  getTableDataApiId({ id: row.id }).then((res: any) => {
    tableData2.value = res.monitorProductChannels
    historyDialogId.value = res.id
    dialogVisible.value = true
  })
}
const tableData = ref([])
const getTableData = () => {
  getfl({ Manufacturer: currentS.value === "全部" ? null : currentS.value }).then((res) => {
    num.value = res
  })
  getfltotal({ Manufacturer: currentS.value === "全部" ? null : currentS.value }).then((res) => {
    numtotal.value = res
  })
  loading.value = true
  getTableDataApi({
    SkipCount:
      (paginationData.currentPage > 0 ? paginationData.currentPage - 1 : paginationData.currentPage) *
      paginationData.pageSize,
    MaxResultCount: paginationData.pageSize,
    Name: searchData.Name || undefined,
    MonitorProductTypeName: searchData.MonitorProductTypeName || undefined,
    Manufacturer: currentS.value === "全部" ? null : currentS.value
  })
    .then((data) => {
      paginationData.total = data.totalCount
      tableData.value = data.items
    })
    .catch(() => {
      tableData.value = []
    })
    .finally(() => {
      loading.value = false
    })
}
const handleSearch = () => {
  paginationData.currentPage === 1 ? getTableData() : (paginationData.currentPage = 1)
}
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()
watch([() => paginationData.currentPage, () => paginationData.pageSize], getTableData, { immediate: true })
const dialogVisible = ref(false)
const tableData2 = ref([])
const historyDialogId = ref("")
const historyDialogVisible = ref(false)
const historyTableData = ref([])

const historyHandleUpdate = () => {
  loding1.value = true
  getTableDataApiIdHistory({
    MonitorProductId: historyDialogId.value,
    StartDateTime: "2000-01-01 00:00:00",
    EndDateTime: "2028-01-01 00:00:00",
    SkipCount:
      (paginationData1.currentPage > 0 ? paginationData1.currentPage - 1 : paginationData1.currentPage) *
      paginationData1.pageSize,
    MaxResultCount: paginationData1.pageSize
  })
    .then((res: any) => {
      historyTableData.value = res.items
      paginationData1.total = res.totalCount
      historyDialogVisible.value = true
    })
    .finally(() => {
      loding1.value = false
    })
}
const open = () => {
  paginationData1.currentPage == 1 ? historyHandleUpdate() : (paginationData1.currentPage = 1)
}
const {
  paginationData: paginationData1,
  handleCurrentChange: handleCurrentChange1,
  handleSizeChange: handleSizeChange1
} = usePagination()
watch([() => paginationData1.currentPage, () => paginationData1.pageSize], historyHandleUpdate)
const closed123 = () => {
  //  console.log("🚀 ~ closed ~ aginationData1.currentPage :", paginationData1.currentPage)
}
const loding1 = ref(false)
</script>

<template>
  <el-dialog v-model="historyDialogVisible" title="设备详情" width="70%" @closed="closed123">
    <el-table :data="historyTableData" v-loading="loding1">
      <el-table-column prop="channelCode" label="通道编码" align="center" />
      <el-table-column prop="channelNo" label="通道号" align="center" />

      <el-table-column prop="channelName" label="通道名称" align="center" />

      <el-table-column prop="channelValue" label="通道值" align="center" />
      <el-table-column prop="recordDateTime" label="获取时间" align="center" />
    </el-table>
    <div class="pager-wrapper mt-4">
      <el-pagination
        background
        :layout="paginationData1.layout"
        :page-sizes="paginationData1.pageSizes"
        :total="paginationData1.total"
        :page-size="paginationData1.pageSize"
        :currentPage="paginationData1.currentPage"
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
      />
    </div>
  </el-dialog>
  <el-dialog v-model="dialogVisible" title="产品详情" width="70%">
    <el-button type="primary" :icon="Search" @click="open">查看历史</el-button>
    <el-table :data="tableData2">
      <el-table-column prop="channelCode" label="通道编码" align="center" />
      <el-table-column prop="channelNo" label="通道号" align="center" />

      <el-table-column prop="channelName" label="通道名称" align="center" />

      <el-table-column prop="lastChannelValue" label="通道值" align="center" />
      <el-table-column prop="recordDateTime" label="获取时间" align="center" />
    </el-table>
  </el-dialog>
  <div class="mx-4 mt-4 bg-white rounded-1">
    <!-- <div class="font-600 text-white uno-Basics-bgColor p-4 pl-8 b-rd-10 header">产品统计</div> -->
    <div class="flex flex-row p-4">
      <el-scrollbar class="w-[100%-100px] overflow-hidden">
        <div class="flex flex-row items-center justify-between pl-8 py-3">
          <div class="flex flex-row">
            <div class="flex flex-col items-center mr-32 flex-shrink-0" v-for="item in num" :key="item">
              <div class="text-4">{{ item.monitorProductTypeName }}</div>
              <div class="font-bold text-7 mt-1 uno-Basics-text-color">{{ item.count }}</div>
            </div>
            <!-- <div class="flex flex-col items-center mr-32 flex-shrink-0" v-for="item in num" :key="item">
              <div class="text-4">{{ item.equipmentTypeName }}</div>
              <div class="font-bold text-7 mt-1 uno-Basics-text-color">{{ item.count }}</div>
            </div>
            <div class="flex flex-col items-center mr-32 flex-shrink-0" v-for="item in num" :key="item">
              <div class="text-4">{{ item.equipmentTypeName }}</div>
              <div class="font-bold text-7 mt-1 uno-Basics-text-color">{{ item.count }}</div>
            </div>
            <div class="flex flex-col items-center mr-32 flex-shrink-0" v-for="item in num" :key="item">
              <div class="text-4">{{ item.equipmentTypeName }}</div>
              <div class="font-bold text-7 mt-1 uno-Basics-text-color">{{ item.count }}</div>
            </div>
            <div class="flex flex-col items-center mr-32 flex-shrink-0" v-for="item in num" :key="item">
              <div class="text-4">{{ item.equipmentTypeName }}</div>
              <div class="font-bold text-7 mt-1 uno-Basics-text-color">{{ item.count }}</div>
            </div> -->
            <div class="flex flex-col items-center flex-shrink-0">
              <div class="text-4">产品总数</div>
              <div class="font-bold text-7 mt-1 uno-Basics-text-color">{{ numtotal }}</div>
            </div>
          </div>

          <!-- <div class="flex flex-col items-center">
          <div class="text-4">贴标机</div>
          <div class="font-bold text-7 mt-1 uno-Basics-text-color">0</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-4">传送带</div>
          <div class="font-bold text-7 mt-1 uno-Basics-text-color">0</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-4">工业机器人</div>
          <div class="font-bold text-7 mt-1 uno-Basics-text-color">0</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-4">注塑机</div>
          <div class="font-bold text-7 mt-1 uno-Basics-text-color">0</div>
        </div> -->
        </div>
      </el-scrollbar>
    </div>
  </div>
  <div class="flex flex-row h-200 mx-4 my-4">
    <div class="bg-white w-80 p-4 rounded-1">
      <div class="b-header pb-4 uno-flex-center">企业名称</div>
      <div class="mt-4 h-[calc(100%-40px)]">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            class="el-menu"
            text-color="#000"
            active-text-color="#fff"
            @select="handleSelect"
            :default-active="currentS"
          >
            <el-menu-item v-for="item in appTypeEnum" :key="item.value" :index="item.value">{{
              item.label
            }}</el-menu-item>
          </el-menu></el-scrollbar
        >
      </div>
    </div>
    <div class="flex-1 ml-4 rounded-1 flex flex-col">
      <div class="bg-white h-14 rounded-1 flex items-center pl-4">
        <el-form ref="searchFormRef" :inline="true" :model="searchData" class="flex w-full items-center">
          <el-form-item prop="Name" label="产品名称">
            <el-input v-model="searchData.Name" placeholder="请输入" />
          </el-form-item>
          <el-form-item prop="MonitorProductTypeName" label="产品类型">
            <el-input v-model="searchData.MonitorProductTypeName" placeholder="请输入" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
            <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="bg-white mt-4 flex-1 rounded-1">
        <div class="table-wrapper">
          <el-table :data="tableData">
            <el-table-column prop="monitorProductCode" label="产品编号" align="center" />
            <el-table-column prop="manufacturer" label="所属企业" align="center" />

            <el-table-column prop="monitorProductTypeName" label="产品类型" align="center" />

            <el-table-column prop="name" label="产品名称" align="center" />
            <el-table-column fixed="right" label="操作" width="150" align="center">
              <template #default="scope">
                <el-button type="primary" text bg size="small" @click="handleUpdate(scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pager-wrapper">
          <el-pagination
            background
            :layout="paginationData.layout"
            :page-sizes="paginationData.pageSizes"
            :total="paginationData.total"
            :page-size="paginationData.pageSize"
            :currentPage="paginationData.currentPage"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <el-card v-loading="loading" class="mx-10 mt-8">
    <el-form ref="searchFormRef" :inline="true" :model="searchData" class="flex w-full items-center">
      <el-form-item prop="Name" label="产品编号">
        <el-input v-model="searchData.Name" placeholder="请输入" />
      </el-form-item>
      <el-form-item prop="MonitorProductTypeName" label="产品状态">
        <el-input v-model="searchData.MonitorProductTypeName" placeholder="请输入" />
      </el-form-item>
      <el-form-item prop="MonitorProductTypeName" label="告警类型">
        <el-input v-model="searchData.MonitorProductTypeName" placeholder="请输入" />
      </el-form-item>
      <el-form-item prop="MonitorProductTypeName" label="资产编号">
        <el-input v-model="searchData.MonitorProductTypeName" placeholder="请输入" />
      </el-form-item>
      <el-form-item class="ml-auto">
        <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
        <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card> -->
  <!-- <div class="grid gap-5 mt-8 px-10 pb-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
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
        <span class="">产品名称：{{ item.DoorName }}</span>
        <span class="">产品编号：{{ item.DeviceID }}</span>
        <span class="">产品类型：{{ item.DevTypeName }}</span>
      </div>
    </div>
  </div>  -->
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
.b-header {
  border-bottom: 1px solid rgb(165, 162, 162);
}
:deep(.el-menu) {
  border: none;
  .is-active {
    background-color: var(--el-color-primary);
  }
  .el-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
      background-color: var(--el-color-primary);
      color: white;
    }
  }
}
.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
</style>
