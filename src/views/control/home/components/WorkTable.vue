<script lang="ts" setup>
import { ref, watch, computed } from "vue"
import { createTableDataApi, deleteTableDataApi, updateTableDataApi, getTableDataApi } from "@/api/table"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/table/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
//import { Search, Refresh, CirclePlus, Delete, Download, RefreshRight } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"

defineOptions({
  // 命名当前组件
  name: "UserTable"
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
  ElMessageBox.confirm(`正在删除用户：${row.username}，确认删除？`, "提示", {
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
    id: string
    type: string
    name: string
    quantity: string
    collection: string
  }[]
>([])
// const searchFormRef = ref<FormInstance | null>(null)
// const searchData = reactive({
//   username: "",
//   phone: ""
// })
const getTableData = () => {
  loading.value = true
  tableData.value = [
    { id: "1", type: "运行设备", name: "压力机", quantity: "17", collection: "10" },
    { id: "2", type: "运行设备", name: "液压机", quantity: "50", collection: "8" },
    { id: "3", type: "运行设备", name: "空压机", quantity: "15", collection: "12" },
    { id: "4", type: "运行设备", name: "仪器仪表", quantity: "31", collection: "12" },
    { id: "5", type: "运行设备", name: "动力柜", quantity: "24", collection: "30" },
    { id: "6", type: "加工设备", name: "自动上料单元", quantity: "42", collection: "20" },
    { id: "7", type: "加工设备", name: "自动组装单元", quantity: "140", collection: "20" },
    { id: "8", type: "加工设备", name: "自动总装单元", quantity: "140", collection: "20" },
    { id: "9", type: "加工设备", name: "自动激光打标单元", quantity: "42", collection: "20" },
    { id: "10", type: "加工设备", name: "自动延时单元", quantity: "42", collection: "25" },
    { id: "11", type: "加工设备", name: "自动瞬时检测单元", quantity: "42", collection: "25" },
    { id: "12", type: "加工设备", name: "自动通断/耐压检测单元", quantity: "42", collection: "25" },
    { id: "13", type: "加工设备", name: "自动漏电检测单元", quantity: "42", collection: "25" },
    { id: "14", type: "加工设备", name: "自动参数测试单元", quantity: "42", collection: "30" },
    { id: "15", type: "加工设备", name: "自动移印单元", quantity: "42", collection: "10" },
    { id: "16", type: "加工设备", name: "自动包装单元", quantity: "42", collection: "10" },
    { id: "17", type: "加工设备", name: "自动焊接单元", quantity: "42", collection: "10" },
    { id: "18", type: "加工设备", name: "自动摆盘下料单元", quantity: "42", collection: "10" },
    { id: "19", type: "加工设备", name: "全自动制片机", quantity: "100", collection: "10" },
    { id: "20", type: "加工设备", name: "节能伺服注塑机", quantity: "50", collection: "38" },
    { id: "21", type: "加工设备", name: "工业机器人", quantity: "28", collection: "40" },
    { id: "22", type: "加工设备", name: "数控机床", quantity: "5", collection: "37" },
    { id: "23", type: "加工设备", name: "装配线及装配台", quantity: "62", collection: "38" },
    { id: "24", type: "加工设备", name: "质量检测设备", quantity: "110", collection: "21" },
    { id: "25", type: "加工设备", name: "打标机", quantity: "10", collection: "5" },
    { id: "26", type: "加工设备", name: "包装线", quantity: "42", collection: "30" },
    { id: "27", type: "行走设备", name: "叉车", quantity: "10", collection: "5" },
    { id: "28", type: "行走设备", name: "立体仓库", quantity: "2", collection: "2000" },
    { id: "29", type: "行走设备", name: "输送线", quantity: "5", collection: "50" },
    { id: "30", type: "行走设备", name: "叉车式 AGV", quantity: "5", collection: "24" },
    { id: "31", type: "行走设备", name: "背负式 AGV", quantity: "10", collection: "24" },
    { id: "32", type: "行走设备", name: "滚筒式 AGV", quantity: "12", collection: "24" },
    { id: "33", type: "行走设备", name: "潜伏顶升式 AGV", quantity: "10", collection: "24" },
    { id: "34", type: "其他设备", name: "环保监测设备", quantity: "30", collection: "10" },
    { id: "35", type: "其他设备", name: "安全报警及探测装置", quantity: "220", collection: "10" },
    { id: "37", type: "能源管理设备", name: "能源管理设备", quantity: "50", collection: "6" }
  ]
  //   getTableDataApi({
  //     currentPage: paginationData.currentPage,
  //     size: paginationData.pageSize
  //   })
  //     .then(({ data }) => {
  //       paginationData.total = data.total
  //       tableData.value = data.list
  //     })
  //     .catch(() => {
  //       tableData.value = []
  //     })
  //     .finally(() => {
  //       loading.value = false
  //     })
  paginationData.total = tableData.value.length
  loading.value = false
}
// const handleSearch = () => {
//   paginationData.currentPage === 1 ? getTableData() : (paginationData.currentPage = 1)
// }
const filterData = computed(() => {
  return tableData.value.slice(
    (paginationData.currentPage - 1) * paginationData.pageSize,
    paginationData.currentPage * paginationData.pageSize
  )
})
getTableData()
/** 监听分页参数的变化 */
// watch([() => paginationData.currentPage, () => paginationData.pageSize], getTableData, { immediate: true })
</script>

<template>
  <div class="app-container">
    <!-- <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="searchData.username" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input v-model="searchData.phone" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card> -->
    <el-card v-loading="loading" shadow="never">
      <!-- <div class="toolbar-wrapper">
        <div>
          <el-button type="primary" :icon="CirclePlus" @click="dialogVisible = true">新增用户</el-button>
          <el-button type="danger" :icon="Delete">批量删除</el-button>
        </div>
      </div> -->
      <div class="table-wrapper">
        <el-table :data="filterData">
          <el-table-column prop="id" label="序号" align="center" />

          <el-table-column prop="type" label="设备类型" align="center" />
          <el-table-column prop="name" label="设备名称" align="center" />
          <el-table-column prop="quantity" label="数量" align="center" />
          <el-table-column prop="collection" label="数量采集点" align="center" />
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
</style>
