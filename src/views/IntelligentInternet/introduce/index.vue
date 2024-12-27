<script lang="ts" setup>
import { useRouter } from "vue-router"
const router = useRouter()
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref, defineAsyncComponent, onMounted } from "vue"
import type { Component } from "vue"
import { getfl, getfltotal } from "@/api/newApi123"
import { getfl as getflnew, getfltotal as getfltotalnew } from "@/api/newApi"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "introduce"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/IntelligentInternet/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "introduce1.jpg"
  },
  {
    name: "introduce2.png"
  },
  {
    name: "introduce3.png"
  }
]

setTheme("normal")
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}
const num = ref({
  a: 0,
  b: 0
})
const arr = ref([])
const arrnew = ref([])
onMounted(() => {
  getfltotal().then((res) => {
    num.value.b = res
  })
  getfl().then((res) => {
    arr.value = res
  })
  getfltotalnew().then((res) => {
    num.value.a = res
  })
  getflnew().then((res) => {
    arrnew.value = res
  })
  // getTableDataApi123().then((res: any) => {
  //   num.value.a = res.displayOrder
  //   num.value.b = res.displayOrder
  // })
})
</script>

<template>
  <div class="relative text-white">
    <div class="w-full h-90">
      <img :src="getUrl(imageList[0].name)" class="w-full h-full object-cover" alt="" />
    </div>
    <div class="absolute top-10 left-30 text-white">
      <div class="font-600 text-5xl">物联方案介绍</div>
      <div class="mt-10 w-160 line-height-loose">
        天正智慧物联平台是一款物联网一体化平台，优势是高性能、高吞吐量、高扩展性!单机可以支持百万链接，同时支持自定义扩展功能，功能非常强大，支持插件化开发集成，提供采集、转换、处理和传输不同1商品牌工业设备数据、工厂OT组网和通信协议转化等功能模块。已连接设备超过1800台(套)，连接数据采集点超过8万个。
      </div>
    </div>
  </div>
  <div class="px-28 pb-50">
    <div class="text-center mt-4">
      <span class="cursor-pointer" @click="scrollToSection('section1')"> 总体架构 </span>
      <span class="ml-16 cursor-pointer" @click="scrollToSection('section2')">技术特性</span>
      <span class="ml-16 cursor-pointer" @click="scrollToSection('section3')">功能架构</span>
      <span class="ml-16 cursor-pointer" @click="scrollToSection('section4')">主要功能</span>
    </div>
    <ProjectTitle :title="'总体架构'" class="mt-8" id="section1" />
    <div class="w-60% mx-auto mt-4">
      <img :src="getUrl(imageList[1].name)" class="w-full object-contain" alt="" />
    </div>
    <ProjectTitle :title="'技术特性'" class="mt-8" id="section2" />
    <div class="flex flex-col pl-14 mt-8 h-2xl justify-between">
      <span>完全响应式布局(支持电脑、平板、手机等所有主流设备)支持多数据源，简单配置即可实现切换。</span>
      <span>支持按钮及数据权限，可自定义部门数据权限</span>
      <span> 对常用is插件进行二次封装，is代码变得简洁，更加易维护 </span>
      <span> 完善的XSS防范及脚本过滤，彻底杜绝XSS攻击 </span>
      <span> Maven多项目依赖，模块及插件分项目，尽量松耦合，方便模块升级、增减模块 </span>
      <span> 国际化支持，服务端及客户端支持 </span>
      <span> 完善的日志记录体系简单注解即可实现 支持服务监控，数据监控，缓存监控功能。 </span>
      <span>
        设备集成:设备管理(支持MQTT协议、WebSocket协议、TCPP协议设备接入)
        、子设备管理、产品管理、协议管理、规测擎(设备联动)
      </span>
      <span> 设备调试:实时日志、命令下发 规侧擎 </span>
      <span>
        消息转发:支持KAFKA节点、HTTP节点、PREDICATE节点、ROCKET MQ节点、 RABBIT
        MQ节点、MYSOL节点、MQTT节点、TOPIC节点、LOG节点
      </span>
    </div>
    <ProjectTitle :title="'功能架构'" class="mt-8" id="section3" />
    <div class="w-60% mx-auto mt-4">
      <img :src="getUrl(imageList[2].name)" class="w-full object-contain" alt="" />
    </div>
    <ProjectTitle :title="'主要特性'" class="mt-8" id="section4" />
    <div class="flex flex-col pl-14 mt-8 h-[320px] justify-between">
      <div>
        <span class="font-600">系统管理:</span>
        用户管理、角色管理、菜单管理、部门管理、岗位管理、字典管理、参数设置、通知公告、日志管理
      </div>
      <div><span class="font-600">系统监控:</span>在线用户、定时任务、任务调度管理</div>
      <div>
        <span class="font-600">设备集成:</span>设备管理(支持MQTT协议、WebSocket协议、TCP-P协议设备接入)
        、子设备管理、产品管理、协议管理、规则引(设备联动)
      </div>
      <div><span class="font-600">设备调试：</span> 实时日志、命令下发</div>
      <div>
        <span class="font-600">规掌消息转发:</span> 支持KAFKA节点、HTTP节点、PREDICATE节点、ROCKET MQ节点、RABBIT
        MQ节点、MYSQL节点、MQTT节点、TOPIC节点、LOG节点
      </div>
    </div>
    <ProjectTitle :title="'连接数量'" class="mt-8" />
    <div class="flex flex-col pl-14 mt-8 h-[80px] justify-between">
      <div class="flex flex-row flex-wrap w-full">
        <div><span class="font-600">设备数:</span>{{ num.a }}</div>
        <div v-for="item in arrnew" :key="item" class="ml-4">
          <span class="font-600">{{ item.equipmentTypeName }}:</span>{{ item.count }}
        </div>
      </div>
      <div class="flex flex-row flex-wrap w-full">
        <div><span class="font-600">产品数:</span>{{ num.b }}</div>
        <div v-for="item in arr" :key="item" class="ml-4">
          <span class="font-600">{{ item.monitorProductTypeName }}:</span>{{ item.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
