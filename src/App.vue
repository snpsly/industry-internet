<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
// 将 Element Plus 的语言设置为中文
import zhCn from "element-plus/es/locale/lang/zh-cn"
import { onMounted } from "vue"
import ws from "@/utils/websocket"
import { sha1 } from "js-sha1"
const { initTheme } = useTheme()
import axios from "axios"
/** 初始化主题 */
initTheme()
let num: any = localStorage.getItem("homeNum")
!num
  ? localStorage.setItem("homeNum", "5382")
  : num > 9000
    ? localStorage.setItem("homeNum", "5382")
    : localStorage.setItem("homeNum", (++num).toString())
// try {
//   axios
//     .post("http://zg-yzkj.com:27923/AccountService/Login", {
//       loginId: "",
//       tonce: Date.now(),
//       ciphertext: sha1("0" + Date.now() + "WSDstarenergy@201510"),
//       faceId: "",
//       code: "glcnys",
//       staffName: "13566289621",
//       password: "0dbd827d7eef5d2183f44f13f0bb8fa8"
//     })
//     .then((res) => {
//       localStorage.setItem("loginId", res.data.LoginID)
//       // ws.initWebSocket()
//     })
// } catch (err) {
//   console.log(err)
// }

onMounted(() => {})
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
