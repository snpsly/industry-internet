<script lang="ts" setup>
import { useRouter } from "vue-router"
import { shallowRef } from "vue"
import type { TabsPaneContext } from "element-plus"
import { useTheme } from "@/hooks/useTheme"

const { setTheme } = useTheme()
const router = useRouter()
setTheme("normal")
const imageListGovernment = shallowRef([
  {
    url: "sou01.png",
    link: "https://www.zhidiancloud.com/store/storeView/93"
  },
  {
    url: "sou02.png",
    link: "https://www.zhidiancloud.com/store/storeView/104"
  },
  {
    url: "sou03.png",
    link: "https://www.zhidiancloud.com/store/storeView/21"
  },
  {
    url: "sou04.png",
    link: "https://www.zhidiancloud.com/store/storeView/58"
  },
  {
    url: "sou05.png",
    link: "https://www.zhidiancloud.com/store/storeView/103"
  },
  {
    url: "sou06.png",
    link: "https://www.zhidiancloud.com/store/storeView/106"
  },
  {
    url: "sou07.png",
    link: "https://www.zhidiancloud.com/store/storeView/42"
  },
  {
    url: "sou08.png",
    link: "https://www.zhidiancloud.com/store/storeView/43"
  },
  {
    url: "sou09.png",
    link: "https://www.zhidiancloud.com/store/storeView/107"
  }
])
const imageListEcology = shallowRef([
  {
    url: "sou10.png",
    link: "https://www.zhidiancloud.com/store/storeView/102"
  },
  {
    url: "sou11.png",
    link: "https://www.zhidiancloud.com/store/storeView/40"
  }
])
const imageListSmart = shallowRef([
  {
    url: "sou12.png",
    link: "https://www.zhidiancloud.com/store/storeView/101"
  },
  {
    url: "sou13.png",
    link: "https://www.zhidiancloud.com/store/storeView/100"
  }
])
const imageListSmart1 = shallowRef([
  {
    url: "sou14.png",
    link: "https://www.zhidiancloud.com/store/storeView/105"
  }
])
const imageListSmart2 = shallowRef([
  {
    url: "sou15.png",
    link: "https://www.zhidiancloud.com/store/storeView/59"
  }
])
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/solution/${imgUrl}`, import.meta.url).href
}
const goLink = (link: string) => {
  window.open(link, "_blank")
}
const tabClick = (pane: TabsPaneContext) => {
  switch (pane.props.label) {
    case "企业上云服务":
      router.push("/qysyfw")
      break
    case "检修服务":
      router.push("/jxfw")
      break
    case "物流服务":
      router.push("/wlfw")
      break
    case "融资租凭服务":
      router.push("/rzzpfw")
      break
    case "工业互联网微服务":
      router.push("/gyhlwwfw")
      break
  }
}
const goBack = () => {
  router.back()
}
defineOptions({
  // 命名当前组件
  name: "application"
})
</script>

<template>
  <div class="text-4xl flex p-4 font-800">
    解决方案服务<el-button type="primary" @click="goBack" class="ml-auto">返回</el-button>
  </div>
  <el-tabs :tab-position="'left'" class="demo-tabs" @tab-click="tabClick">
    <el-tab-pane label="工业软件">
      <div>
        <img
          :src="getUrl(item.url)"
          alt=""
          v-for="item in imageListGovernment"
          :key="item.link"
          @click="goLink(item.link)"
          class="cursor-pointer ml-4 mb-4"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="分销软件">
      <div>
        <img
          :src="getUrl(item.url)"
          alt=""
          v-for="item in imageListEcology"
          :key="item.link"
          @click="goLink(item.link)"
          class="cursor-pointer ml-4 mb-4"
        /></div
    ></el-tab-pane>
    <el-tab-pane label="财务软件">
      <div>
        <img
          :src="getUrl(item.url)"
          alt=""
          v-for="item in imageListSmart"
          :key="item.link"
          @click="goLink(item.link)"
          class="cursor-pointer ml-4 mb-4"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="工业安全">
      <div>
        <img
          :src="getUrl(item.url)"
          alt=""
          v-for="item in imageListSmart1"
          :key="item.link"
          @click="goLink(item.link)"
          class="cursor-pointer ml-4 mb-4"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="精益生产">
      <div>
        <img
          :src="getUrl(item.url)"
          alt=""
          v-for="item in imageListSmart2"
          :key="item.link"
          @click="goLink(item.link)"
          class="cursor-pointer ml-4 mb-4"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="企业上云服务" />
    <el-tab-pane label="检修服务" />
    <el-tab-pane label="物流服务" />
    <el-tab-pane label="融资租凭服务" />
    <el-tab-pane label="工业互联网微服务" />
  </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
  width: 400px;
}
body {
  background-color: #f0f2f5 !important;
}
</style>
