<script lang="ts" setup>
import { shallowRef } from "vue"
import { useTheme } from "@/hooks/useTheme"
import { useRouter } from "vue-router"
const router = useRouter()
const { setTheme } = useTheme()
setTheme("normal")
const imageListGovernment = shallowRef([
  {
    url: "app01.png",
    link: "https://ysyth.yueqing.gov.cn/gyydxm-front/login"
  },
  {
    url: "app02.png",
    link: " https://qymgw.jxt.zj.gov.cn/web/companyDeclare"
  },
  {
    url: "app03.png",
    link: "https://xzz.jxt.zj.gov.cn/computer/web/index"
  },
  {
    url: "app04.png",
    link: "https://reward.wenzhou.gov.cn/app/apply_list/"
  },
  {
    url: "app05.png",
    link: "https://www.zhidiancloud.com/user/login"
  },
  {
    url: "app06.png",
    link: "https://www.zhidiancloud.com/user/login"
  },
  {
    url: "app07.png",
    link: "https://www.zhidiancloud.com/user/login"
  },
  {
    url: "app08.png",
    link: "https://yqjxdsjxt.yueqing.gov.cn/gy_mjlyx/Auth/Login.aspx"
  },
  {
    url: "app09.png",
    link: "https://www.zhidiancloud.com/user/login"
  },
  {
    url: "app10.png",
    link: "https://www.zhidiancloud.com/user/login"
  },
  {
    url: "app11.png",
    link: "https://www.wzjrfw.com/"
  },
  {
    url: "app12.png",
    link: "https://zndqcydn.yueqing.gov.cn/yq-brain/#/companyChunk/IndustryUpDownStreamHealth"
  },
  {
    url: "app13.png",
    link: "https://zndqcydn.yueqing.gov.cn/yq-brain/#/companyChunk/sentimentMonitoring"
  }
])
const imageListEcology = shallowRef([
  {
    url: "app14.png",
    link: "https://www.zhidiancloud.com/application/inspection/index?articleSource=5"
  },
  {
    url: "app15.png",
    link: "https://www.czbank.com/cn/other2/shendai/shendai01.html"
  },
  {
    url: "app16.png",
    link: "https://www.zhidiancloud.com/cloudClass/list"
  },
  {
    url: "app17.png",
    link: "https://www.zhidiancloud.com/application/sharedLab/list?articleSource=5"
  },
  {
    url: "app18.png",
    link: "https://www.zhidiancloud.com/application/corporatePortrait/index?articleSource=5"
  },
  {
    url: "app19.png",
    link: "https://www.zhidiancloud.com/application/serviceView/d34ef483056040fcae33bb44391a1618?categoryId=1dc15d4363314e9ebf5497901cae89d3&pageId=9714e2605db84b28b4071a46b599dd74"
  },
  {
    url: "app20.png",
    link: "https://www.zhidiancloud.com/application/serviceView/114bc329c3914093a4fcf61b2e297a9c?categoryId=e55cdf8487c24047b3a16404ab1b4f6a&pageId=83552df4346141b8b23d1a9a447259bd"
  },
  {
    url: "app21.png",
    link: "https://www.zhidiancloud.com/application/serviceView/6952467aa2a043abb1661907fa5b56da?categoryId=67bde3057cc6469699df97220de18568&pageId=82e5f466b41c4ea1a96eec05b33c03cf"
  },
  {
    url: "app22.png",
    link: "https://www.zhidiancloud.com/application/serviceView/868dc9c5bfe946a48a203253ada8fd12?categoryId=5096b49294b04609861f7f58bfa9bc08&pageId=bc66f6853cea41208d1beee840844eb5"
  },
  {
    url: "app23.png",
    link: "https://www.zhidiancloud.com/user/login"
  },
  {
    url: "app24.png",
    link: "https://www.zhidiancloud.com/application/serviceView/7fd059e78dd344ab914dc2d3bb8a23c6?categoryId=d512b94a46de4ac98d944e13223cfd79&pageId=7c25a77ba92440b591bcb4256fd4022e"
  }
])
const imageListSmart = shallowRef([
  {
    url: "app25.png",
    link: "https://www.zhidiancloud.com/application/serviceView/c2964a71d27d4a759003fc176ccdc5f7?categoryId=bc6d53fbdd0a48bdbeb067b92846d578&pageId=d2aee88064b74acdb872b02b78ace3a5"
  },
  {
    url: "app26.png",
    link: " https://www.zhidiancloud.com/application/serviceView/95eb260fcd7742a6bdcfe466aeed7013?categoryId=39fffcf48bf74f4882f535b06ca56219&pageId=2543e366f3bf4aa29b98448dd6246035"
  },
  {
    url: "app27.png",
    link: "https://www.zhidiancloud.com/application/serviceView/907689eb7d354ac5bf5f868da1805022?categoryId=3788d134b818469c9d4b279f1efdcb4f&pageId=06ffa667ebb34475a89e6cc3162de97d"
  },
  {
    url: "app28.png",
    link: "https://www.zhidiancloud.com/application/serviceView/8ac9c459a0774e7287e673840a2ff982?categoryId=4683ba8c654647a1a7ebec06cc5791c4&pageId=005f6fa0de0349ff980818783723328b"
  },
  {
    url: "app29.png",
    link: "https://www.zhidiancloud.com/application/serviceView/a9c15c99dfef488fb153d8d333ed08c2?categoryId=27f4f074c3db4f69817dee2d086ef94a&pageId=3ce1108acaf0469b933dbb95a6305e56"
  },
  {
    url: "app30.png",
    link: "https://www.zhidiancloud.com/application/serviceView/e00807b99958470c8fcf74988f5fa814?categoryId=96318cf3ac1342a7826d68165479fb76&pageId=27c33e6a9a5c4c2889e882dbb161da95"
  },
  {
    url: "app31.png",
    link: "https://www.zhidiancloud.com/application/serviceView/0fd700200a184530a40b11d7e095d115?categoryId=b5337bf34f9c4236be7e0213eff0f57e&pageId=27f32aefb6da4b6087c138df9e023cfc"
  },
  {
    url: "app32.png",
    link: "https://www.zhidiancloud.com/application/serviceView/071a47f3e70040aab9d74c4f9fa4e61c?categoryId=1843da57214340b0a66a8e97291490a0&pageId=32ca3b0e8d73469aa91254430353075d"
  },
  {
    url: "app33.png",
    link: "https://www.zhidiancloud.com/application/serviceView/2c4aed9a0af94139adeae2650a1caec0?categoryId=319ad85ec7df47598ca227d6d5d39922&pageId=aa869e6dc6bb47fab60c7a3ff1ca4fec"
  },
  {
    url: "app34.png",
    link: "https://www.zhidiancloud.com/application/serviceView/d23a2759caf44a29eb5aaad5c15865c85?categoryId=891cde6d9baa4508a64f0dad12608f37&pageId=478e980dd0e24f31b801863e81411245"
  },
  {
    url: "app35.png",
    link: "https://www.zhidiancloud.com/application/serviceView/e64f0f1e24214686a97c9143199585a0?categoryId=60346a4cfa07442691ecf05ae5b05a8e&pageId=cb0133de22c549a68a90499b55840925"
  },
  {
    url: "app36.png",
    link: "https://www.zhidiancloud.com/application/serviceView/c7e18cb9d2644cfab3f31848b0f7cbd6?categoryId=a4ac787560694eba89231b7361e1a7df&pageId=e33d00212cf24d6687599cbfdb662499"
  }
])
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/application/${imgUrl}`, import.meta.url).href
}
const goLink = (link: string) => {
  window.open(link, "_blank")
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
  <div class="text-4xl font-800 flex p-4">
    产业链服务 <el-button type="primary" @click="goBack" class="ml-auto">返回</el-button>
  </div>
  <el-tabs :tab-position="'left'" class="demo-tabs">
    <el-tab-pane label="政府应用">
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
    <el-tab-pane label="生态服务">
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
    <el-tab-pane label="智造服务">
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
