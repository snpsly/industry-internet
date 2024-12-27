<script lang="ts" setup>
import { reactive, ref, watch, onMounted, computed } from "vue"
import { createTableDataApi, deleteTableDataApi, updateTableDataApi, getTableDataApi } from "@/api/table"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/table/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
import { Search, Refresh } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"
import * as echarts from "echarts"
import { box } from "echarts/types/src/util/layout.js"
defineOptions({
  // 命名当前组件
  name: "element-table"
})

const loading = ref<boolean>(false)
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()

//#region 增
const DEFAULT_FORM_DATA: CreateOrUpdateTableRequestData = {
  id: undefined,
  username: "",
  password: ""
}
const dialogVisible = ref<boolean>(false)
const formRef = ref<FormInstance | null>(null)
const formData = ref<CreateOrUpdateTableRequestData>(cloneDeep(DEFAULT_FORM_DATA))
const formRules: FormRules<CreateOrUpdateTableRequestData> = {
  username: [{ required: true, trigger: "blur", message: "请输入用户名" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }]
}
const handleCreateOrUpdate = () => {
  formRef.value?.validate((valid: boolean, fields) => {
    if (!valid) return console.error("表单校验不通过", fields)
    loading.value = true
    const api = formData.value.id === undefined ? createTableDataApi : updateTableDataApi
    api(formData.value)
      .then(() => {
        ElMessage.success("操作成功")
        dialogVisible.value = false
        getTableData()
      })
      .finally(() => {
        loading.value = false
      })
  })
}
const resetForm = () => {
  formRef.value?.clearValidate()
  formData.value = cloneDeep(DEFAULT_FORM_DATA)
}
//#endregion

//#region 删
const handleDelete = (row: GetTableData) => {
  ElMessageBox.confirm(`正在删除用户：${row.name}，确认删除？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    deleteTableDataApi(row.id).then(() => {
      ElMessage.success("删除成功")
      getTableData()
    })
  })
}
//#endregion

//#region 改
const handleUpdate = (row: GetTableData) => {
  dialogVisible.value = true
  formData.value = cloneDeep(row)
}
//#endregion

//#region 查
const tableData = ref<
  {
    type: string
    state: string
    reason: string
    dateTime: string
    dateTime2: string
    uuid: string
  }[]
>([])
const searchFormRef = ref<FormInstance | null>(null)
const searchData = reactive({
  username: "",
  phone: ""
})
const getTableData = () => {
  tableData.value = [
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    },
    {
      type: "烟感",
      state: "待确认",
      reason: "设备离线",
      dateTime: "2024-6-20 15:30:33",
      dateTime2: "00天10时3分",
      uuid: "15616165189416165161"
    }
  ]

  paginationData.total = tableData.value.length
}
const handleSearch = () => {
  paginationData.currentPage === 1 ? getTableData() : (paginationData.currentPage = 1)
}
const resetSearch = () => {
  searchFormRef.value?.resetFields()
  handleSearch()
}
//#endregion
const filterData = computed(() => {
  return tableData.value.slice(
    (paginationData.currentPage - 1) * paginationData.pageSize,
    paginationData.currentPage * paginationData.pageSize
  )
})
getTableData()
/** 监听分页参数的变化 */
// watch([() => paginationData.currentPage, () => paginationData.pageSize], getTableData, { immediate: true })

const chartContainer = ref(null)
onMounted(() => {
  console.log(chartContainer)
  const chart = echarts.init(chartContainer.value)
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6", "7"]
    },
    yAxis: {
      type: "value"
    },
    grid: {
      top: "10%",
      right: "10%",
      bottom: "0%",
      left: "0%",
      containLabel: true
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(58,77,233,0.8)"
            },
            {
              offset: 1,
              color: "rgba(58,77,233,0.3)"
            }
          ])
        }
      }
    ]
  }

  chart.setOption(option)
})
</script>

<template>
  <div class="app-container">
    <el-card shadow="never" class="text-2xl"> 告警管理 </el-card>
    <el-card v-loading="loading" shadow="never" class="search-wrapper mt-4">
      <el-form ref="searchFormRef" :inline="true" :model="searchData" class="flex">
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
    <div class="mt-4 flex flex-row">
      <el-card shadow="never" class="flex-1">
        <div class="flex flex-row w-full justify-around items-center h-full">
          <SvgIcon name="404" class="text-8xl text-amber flex-shrink-0 flex-1" />
          <div class="flex flex-col justify-between h-20 flex-1">
            <span>全部告警</span>
            <span>10792</span>
            <span>今日新增：29</span>
          </div>
          <div class="flex flex-col justify-between h-20 flex-1">
            <span>未确认</span>
            <span>10792</span>
            <el-progress :percentage="80" status="warning" />
          </div>
          <div class="flex flex-col justify-between h-20 flex-1">
            <span>已确认</span>
            <span>213</span>
            <el-progress :percentage="20" status="success" />
          </div>
        </div>
      </el-card>
      <el-card shadow="never" class="ml-4 w-30%">
        <div ref="chartContainer" class="h-full w-full" />
      </el-card>
    </div>

    <el-card v-loading="loading" shadow="never" class="mt-4">
      <div class="table-wrapper">
        <el-table :data="filterData">
          <!-- <el-table-column type="selection" width="50" align="center" /> -->
          <el-table-column prop="type" label="设备类型" align="center" />
          <el-table-column prop="state" label="告警状态" align="center" />
          <el-table-column prop="reason" label="告警原因" align="center" />

          <el-table-column prop="dateTime" label="告警时间" align="center" />
          <el-table-column prop="dateTime1" label="告警持续时间" align="center" />
          <!-- <el-table-column prop="email" label="资产编号" align="center" /> -->

          <el-table-column prop="uuid" label="设备编号" align="center" />

          <!-- <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <el-button type="primary" text bg size="small" @click="handleUpdate(scope.row)">修改</el-button>
              <el-button type="danger" text bg size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column> -->
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
    </el-card>
    <!-- 新增/修改 -->
    <el-dialog
      v-model="dialogVisible"
      :title="formData.id === undefined ? '新增用户' : '修改用户'"
      @closed="resetForm"
      width="30%"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="100px" label-position="left">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="formData.username" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="password" label="密码" v-if="formData.id === undefined">
          <el-input v-model="formData.password" placeholder="请输入" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleCreateOrUpdate" :loading="loading">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}
:deep(.el-card__body) {
  height: 100%;
  width: 100%;
}
</style>
