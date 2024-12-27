<script lang="ts" setup>
import { reactive, ref, watch } from "vue"
import { createTableDataApi, deleteTableDataApi, updateTableDataApi, getTableDataApi } from "@/api/productTypes"
import { importFile } from "@/api/login"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/table/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
import { Search, Refresh, CirclePlus } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"
import { ElLoading } from "element-plus"
import { getFileUrl } from "@/utils/index"
defineOptions({
  // 命名当前组件
  name: "productTypes"
})

const loading = ref<boolean>(false)
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()

//#region 增
const DEFAULT_FORM_DATA: any = {
  id: undefined,
  name: "",
  model: "",
  amountMoney: "",
  pictureFieldId: "",
  pictureFieldList: []
}
const dialogVisible = ref<boolean>(false)
const formRef = ref<FormInstance | null>(null)
const formData = ref<CreateOrUpdateTableRequestData>(cloneDeep(DEFAULT_FORM_DATA))
const formRules: FormRules<CreateOrUpdateTableRequestData> = {
  pictureFieldId: [{ required: true, trigger: "blur", message: "请添加图片" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }]
}
const handleCreateOrUpdate = () => {
  formRef.value?.validate((valid: boolean, fields) => {
    if (!valid) return console.error("表单校验不通过", fields)
    loading.value = true
    if (formData.value.pictureFieldId === "") formData.value.pictureFieldId = null
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
  ElMessageBox.confirm(`正在删除产品类型：${row.name}，确认删除？`, "提示", {
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
  formData.value.pictureFieldList = []
  if (!formData.value.fileDownloadInfoModel) {
    return
  }
  formData.value.pictureFieldList.push({
    name: formData.value.fileDownloadInfoModel.expectedFileName,
    url: "api" + formData.value.fileDownloadInfoModel.downloadUrl
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
    username: searchData.username || undefined,
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
    loading.close()
  }
}
const downloadFile = () => {}
const dialogVisibleImage = ref(false)
const dialogImageUrl = ref("")

const handleRemove = (file, fileList) => {
  formData.value.image = null
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisibleImage.value = true
}

const beforeUpload = (file) => {}
const imageUrl = ref("")

const handleSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  formData.value.image = URL.createObjectURL(uploadFile.raw!)
}
const uploadFile = (param) => {
  loading.value = true
  const formData1 = new FormData()
  formData1.append("File", param.file)
  formData1.append("FileContainerName", "default")
  importFile(formData1)
    .then((res) => {
      formData.value.pictureFieldId = res.fileInfo.id
      // formData.value.pictureFieldList.push(import.meta.env.VITE_BASE_API + res.downloadInfo.downloadUrl)
    })
    .finally(() => {
      loading.value = false
    })
  // uploadFileApi(formData)
  //   .then((res) => {
  //   })
  //   .catch((res) => {
  //   })
}
// const uploadHeader = {
//   "Content-Type": "application/json"
// }
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="username" label="产品类型名">
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
          <el-button type="primary" :icon="CirclePlus" @click="dialogVisible = true">新增产品类型</el-button>
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
          <el-table-column prop="name" label="产品类型名" align="center" />
          <el-table-column prop="model" label="产品型号" align="center" />
          <el-table-column prop="amountMoney" label="金额" align="center">
            <template #default="scope">
              {{ parseInt(scope.row.amountMoney).toFixed(2) }}
            </template>
          </el-table-column>
          <el-table-column prop="pictureFieldId" label="产品图片" align="center">
            <template #default="scope">
              <div>
                <el-image
                  style="width: 100px; height: 100px"
                  :src="getFileUrl(scope.row.fileDownloadInfoModel ? scope.row.fileDownloadInfoModel.downloadUrl : '')"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :initial-index="4"
                  fit="cover"
                />
              </div>
            </template>
          </el-table-column>
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
      :title="formData.id === undefined ? '新增产品类型' : '修改产品类型'"
      @closed="resetForm"
      width="30%"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="100px" label-position="left">
        <el-form-item prop="name" label="产品类型名">
          <el-input v-model="formData.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="model" label="产品型号">
          <el-input v-model="formData.model" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="amountMoney" label="金额">
          <el-input v-model="formData.amountMoney" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="图片" prop="">
          <el-upload
            action="api/file-management/temporary-file/upload-temporary-file"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :http-request="uploadFile"
            :file-list="formData.pictureFieldList"
            :limit="1"
          >
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
          <el-dialog v-model="dialogVisibleImage">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog>
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
:deep(.el-dialog) {
  .el-input__wrapper {
    background-color: white;
  }
}
</style>
