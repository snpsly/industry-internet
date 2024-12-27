<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref } from "vue"
import { Search } from "@element-plus/icons-vue"
import type { TabsPaneContext } from "element-plus"

const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "ecosystem"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/sssssssssssssss/${imgUrl}`, import.meta.url).href
}

const imageList = [
  {
    name: "1.png"
  },
  {
    name: "2.png"
  },
  {
    name: "3.png"
  },
  {
    name: "4.png"
  },
  {
    name: "5.png"
  },
  {
    name: "123.png"
  },
  {
    name: "bg.png"
  }
]
setTheme("normal")

const activeName = ref("first")

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <div class="w-full relative h-100">
    <img :src="getUrl(imageList[6].name)" alt="" class="w-full h-full object-cover" />
    <div class="w-full py-20 absolute left-0 top-0">
      <div class="absolute top-10 left-30 text-white">
        <div class="font-600 text-5xl">天正天擎：根植智造、共创未来</div>
        <div class="mt-10 w-280 line-height-loose">
          源于天正电气二十年来在精益化、数字化上的经验，结合新一代信息技术和制造业的发展需求，以天正天擎工业互联网为基础
          ，在“供研产销服”各环节实现企业数字化转型，为企业降本增效助力。
          诚邀聚焦服务工业智能制造领域的合作伙伴，主打赛道包括工业互联网平台、企业数字化、工业AI三大方向，在互联网与实体产业的合作中，做好制造企业数字化的推动者、实践者，成为实体产业的引领者、助力者。
        </div>
      </div>
    </div>
  </div>

  <div class="bg-[#f2f2f2] h-4 w-full" />
  <div class="flex flex-col items-center py-10">
    <span class="font-600 text-3xl">合作伙伴类型</span>
    <el-tabs v-model="activeName" class="demo-tabs mt-10 w-80%" @tab-click="handleClick">
      <el-tab-pane label="平台服务类合作伙伴" name="first">
        <div class="w-full flex flex-row pt-2">
          <div class="h-140 w-200 flex-shrink-0">
            <img :src="getUrl(imageList[5].name)" alt="" class="object-cover w-full h-full" />
          </div>
          <div class="text-4 mt-4 line-height-loose ml-4">
            和合作伙伴一起做好产业数字化的支撑平台，围绕行业解决方案生态、技术平台生态和底层基础设施三个方向展开。
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="产学联合类合作伙伴" name="second">
        <div class="w-full flex flex-row pt-2">
          <div class="h-140 w-200 flex-shrink-0">
            <img :src="getUrl(imageList[5].name)" alt="" class="object-cover w-full h-full" />
          </div>
          <div class="text-4 mt-4 line-height-loose ml-4">
            具备为工业企业数字化转型提供设计、规划、诊断、咨询等能力的合作伙伴。通过生态共建，产业共创，发挥各自的优势，研讨跨产业、跨科技边界的融合创新。
          </div>
        </div></el-tab-pane
      >
      <el-tab-pane label="方案产品类合作伙伴" name="third">
        <div class="w-full flex flex-row pt-2">
          <div class="h-140 w-200 flex-shrink-0">
            <img :src="getUrl(imageList[5].name)" alt="" class="object-cover w-full h-full" />
          </div>
          <div class="text-4 mt-4 line-height-loose ml-4">
            具备为工业企业数字化转型提供设计、规划、诊断、咨询等能力的合作伙伴。通过生态共建，产业共创，发挥各自的优势，研讨跨产业、跨科技边界的融合创新。
          </div>
        </div></el-tab-pane
      >
    </el-tabs>
  </div>
  <div class="bg-[#f2f2f2] h-4 w-full" />
  <div class="flex flex-col items-center py-10">
    <span class="font-600 text-3xl mb-10">优秀合作伙伴</span>
    <div class="flex flex-wrap flex-row justify-center items-center bbbb">
      <div class="w-200 h-100 flex flex-row a p-8 ml-4 mb-4">
        <div class="w-40% flex-shrink-0">
          <img :src="getUrl(imageList[0].name)" alt="" class="object-contain w-full" />
        </div>
        <div class="flex-1">
          <div class="text-5 line-height-loose">智能电气产业大脑</div>
          <div class="text-4 line-height-loose">
            智能电气产业大脑，基于打造全球电气先进制造业集群的重大需要、加快电气产业数字化转型的关键需要、提高政府产业智能化治理能力的现实需要，依托乐清智能电气产业集群优势，
            以“全球营销网络+链主（龙头骨干企业）智造+社会化协同生产配套”为基础，按照“链主示范、生态共享、数据驱动、精确治理”的原则，聚焦端到端智造赋能、上下游供应链价值共享、政企数据贯通融合、产业运行健康预测预警四大领域，实现数据一库融合、能力一站赋能、场景一屏共享，全力打造辐射全国的智能电气行业数字化转型赋能平台。
          </div>
        </div>
      </div>
      <div class="w-200 h-100 flex flex-row a p-8 ml-4 mb-4">
        <div class="w-40% flex-shrink-0">
          <img :src="getUrl(imageList[1].name)" alt="" class="object-contain w-full" />
        </div>
        <div class="flex-1">
          <div class="text-5 line-height-loose">航天云网工业互联网</div>
          <div class="text-4 line-height-loose">
            航天云网工业互联网公共服务平台构筑全球领先且自主可控的国家工业互联网技术体系、标准体系和产业体系，旨在打造成我国制造强国、网络强国战略的支撑平台。基于INDICS+CMSS工业互联网公共服务平台，航天云网公司建设规划了以“平台总体架构、平台产品与服务、智能制造、工业大数据、网络与信息安全”5大板块为核心的“1+4”发展体系，以“互联网+智能制造”为支撑，面向社会提供“一脑一舱两室两站一淘金”服务，同步打造自主可控的工业互联网安全生态环境，建设云制造产业集群生态，构建适应互联网经济的制造业新业态。
          </div>
        </div>
      </div>
      <div class="w-200 h-100 flex flex-row a p-8 ml-4 mb-4">
        <div class="w-40% flex-shrink-0">
          <img :src="getUrl(imageList[2].name)" alt="" class="object-contain w-full" />
        </div>
        <div class="flex-1">
          <div class="text-5 line-height-loose">美云智数</div>
          <div class="text-4 line-height-loose">
            美云智数，依托美擎工业互联网平台，基于先进企业的业务实践，将管理实践软件产品化通过大数据、物联网、人工智能、云计算等技术为智能制造及产业互联提供工业软件及数字化咨询服务。
          </div>
        </div>
      </div>
      <div class="w-200 h-100 flex flex-row a p-8 ml-4 mb-4">
        <div class="w-40% flex-shrink-0">
          <img :src="getUrl(imageList[3].name)" alt="" class="object-contain w-full" />
        </div>
        <div class="flex-1">
          <div class="text-5 line-height-loose">研华科技</div>
          <div class="text-4 line-height-loose">
            研华科技是全球智能系统产业的领导厂商,以先进技术和可靠品质成为客户值得信赖的国际品牌,专注于自动化市场,嵌入式电脑市场及智能服务市场,联合多家合作伙伴形成了强大的技术服务和营销网络,为客户提供本土化的便捷服务.研华以智能地球的推手为企业使命,立志成为智能城市及物联网领域中最具关键影响力的全球企业。
          </div>
        </div>
      </div>
      <div class="w-200 h-100 flex flex-row a p-8 ml-4 mb-4">
        <div class="w-36% flex-shrink-0 mr-6">
          <img :src="getUrl(imageList[4].name)" alt="" class="object-contain w-full" />
        </div>
        <div class="flex-1">
          <div class="text-5 line-height-loose">鸣启科技</div>
          <div class="text-4 line-height-loose">
            鸣启数字科技专注于工业虚拟内容研发，首创“精益孪生”概念，将精益管理融入数字孪生场景，让企业高效自主建设数字孪生成为了现实。以自研工业数字孪生和工业元宇宙平台为核心，融合云计算、大数据分析、物联网、地理信息、人工智能等，形成了“零镜工厂”工业元宇宙平台，“DLT多维度精益孪生”内容创作平台，“DLT数据处理器”数据运算平台等多元化产品矩阵，帮助工业企业实现智能工厂转型。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tabs__nav-scroll) {
  text-align: center;
  display: flex;
  justify-content: center;
}
.el-scrollbar {
  height: 101%;
  :deep(.scrollbar-wrapper) {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      display: none;
    }
  }
}
:deep(.el-menu) {
  padding-right: 20px;
  .is-active {
    background-color: var(--el-color-primary);
  }
  .el-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
      background-color: var(--el-color-primary);
      color: white;
    }
  }
}
.text-desc {
  box-sizing: border-box;
  /*必须设置border宽度和样式*/
  border-bottom: 2px solid;
  /*设置线性渐变*/
  border-image: linear-gradient(
      90deg,
      rgba(25, 162, 255, 0) 0%,
      rgba(148, 148, 148, 0.3) 50%,
      rgba(25, 162, 255, 0) 100%
    )
    2 2 2 2;
}
.a {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.bbbb::after {
  content: "";
  width: 50rem;
  margin-left: 1rem;
}
</style>
