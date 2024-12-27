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
    quantity: string
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
    { id: "1", type: "DD 型系列电能表 DDSY256", quantity: "5886" },
    { id: "2", type: "DT 型系列电能表 DTSY256", quantity: "5641" },
    { id: "3", type: "PD 系列电子表 PD256Y", quantity: "5221" },
    { id: "4", type: "边缘服务器 Te-VGW101", quantity: "456" },
    { id: "5", type: "边缘服务器 Te-VGW401", quantity: "206" },
    { id: "6", type: "高压真空断路器 ZW32", quantity: "2854" },
    { id: "7", type: "漏电断路器 TGM2LC", quantity: "5911" },
    { id: "8", type: "漏电断路器 TGM3RC", quantity: "5201" },
    { id: "9", type: "漏电断路器 TGM2FC", quantity: "4689" },
    { id: "10", type: "塑壳断路器 TGM3R", quantity: "2329" },
    { id: "11", type: "万能式断路器 TGW1N", quantity: "6760" },
    { id: "12", type: "万能式断路器 TGW45", quantity: "2656" },
    { id: "13", type: "万能式断路器 TGW1", quantity: "1083" },
    { id: "14", type: "小型断路器 TeB7E", quantity: "9983" },
    { id: "15", type: "小型漏电断路器 TeB7EL", quantity: "7586" },
    { id: "16", type: "智能监控屏 Te-BMC07R", quantity: "307" }
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

          <el-table-column prop="type" label="产品类型" align="center" />
          <el-table-column prop="quantity" label="产品数量" align="center" />
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
