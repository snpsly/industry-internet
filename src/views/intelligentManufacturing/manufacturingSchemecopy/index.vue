<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "manufacturingScheme"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/1029/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "1.jpg"
  },
  {
    name: "2.jpg"
  },
  {
    name: "3.jpg"
  },
  {
    name: "4.jpg"
  },
  {
    name: "5.jpg"
  },
  {
    name: "6.jpg"
  },
  {
    name: "manufacturingScheme7.jpg"
  },
  {
    name: "manufacturingScheme8.jpg"
  }
]
const currentItem = ref(1)
const itemEnter = (index: number) => {
  console.log(index)
  currentItem.value = index
}
setTheme("normal")
const goPush = (path: string) => {
  if (path.includes("http")) {
    window.open(path, "_blank")
    return
  }
  // const url = router.resolve({ name: path }).href
  // window.open(url, "_blank")
  router.push(path)
}
</script>

<template>
  <div class="relative">
    <img :src="getUrl(imageList[0].name)" alt="" />
    <div class="absolute top-10 left-30 text-white">
      <div class="font-600 text-5xl">系统化解决方案</div>
      <div class="mt-10 w-160 line-height-loose">
        通过整合各种资源和技术，为特定问题提供全面、协调且高效的解决策略。它旨在优化流程、提高效率并确保长期的可持续发展。
      </div>
    </div>
  </div>
  <div class="px-28 pb-50">
    <div class="w-full flex flex-col justify-between items-center mt-8" @click="goPush('/twelve/three')">
      <div class="flex flex-row w-full bg-[rgba(240,242,242,1)] py-4 px-8">
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'智能化生产'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">SUPPLIER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              利用自动化、信息化和人工智能技术，将传统制造过程升级为高效、灵活且精准的生产模式。通过数据驱动决策、机器学习优化流程以及物联网连接设备，实现从设计到交付全链条的智能管理和控制。
            </div>
          </div>
        </div>
        <div class="h-[273px] flex ml-auto">
          <img :src="getUrl(imageList[1].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div
      class="w-full flex flex-col justify-between items-center mt-8"
      @click="goPush('https://dmc.tengen.com.cn/pcweb')"
    >
      <div class="flex flex-row w-full bg-[rgba(240,242,242,1)] py-4 px-8">
        <div class="h-[273px] flex mr-30">
          <img :src="getUrl(imageList[2].name)" class="h-full object-contain" alt="" />
        </div>
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'服务化延伸'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">DEALER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              企业不仅提供产品，还围绕产品提供一系列增值服务，如安装、维修、咨询等，以增强客户体验和满意度。这种模式帮助企业从单纯的销售产品转向建立长期的客户关系，并通过持续的服务创造更多价值。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col justify-between items-center mt-8" @click="goPush('/twelve/eleven')">
      <div class="flex flex-row w-full bg-[rgba(240,242,242,1)] py-4 px-8">
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'网络化协调'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">SUPPLIER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              通过互联网技术实现企业内外部资源的有效整合与协同工作，提高整体运营效率。它使不同地理位置的团队和个人能够实时沟通、共享信息，并共同完成项目任务。
            </div>
          </div>
        </div>
        <div class="h-[273px] flex ml-auto">
          <img :src="getUrl(imageList[3].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div
      class="w-full flex flex-col justify-between items-center mt-8"
      @click="goPush('https://dmc.tengen.com.cn/pcweb')"
    >
      <div class="flex flex-row w-full bg-[rgba(240,242,242,1)] py-4 px-8">
        <div class="h-[273px] flex mr-30">
          <img :src="getUrl(imageList[4].name)" class="h-full object-contain" alt="" />
        </div>
        <div class="px-20">
          <div class="flex-1 relative">
            <ProjectTitle :title="'个性化定制'" class="mt-8" />
            <div class="absolute top-8 font-600 text-linear">DEALER</div>
            <div class="text-4 mt-8 line-height-loose w-120">
              根据客户的特定需求和偏好，为其量身打造独一无二的产品或服务。这种方式能够极大地提升顾客满意度和忠诚度，同时帮助企业差异化竞争，满足市场的多样化需求。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-[rgba(240,242,242,1)] p-4 w-full h-120 mt-4">
      <div class="w-full h-full flex flex-row content-box-show">
        <div class="bg-[rgba(240,242,242,1)] flex flex-col w-[400px] h-full">
          <div :class="'border-item ' + (currentItem === 1 ? 'hover-class' : '')" @mouseenter="itemEnter(1)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[3].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">供应商服务</span>
          </div>
          <div :class="'border-item ' + (currentItem === 2 ? 'hover-class' : '')" @mouseenter="itemEnter(2)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[4].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">经销商</span>
          </div>
          <div :class="'border-item ' + (currentItem === 3 ? 'hover-class' : '')" @mouseenter="itemEnter(3)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[5].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">客户</span>
          </div>
          <div :class="'border-item ' + (currentItem === 4 ? 'hover-class' : '')" @mouseenter="itemEnter(4)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[6].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">工业企业</span>
          </div>
        </div>
        <div class="bg-white flex-1 right-content p-2">
          <img :src="getUrl(imageList[7].name)" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.text-linear {
  font-weight: 600;
  font-size: 30px;
  background: linear-gradient(to bottom, rgba(69, 69, 69, 0.1), transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.content-box-show {
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
}
.border-item {
  flex: 1;
  border: 1px solid rgba(151, 151, 151, 0.47);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
    border-right: none;
  }
}
.hover-class {
  background-color: white;
  border-right: none;
}
.right-content {
  border: 1px solid rgba(151, 151, 151, 0.47);
  border-left: none;
}
.new-border {
  border: 1px solid rgba(23, 185, 173, 0.9);
  border-radius: 8px;
  color: rgba(23, 185, 173, 0.9);
  background-color: white;
}
.text-desc {
  box-sizing: border-box;
  /*必须设置border宽度和样式*/
  border-left: 2px solid;
  /*设置线性渐变*/
  border-image: linear-gradient(180deg, rgba(25, 162, 255, 0) 10%, rgba(79, 79, 79, 0.4), rgba(25, 162, 255, 0) 90%) 2 2
    2 2;
}
</style>
