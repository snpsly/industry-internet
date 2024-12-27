<script lang="ts" setup>
import { reactive, ref, watch } from "vue"
import {
  createTableDataApi,
  deleteTableDataApi,
  updateTableDataApi,
  getTableDataApi,
  getTableDataApiId
} from "@/api/appRecord"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/appRecord/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
import { Search, Refresh, CirclePlus, Delete, Download, RefreshRight } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"
import { ElLoading } from "element-plus"
import { appTypeEnum, classificationEnum, cloudAttributeEnum } from "@/views/manage/selectList"
import { importFile } from "@/api/login"
import { getFileUrl } from "@/utils/index"
import type { UploadProps } from "element-plus"
defineOptions({
  // 命名当前组件
  name: "appList"
})

const loading = ref<boolean>(false)
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()

//#region 增
const DEFAULT_FORM_DATA: CreateOrUpdateTableRequestData = {
  id: undefined,
  name: "",
  source: "",
  appType: 0,
  majorFunction: "",
  classification: 0,
  isKillerApp: false,
  cloudAttribute: 0,
  amountMoney: 0,
  remark: "",
  pictureFieldId: "",
  casePicture_FileIds: [],
  pictureFieldList: [],
  pictureFieldList123: []
}
const dialogVisible = ref<boolean>(false)
const formRef = ref<FormInstance | null>(null)
const formData = ref<any>(cloneDeep(DEFAULT_FORM_DATA))
const formRules: FormRules<CreateOrUpdateTableRequestData> = {
  pictureFieldId: [{ required: true, trigger: "blur", message: "请添加图片" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }]
}
const handleCreateOrUpdate = () => {
  formRef.value?.validate((valid: boolean, fields) => {
    if (!valid) return console.error("表单校验不通过", fields)
    loading.value = true
    if (formData.value.pictureFieldId === "") formData.value.pictureFieldId = null
    // if (formData.value.casePicture_FileIds === "") formData.value.casePicture_FileIds = null
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
  ElMessageBox.confirm(`正在删除组件：${row.name}，确认删除？`, "提示", {
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
  getTableDataApiId(row.id).then((res) => {
    console.log("🚀 ~ getTableDataApiId ~ res:", res)
    formData.value = res
    console.log("🚀 ~ getTableDataApiId ~ formData:", formData)
    formData.value.pictureFieldList = []
    formData.value.pictureFieldList123 = []
    if (!formData.value.fileDownloadInfoModel) {
      return
    }
    formData.value.pictureFieldList.push({
      name: formData.value.fileDownloadInfoModel.expectedFileName,
      url: "api" + formData.value.fileDownloadInfoModel.downloadUrl
    })

    formData.value.pictureFieldList123 = formData.value.fileDownloadInfoModels_CasePicture.map((item: any) => {
      return {
        name: item.expectedFileName,
        url: "api" + item.downloadUrl,
        id: item.id
      }
    })
    dialogVisible.value = true
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
const handleRemove123 = (file, fileList) => {
  console.log("🚀 ~ handleRemove123 ~ fileList:", fileList)
  console.log("🚀 ~ handleRemove123 ~ file:", file.url)
  const match = file.url.match(/file\/([0-9a-fA-F-]{36})/)
  const uuid = match ? match[1] : null
  formData.value.casePicture_FileIds = formData.value.casePicture_FileIds.filter((item) => item !== uuid)
  formData.value.image = null
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisibleImage.value = true
}

const beforeUpload = (file) => {
  // const isJPG = file.type === "image/jpeg"
  // const isLT2M = file.size / 1024 / 1024 < 2
  // if (!isJPG) {
  //   ElMessageBox.alert("上传头像图片只能是 JPG 格式!")
  // }
  // if (!isLT2M) {
  //   ElMessageBox.alert("上传头像图片大小不能超过 2MB!")
  // }
  // return isJPG && isLT2M
}

// const handleSuccess = (response, file, fileList) => {
//   console.log(response, file, fileList)
// }
const imageUrl = ref("")

const handleSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  formData.value.image = URL.createObjectURL(uploadFile.raw!)
}
const uploadFile = (param: any) => {
  loading.value = true
  const formData1 = new FormData()
  formData1.append("File", param.file)
  formData1.append("FileContainerName", "default")
  importFile(formData1)
    .then((res) => {
      formData.value.pictureFieldId = res.fileInfo.id
    })
    .finally(() => {
      loading.value = false
    })
}
const uploadFile123 = (param: any) => {
  loading.value = true
  const formData1 = new FormData()
  formData1.append("File", param.file)
  formData1.append("FileContainerName", "default")
  importFile(formData1)
    .then((res) => {
      console.log("🚀 ~ .then ~ res.fileInfo.id:", res.fileInfo.id)

      if (!formData.value.casePicture_FileIds) {
        formData.value.casePicture_FileIds = []
      }
      console.log("🚀 ~ .then ~ formData.value.casePicture_FileIds:", formData.value.casePicture_FileIds)

      formData.value.casePicture_FileIds.push(res.fileInfo.id)
      console.log("🚀 ~ .then ~ formData.value.casePicture_FileIds:", formData.value.casePicture_FileIds)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="username" label="组件名">
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
          <el-button type="primary" :icon="CirclePlus" @click="dialogVisible = true">新增</el-button>
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
          <el-table-column prop="pictureFieldId" label="组件图标" align="center">
            <template #default="scope">
              <div>
                <el-image
                  style="width: 100px; height: 100px"
                  :src="getFileUrl(scope.row.fileDownloadInfoModel ? scope.row.fileDownloadInfoModel.downloadUrl : '')"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="[scope.row.img]"
                  :initial-index="4"
                  fit="cover"
                />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="组件名称" align="center" />
          <el-table-column prop="source" label="来源" align="center" />
          <el-table-column prop="appType" label="类别" align="center">
            <template #default="scope">
              <div>
                {{ appTypeEnum ? appTypeEnum.find((item) => scope.row.appType === item.value)?.label : "" }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="majorFunction" label="组件简介" align="center" />
          <el-table-column prop="classification" label="分类" align="center">
            <template #default="scope">
              <div>
                {{
                  classificationEnum
                    ? classificationEnum.find((item) => scope.row.classification === item.value)?.label
                    : ""
                }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="isKillerApp" label="是否杀手锏APP" align="center">
            <template #default="scope">
              <div>{{ scope.row.isKillerApp ? "是" : "否" }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="cloudAttribute" label="云属性" align="center">
            <template #default="scope">
              <div>
                {{ cloudAttributeEnum.find((item) => scope.row.cloudAttribute === item.value)?.label }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="amountMoney" label="金额" align="center" />
          <el-table-column prop="remark" label="备注" align="center" />
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
      :title="formData.id === undefined ? '新增组件' : '修改组件'"
      @closed="resetForm"
      width="30%"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="150px" label-position="left">
        <el-form-item label="图片" prop="pictureFieldId">
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
        <el-form-item label="案例" prop="casePicture_FileIds">
          <el-upload
            action="api/file-management/temporary-file/upload-temporary-file"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove123"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :http-request="uploadFile123"
            :file-list="formData.pictureFieldList123"
          >
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
          <!-- <el-dialog v-model="dialogVisibleImage">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog> -->
        </el-form-item>
        <el-form-item prop="name" label="组件名称">
          <el-input v-model="formData.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="source" label="来源">
          <el-input v-model="formData.source" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="appType" label="类别">
          <el-select v-model="formData.appType" placeholder="请选择">
            <el-option v-for="item in appTypeEnum" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item prop="majorFunction" label="主要功能">
          <el-input v-model="formData.majorFunction" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="classification" label="分类">
          <el-select v-model="formData.classification" placeholder="请选择">
            <el-option v-for="item in classificationEnum" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item prop="isKillerApp" label="是否杀手锏APP">
          <el-switch v-model="formData.isKillerApp" size="large" active-text="是" inactive-text="否" />
        </el-form-item>
        <el-form-item prop="cloudAttribute" label="云属性">
          <el-select v-model="formData.cloudAttribute" placeholder="请选择">
            <el-option v-for="item in cloudAttributeEnum" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item prop="amountMoney" label="金额">
          <el-input v-model="formData.amountMoney" placeholder="请输入" type="number" />
        </el-form-item>
        <el-form-item prop="remark" label="备注">
          <el-input v-model="formData.remark" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="deliveryMethod" label="交付方式">
          <el-input v-model="formData.deliveryMethod" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="componentVersion" label="组件版本">
          <el-input v-model="formData.componentVersion" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="componentUsageLink" label="组件使用链接">
          <el-input v-model="formData.componentUsageLink" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="componentTrialLink" label="组件试用链接">
          <el-input v-model="formData.componentTrialLink" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="componentUsageRequirements" label="组件使用需求">
          <el-input v-model="formData.componentUsageRequirements" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="targetUserGroup" label="目标用户群体">
          <el-input v-model="formData.targetUserGroup" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="resolvePainPoints" label="解决痛点">
          <el-input v-model="formData.resolvePainPoints" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="applicationIntroduction" label="应用介绍">
          <el-input v-model="formData.applicationIntroduction" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="frequentlyAskedQuestion" label="常见问题">
          <el-input v-model="formData.frequentlyAskedQuestion" placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="publisher" label="发布者">
          <el-input v-model="formData.publisher" placeholder="请输入" />
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
:deep(.el-dialog) {
  .el-input__wrapper {
    background-color: white;
  }
}
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
