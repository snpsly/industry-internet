<template>
  <div>
    <el-form-item prop="recordDateTime" label="日期">
      <el-date-picker
        v-model="recordDateTime"
        type="datetime"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DD hh:mm:ss"
        placeholder=""
      />
    </el-form-item>
    <el-button type="primary" @click="click">查询(日)</el-button>
  </div>
  {{ list }}
  <div>
    <el-form-item prop="recordDateTime" label="日期">
      <el-date-picker
        v-model="recordDateTime1"
        type="datetime"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DD hh:mm:ss"
        placeholder=""
      />
    </el-form-item>
    <el-button type="primary" @click="click1">查询(月)</el-button>
  </div>
  {{ list1 }}
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from "vue"
import {
  createTableDataApi,
  deleteTableDataApi,
  updateTableDataApi,
  getTableDataApi,
  getTableDataApi1,
  getBMApi,
  getTableDataApiId
} from "@/api/demo"
const list = ref()
const list1 = ref()
const recordDateTime = ref(getCurrentDateTime())
const recordDateTime1 = ref(getCurrentDateTime())
const click = () => {
  getTableDataApi({ dateTime: recordDateTime.value }).then((res) => {
    console.log("🚀 ~ getTableDataApi ~ res:", res)
    list.value = res
  })
}
const click1 = () => {
  getTableDataApi1({ dateTime: recordDateTime1.value }).then((res) => {
    console.log("🚀 ~ getTableDataApi ~ res:", res)
    list1.value = res
  })
}

function getCurrentDateTime() {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, "0")
  const day = now.getDate().toString().padStart(2, "0")
  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")
  const seconds = now.getSeconds().toString().padStart(2, "0")
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
</script>
<style lang="scss" scoped></style>
