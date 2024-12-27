<script lang="ts" setup>
import { ref, computed } from "vue"
import { createTableDataApi, deleteTableDataApi, updateTableDataApi } from "@/api/table"
import { getTableDataApi, indexgetTableDataApi } from "@/api/modelList"
import { type CreateOrUpdateTableRequestData, type GetTableData } from "@/api/table/types/table"
import { type FormInstance, type FormRules, ElMessage, ElMessageBox } from "element-plus"
//import { Search, Refresh, CirclePlus, Delete, Download, RefreshRight } from "@element-plus/icons-vue"
import { usePagination } from "@/hooks/usePagination"
import { cloneDeep } from "lodash-es"
import { useRouter } from "vue-router"
import { getFileUrl } from "@/utils/index"
import { industryModelClassificationEnum } from "@/views/manage/selectList"
defineOptions({
  // 命名当前组件
  name: "UserTable"
})

const loading = ref<boolean>(false)
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()
const router = useRouter()
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
const tableData = ref<any>([])
// const searchFormRef = ref<FormInstance | null>(null)
// const searchData = reactive({
//   username: "",
//   phone: ""
// })
const getTableData = () => {
  loading.value = true
  // tableData.value = [
  //   {
  //     id: 1,
  //     type: "研发仿真模型",
  //     word: "线圈电磁仿真",
  //     wrodComponent: "对线圈、动铁心、静铁心磁轭仿真，磁感应强度 B 数值分析、对电磁吸力大小进行分析。"
  //   },
  //   {
  //     id: 2,
  //     type: "研发仿真模型",
  //     word: "断路器机构运动仿真",
  //     wrodComponent:
  //       "对断路器机构触头的开距、超程、空行程、正压力力臂、回位余量、搭扣面、终压力、脱扣力、手柄合闸力矩的关键功能参数进行仿真分析。"
  //   },
  //   {
  //     id: 3,
  //     type: "研发仿真模型",
  //     word: "断路器的灭弧栅的灭弧仿真",
  //     wrodComponent: "基于断路器灭弧栅的仿真模型对气体速度和压强在各平面的断路器瞬时产生的电弧进行分析。"
  //   },
  //   {
  //     id: 4,
  //     type: "研发仿真模型",
  //     word: "功能尺寸分析",
  //     wrodComponent: "基于 TM 公差分析，对断路器的机构简图进行理论公差分析，优化机构设计，确保产品符合设计要求。"
  //   },
  //   {
  //     id: 5,
  //     type: "研发仿真模型",
  //     word: "TGW 系列框架断路器外壳模流核真分析",
  //     wrodComponent:
  //       "对TGW 系列框架断路器外壳利用流体力学理论计算流体在模具中的流动情况，包括流速、压力分布、摩擦力等，优化模具设计，提高产品质量和生产效率。"
  //   },
  //   {
  //     id: 6,
  //     type: "研发仿真模型",
  //     word: "用于断断器的弹簧应力仿真分析",
  //     wrodComponent:
  //       "基于模型的几何形状、材料属性、边界条件和约束条件等。通过对仿真模型的数值计算来模拟和预测断断器的弹簧应力和变形的情况，进行优化设计、分析材料性能和预测材料在实际应用中的行为。"
  //   },
  //   {
  //     id: 7,
  //     type: "研发仿真模型",
  //     word: "变频器的散热仿真分析",
  //     wrodComponent:
  //       "通过建立变频器的热仿真模型，对 IGBT 功率器件结温，封装外壳温度，系统散热、温度场及内部流体运动状态进行高效、准确、简便的定量分析"
  //   },
  //   { id: 8, type: "业务流程模型", word: "智能备料", wrodComponent: "根据生产任务单、三个率的数据准备相应的原材料。" },
  //   {
  //     id: 9,
  //     type: "业务流程模型",
  //     word: "产品检验",
  //     wrodComponent:
  //       "检验计划、检验上机登记、检验在线采集、检验三个率登记、检验条码生成及标签打印、检验工人交接班及班产统计。"
  //   },
  //   {
  //     id: 10,
  //     type: "业务流程模型",
  //     word: "设备状态监控",
  //     wrodComponent: "设备故障或其他原因造成的不生产情况一一记录，用于产量分析等数据审核"
  //   },
  //   {
  //     id: 11,
  //     type: "业务流程模型",
  //     word: "生产进展",
  //     wrodComponent:
  //       "统计了每天的计划生产量，实际生产量，达成率，正品量，完成率，不良数量，不良率，方便计划员和管理者了解每日的生产进度和生产状况"
  //   },
  //   { id: 12, type: "业务流程模型", word: "生产计划调整管理", wrodComponent: "可添加或删除计划，对生产计划进行管理" },
  //   {
  //     id: 13,
  //     type: "业务流程模型",
  //     word: "每日条线产量查询",
  //     wrodComponent: "可查询每个生产小组的详细生产状况，机器的正常运行率，产量能力，订单完成情况，原辅料在线情况等"
  //   },
  //   {
  //     id: 14,
  //     type: "业务流程模型",
  //     word: "每日规格生产现状",
  //     wrodComponent: "记录了每个规格的计划生产生产量，实际生产量，达成率，方便管理员了解每个规格的生产进度"
  //   },
  //   {
  //     id: 15,
  //     type: "业务流程模型",
  //     word: "模具管理",
  //     wrodComponent: "可以查询到模具的使用履历，方便模具管理者对模具进行管理以及使用情况查询"
  //   },
  //   {
  //     id: 16,
  //     type: "业务流程模型",
  //     word: "生产基础数据管理",
  //     wrodComponent: "基础信息维护，方便了信息维护人员对设备信息，工艺参数，以及各种标准更新维护"
  //   },
  //   {
  //     id: 17,
  //     type: "业务流程模型",
  //     word: "产品追溯",
  //     wrodComponent: "根据产品条码号查询到生产各工序信息，进行产品质量追溯。"
  //   },
  //   {
  //     id: 18,
  //     type: "业务流程模型",
  //     word: "质量管理",
  //     wrodComponent: "质量标准，根据各订单的质量要求进行质量检测的各种记录，方便了质检人员对质检标准和记录进行查询"
  //   },
  //   {
  //     id: 19,
  //     type: "业务流程模型",
  //     word: "原材料出库预约功能",
  //     wrodComponent:
  //       "出库时根据库存量预约，预约量不超过库存量（方便操作人员预约），出库单超过预约时间 48 小时未操作，系统能自动完成，预约后 48小时未出库的物料，系统自动删除等功能"
  //   },
  //   {
  //     id: 20,
  //     type: "业务流程模型",
  //     word: "供应商条码识别",
  //     wrodComponent:
  //       "供应商打印出原材料包装铭牌信息，仓库直接扫描供应商提供的条码可识别供应商公司信息和原料数量、重量、生产日期、批次号等信息"
  //   },
  //   {
  //     id: 21,
  //     type: "业务流程模型",
  //     word: "库区库存展示",
  //     wrodComponent: "根据仓库库区和具体库位实时展示存放的原材料信息"
  //   },
  //   {
  //     id: 22,
  //     type: "业务流程模型",
  //     word: "原材料抽检",
  //     wrodComponent: "随机抽取该批次的原材料，使用标准进行检验，检验结果代表该批次原材料的等级"
  //   },
  //   {
  //     id: 23,
  //     type: "业务流程模型",
  //     word: "原材料放行管控",
  //     wrodComponent: "根据设定的供应商原材料是否免检、是否抽检、是否符合临时放行条件进行入库操作"
  //   },
  //   {
  //     id: 24,
  //     type: "业务流程模型",
  //     word: "权限管理模块",
  //     wrodComponent:
  //       "可对 mes 界面的各个模块进行调整，添加或删除用户，修改用户权限管理，修改密码，这是管理 mes 的基本工具"
  //   },
  //   {
  //     id: 25,
  //     type: "业务流程模型",
  //     word: "生产现状监控",
  //     wrodComponent: "获取设备的当前状态并全部展现在 mes 中，可以让工厂管理者掌握设备的最新状态"
  //   },
  //   {
  //     id: 26,
  //     type: "业务流程模型",
  //     word: "日和班次交替",
  //     wrodComponent:
  //       "当日交替标记为1 时，则将1 下置到当前班次，同时将日交替和班次交替信号下载到 PLC， 当班次交替标记为 1 时，则将当前班次下置到 PLC，同时下置班次交替信号，实现现场的自动换班显示以及班计数和日计数重新开始"
  //   },
  //   {
  //     id: 27,
  //     type: "业务流程模型",
  //     word: "日和班次交替",
  //     wrodComponent:
  //       "当日交替标记为1 时，则将1 下置到当前班次，同时将日交替和班次交替信号下载到 PLC， 当班次交替标记为 1 时，则将当前班次下置到 PLC，同时下置班次交替信号，实现现场的自动换班显示以及班计数和日计数重新开始"
  //   },
  //   {
  //     id: 28,
  //     type: "业务流程模型",
  //     word: "日和班次交替",
  //     wrodComponent:
  //       "当日交替标记为1 时，则将1 下置到当前班次，同时将日交替和班次交替信号下载到 PLC， 当班次交替标记为 1 时，则将当前班次下置到 PLC，同时下置班次交替信号，实现现场的自动换班显示以及班计数和日计数重新开始"
  //   },
  //   {
  //     id: 29,
  //     type: "业务流程模型",
  //     word: "日和班次交替",
  //     wrodComponent:
  //       "当日交替标记为1 时，则将1 下置到当前班次，同时将日交替和班次交替信号下载到 PLC， 当班次交替标记为 1 时，则将当前班次下置到 PLC，同时下置班次交替信号，实现现场的自动换班显示以及班计数和日计数重新开始"
  //   },
  //   {
  //     id: 30,
  //     type: "行业机理模型",
  //     word: "月度生产计划预测",
  //     wrodComponent: "可预测月度生产计划，方便管理人员随时调整计划适应生产需要"
  //   },
  //   {
  //     id: 31,
  //     type: "行业机理模型",
  //     word: "设备状态监控",
  //     wrodComponent: "设备故障或其他原因造成的不生产情况一一记录，用于产量分析等数据审核"
  //   },
  //   {
  //     id: 32,
  //     type: "行业机理模型",
  //     word: "工艺报警检测",
  //     wrodComponent: "生产时，各个步序有不同的报警标准，报警产生后记录并传送到 MES，由此判断该轮胎是否报废"
  //   },
  //   {
  //     id: 33,
  //     type: "数据算法模型",
  //     word: "自动排产",
  //     wrodComponent: "据各工序对产品的熟练程度等能力数据，匹配"
  //   },
  //   {
  //     id: 34,
  //     type: "数据算法模型",
  //     word: "进先出管理",
  //     wrodComponent: "原料仓库扫码发货，根据先进先出原则进行扫描管控"
  //   },
  //   {
  //     id: 35,
  //     type: "数据算法模型",
  //     word: "原材料库存报警",
  //     wrodComponent: "根据设置的最低和最高库存重量，存放超期等，进行相关提醒服务"
  //   },
  //   {
  //     id: 36,
  //     type: "数据算法模型",
  //     word: "原材料安全库存报警",
  //     wrodComponent: "当在库存数据低于安全库存时，红色告警"
  //   },
  //   {
  //     id: 37,
  //     type: "数据算法模型",
  //     word: "AI 安全生产管控",
  //     wrodComponent: "视频监控、图像比对、自动报警....."
  //   }
  // ]
  paginationData.total = tableData.value.length
  loading.value = false
  indexgetTableDataApi({ MaxResultCount: 999 }).then((data) => {
    tableData.value = data
    paginationData.total = tableData.value.length
    loading.value = false
  })
  // getTableDataApi({
  //   currentPage: paginationData.currentPage,
  //   size: paginationData.pageSize
  // })
  //   .then(({ data }) => {
  //     paginationData.total = data.total
  //     tableData.value = data.list
  //   })
  //   .catch(() => {
  //     tableData.value = []
  //   })
  //   .finally(() => {
  //     loading.value = false
  //   })
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
const clickCell = (row: any, column: any, cell: HTMLTableCellElement, event: Event) => {
  if (column.label === "类型") {
    console.log(row)
    router.push({
      path: "/applicationMarket/modelLibrary",
      query: {
        id: row.word
      }
    })
  }
}
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
        <el-table :data="filterData" @cell-click="clickCell">
          <el-table-column type="index" align="center" label="序号" width="60" />
          <el-table-column prop="classificationName" label="类型" align="center" />
          <el-table-column prop="count" label="数量" align="center" />
          <!-- <el-table-column prop="wrodComponent" label="工业机理模型、微服务组件" align="center" /> -->
          <!-- <el-table-column prop="pictureFieldId" label="模型图标" align="center">
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
          </el-table-column> -->
          <!-- <el-table-column prop="name" label="模型名称" align="center" />
          <el-table-column prop="majorFunction" label="主要功能" align="center" />
          <el-table-column prop="industryModelClassification" label="分类" align="center">
            <template #default="scope">
              <div>
                {{
                  industryModelClassificationEnum.find((item) => scope.row.industryModelClassification === item.value)
                    .label
                }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="isCoreIndustrialModel" label="是否核心工业模型" align="center">
            <template #default="scope">
              <div>{{ scope.row.isCoreIndustrialModel ? "是" : "否" }}</div>
            </template>
          </el-table-column> -->
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
