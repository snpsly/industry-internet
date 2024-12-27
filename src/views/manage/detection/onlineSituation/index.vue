<script lang="ts" setup>
import { reactive, ref, watch } from "vue"
import {
  createTableDataApi,
  deleteTableDataApi,
  updateTableDataApi,
  getTableDataApi,
  getTableDataApiId
} from "@/api/onlineSituation"
import { getTableDataApi as getdeviceTableApi } from "@/api/deviceTable"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/table/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
import { Search, Refresh, CirclePlus } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"
import { ElLoading } from "element-plus"
import { schemeNodeNameEnum } from "@/views/manage/selectList"
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
  username: [{ required: true, trigger: "blur", message: "请输入公有云设备日在线情况名" }],
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
  ElMessageBox.confirm(`正在删除公有云设备日在线情况，确认删除？`, "提示", {
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
const deviceTMenu = ref<any[]>([])
getdeviceTableApi().then((res) => {
  deviceTMenu.value = res.items.map((item: any) => {
    return {
      label: item.name,
      value: item.id
    }
  })
})
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="username" label="公有云设备日在线情况名">
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
          <el-button type="primary" :icon="CirclePlus" @click="dialogVisible = true"
            >新增公有云设备日在线情况</el-button
          >
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
          <el-table-column prop="recordDateTime" label="日期" align="center">
            <template #default="scope">
              {{ scope.row.recordDateTime }}
            </template>
          </el-table-column>
          <el-table-column prop="count" label="数量" align="center" />
          <el-table-column prop="equipmentTypeId" label="设备分类" align="center">
            <template #default="scope">
              <div>
                {{ deviceTMenu.find((item) => scope.row.equipmentTypeId === item.value).label }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="schemeNodeName" label="区域" align="center" />

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
      :title="formData.id === undefined ? '新增公有云设备日在线情况' : '修改公有云设备日在线情况'"
      @closed="resetForm"
      width="30%"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="100px" label-position="left">
        <el-form-item prop="recordDateTime" label="日期">
          <el-date-picker
            v-model="formData.recordDateTime"
            type="date"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder=""
          />
        </el-form-item>
        <el-form-item prop="count" label="数量">
          <el-input v-model="formData.count" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="equipmentTypeId" label="设备分类">
          <el-select v-model="formData.equipmentTypeId" placeholder="请选择">
            <el-option v-for="item in deviceTMenu" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item prop="schemeNodeName" label="区域">
          <el-select v-model="formData.schemeNodeName" placeholder="请选择">
            <el-option v-for="item in schemeNodeNameEnum" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
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
