<script lang="ts" setup>
import { reactive, ref, watch } from "vue"
import {
  createTableDataApi,
  deleteTableDataApi,
  updateTableDataApi,
  getTableDataApi,
  getBMApi,
  getTableDataApiId
} from "@/api/enter"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/table/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
import { Search, Refresh, CirclePlus, Delete, Download, RefreshRight } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"
import { ElLoading } from "element-plus"
defineOptions({
  // 命名当前组件
  name: "user"
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
const dialogVisiblesb = ref<boolean>(false)
const formRef = ref<FormInstance | null>(null)
const formData = ref<any>(cloneDeep(DEFAULT_FORM_DATA))
const formRules: FormRules<CreateOrUpdateTableRequestData> = {
  username: [{ required: true, trigger: "blur", message: "请输入检测分析指标名" }],
  password11: [{ required: true, trigger: "blur", message: "请输入密码" }]
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
const resetFormsb = () => {
  formDatasb.value = {}
}
//#endregion

//#region 删
const handleDelete = (row: GetTableData) => {
  ElMessageBox.confirm(`正在删除检测分析指标：${row.name}，确认删除？`, "提示", {
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
  getTableDataApiId({ id: row.id }).then((res: any) => {
    formData.value = res

    dialogVisible.value = true
    // formData.value = cloneDeep(row)
  })
}
//#endregion

//#region 查
const tableData = ref<GetTableData[]>([])
const searchFormRef = ref<FormInstance | null>(null)
const searchData = reactive({
  username: "",
  phone: ""
})
const getTableData = () => {
  loading.value = true
  getTableDataApi({
    SkipCount:
      (paginationData.currentPage > 0 ? paginationData.currentPage - 1 : paginationData.currentPage) *
      paginationData.pageSize,
    MaxResultCount: paginationData.pageSize,
    Name: searchData.username || undefined,
    phone: searchData.phone || undefined
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
const resetSearch = () => {
  searchFormRef.value?.resetFields()
  handleSearch()
}
//#endregion

/** 监听分页参数的变化 */
watch([() => paginationData.currentPage, () => paginationData.pageSize], getTableData, { immediate: true })
const addFile = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中..."
  })
  const input = document.createElement("input")
  input.setAttribute("type", "file")
  input.setAttribute("accept", ".xlsx")
  input.click()
  input.onchange = () => {
    const file = input.files![0]
    console.log(file)
    loading.close()
  }
}
const downloadFile = () => {}
const formDatasb = ref<any>({})
const handleCreateOrUpdate123 = () => {
  console.log("6666666666666666666")

  if (formData.value.monitorProductChannels) {
    formData.value.monitorProductChannels.push(formDatasb.value)
  } else {
    formData.value.monitorProductChannels = []
    handleCreateOrUpdate123()
  }

  dialogVisiblesb.value = false
}
const handleUpdate123 = () => {
  dialogVisiblesb.value = true
}
const handleDelete123 = (row) => {
  console.log("🚀 ~ handleDelete123 ~ row:", row.$index)
  formData.value.monitorProductChannels.splice(row.$index, 1)
}
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="username" label="检测分析指标名">
          <el-input v-model="searchData.username" placeholder="请输入" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-loading="loading" shadow="never">
      <div class="toolbar-wrapper">
        <div>
          <el-button type="primary" :icon="CirclePlus" @click="dialogVisible = true">新增检测分析指标</el-button>
          <!-- <el-button type="primary" @click="addFile">导入</el-button>
          <el-button type="primary" @click="downloadFile">导出</el-button> -->
          <!-- <el-button type="danger" :icon="Delete">批量删除</el-button> -->
        </div>
        <div>
          <!-- <el-tooltip content="下载">
            <el-button type="primary" :icon="Download" circle />
          </el-tooltip> -->
          <!-- <el-tooltip content="刷新当前页">
            <el-button type="primary" :icon="RefreshRight" circle @click="getTableData" />
          </el-tooltip> -->
        </div>
      </div>
      <div class="table-wrapper">
        <el-table :data="tableData">
          <!-- <el-table-column type="selection" width="50" align="center" /> -->
          <el-table-column width="240" prop="recordDateTime" label="时间" align="center" />
          <el-table-column
            width="240"
            prop="itDpublicCloudPlatformServerCount"
            label="平台公有云实际使用数量(台)"
            align="center"
          />
          <el-table-column
            width="240"
            prop="itDpublicCloudPlatformStorageUsed"
            label="平台公有云数据总量(TB)"
            align="center"
          />
          <el-table-column width="240" prop="itDplatformOrderCount" label="平台订单数量(个)" align="center" />
          <el-table-column width="240" prop="itDplatformOrderRevenue" label="平台营收(万元)" align="center" />
          <!-- <el-table-column width="240" prop="manufacturer" label="平台核心工业模型月调用用户数量(个)" align="center" /> -->
          <el-table-column width="240" prop="itdPlatformServerCount" label="平台实际用云量(台)" align="center" />
          <el-table-column width="240" prop="itDdeveloperRegister" label="开发者注册数量(人)" align="center" />
          <el-table-column width="240" prop="itDdeveloperActiveMonth" label="开发者月活跃数量(人)" align="center" />
          <el-table-column
            width="240"
            prop="itDpublicCloudIndustrialAppTotal"
            label="基于平台开发的工业APP数量(个)"
            align="center"
          />
          <el-table-column width="240" prop="itDindustrialAppSubscribed" label="工业APP订阅总数量(次)" align="center" />
          <el-table-column width="240" prop="itDindustrialAppRevenue" label="工业APP订阅总金额(万元)" align="center" />
          <el-table-column
            width="240"
            prop="itDindustrialAppActiveMonth"
            label="工业APP月活跃数量(个)"
            align="center"
          />
          <el-table-column width="240" prop="itDserviceParkTotal" label="服务园区总数(个)" align="center" />
          <el-table-column width="240" prop="itDsolutionTotal" label="解决方案总数(个)" align="center" />
          <!-- <el-table-column width="240" prop="manufacturer" label="按新模式统计解决方案数量(个)" align="center" /> -->

          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <el-button type="primary" text bg size="small" @click="handleUpdate(scope.row)">修改</el-button>
              <el-button type="danger" text bg size="small" @click="handleDelete(scope.row)">删除</el-button>
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
    </el-card>
    <!-- 新增/修改 -->
    <el-dialog
      v-model="dialogVisible"
      :title="formData.id === undefined ? '新增检测分析指标' : '修改检测分析指标'"
      @closed="resetForm"
      width="30%"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="260px" label-position="left">
        <el-form-item prop="recordDateTime" label="时间">
          <el-date-picker
            class="w-full"
            v-model="formData.recordDateTime"
            type="date"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD hh:mm:ss"
            placeholder=""
          />
        </el-form-item>
        <el-form-item prop="itDpublicCloudPlatformServerCount" label="平台公有云实际使用数量(台)">
          <el-input v-model="formData.itDpublicCloudPlatformServerCount" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDpublicCloudPlatformStorageUsed" label="平台公有云数据总量(TB)">
          <el-input v-model="formData.itDpublicCloudPlatformStorageUsed" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDplatformOrderCount" label="平台订单数量(个)">
          <el-input v-model="formData.itDplatformOrderCount" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDplatformOrderRevenue" label="平台营收(万元)">
          <el-input v-model="formData.itDplatformOrderRevenue" placeholder="请输入" type="number" />
        </el-form-item>
        <!-- <el-form-item prop="manufacturer" label="平台核心工业模型月调用用户数量(个)">
          <el-input v-model="formData.manufacturer" placeholder="请输入" type="number" />
        </el-form-item> -->
        <el-form-item prop="itdPlatformServerCount" label="平台实际用云量(台)">
          <el-input v-model="formData.itdPlatformServerCount" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDdeveloperRegister" label="开发者注册数量(人)">
          <el-input v-model="formData.itDdeveloperRegister" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDdeveloperActiveMonth" label="开发者月活跃数量(人)">
          <el-input v-model="formData.itDdeveloperActiveMonth" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDpublicCloudIndustrialAppTotal" label="基于平台开发的工业APP数量(个)">
          <el-input v-model="formData.itDpublicCloudIndustrialAppTotal" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDindustrialAppSubscribed" label="工业APP订阅总数量(次)">
          <el-input v-model="formData.itDindustrialAppSubscribed" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDindustrialAppRevenue" label="工业APP订阅总金额(万元)">
          <el-input v-model="formData.itDindustrialAppRevenue" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDindustrialAppActiveMonth" label="工业APP月活跃数量(个)">
          <el-input v-model="formData.itDindustrialAppActiveMonth" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDserviceParkTotal" label="服务园区总数(个)">
          <el-input v-model="formData.itDserviceParkTotal" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="itDsolutionTotal" label="解决方案总数(个)">
          <el-input v-model="formData.itDsolutionTotal" placeholder="请输入" type="number" />
        </el-form-item>
        <!-- <el-form-item prop="manufacturer" label="按新模式统计解决方案数量(个)">
          <el-input v-model="formData.manufacturer" placeholder="请输入" type="number" />
        </el-form-item> -->
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleCreateOrUpdate" :loading="loading">确认</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogVisiblesb" @closed="resetFormsb" width="30%">
      <el-form ref="formRefsb" :model="formDatasb" label-width="100px" label-position="left">
        <el-form-item prop="channelCode" label="通道编码">
          <el-input v-model="formDatasb.channelCode" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="channelNo" label="通道号">
          <el-input v-model="formDatasb.channelNo" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="channelName" label="通道名称">
          <el-input v-model="formDatasb.channelName" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="channelValue" label="通道值">
          <el-input v-model="formDatasb.channelValue" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="recordDateTime" label="记录时间">
          <el-date-picker
            v-model="formDatasb.recordDateTime"
            type="datetime"
            format="YYYY/MM/DD hh:mm:ss"
            value-format="YYYY-MM-DD hh:mm:ss"
            placeholder=""
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisiblesb = false">取消</el-button>
        <el-button type="primary" @click="handleCreateOrUpdate123" :loading="loading">确认</el-button>
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
:deep(.el-dialog) {
  .el-input__wrapper {
    background-color: white;
  }
}
:deep(.el-date-editor) {
  width: 100%;
}
</style>
