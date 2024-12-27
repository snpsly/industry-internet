<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import ProjectTitle from "@/components/ProjectTitle/index.vue"
import { ref } from "vue"
const { setTheme } = useTheme()
defineOptions({
  // 命名当前组件
  name: "manufacturingScheme"
})
const getUrl = (imgUrl: string) => {
  return new URL(`../../../assets/intelligentManufacturing/${imgUrl}`, import.meta.url).href
}
const imageList = [
  {
    name: "manufacturingScheme1.png"
  },
  {
    name: "manufacturingScheme2.png"
  },
  {
    name: "manufacturingScheme3.png"
  },
  {
    name: "manufacturingScheme4.png"
  },
  {
    name: "manufacturingScheme5.png"
  },
  {
    name: "manufacturingScheme6.png"
  },
  {
    name: "manufacturingScheme7.png"
  },
  {
    name: "manufacturingScheme8.png"
  }
]
const currentItem = ref(1)
const itemEnter = (index: number) => {
  console.log(index)
  currentItem.value = index
}
setTheme("normal")
</script>

<template>
  <div class="px-28 pb-50">
    <!-- <ProjectTitle :title="'智能智造'" class="mt-8" /> -->
    <!-- <div class="w-full flex flex-row justify-between items-center mt-8">
      <div class="mr-4 flex flex-row flex-1">
        <div class="flex flex-col flex-1">
          <div class="flex-1 bg-[rgba(240,242,242,1)] relative">
            <span class="absolute left-8 top-4 font-600">研发方向</span>
            <span class="absolute left-8 top-8 font-600 text-linear">RESEARCH</span>
            <span class="absolute left-8 top-12 text-4">以工业互联网为核心</span>
            <span class="absolute left-8 top-18 text-4">形成智能化制造产品研发方向</span>
          </div>
          <div class="h-6 uno-Basics-bgColor" />
        </div>
        <div class="h-[273px] flex">
          <img :src="getUrl(imageList[0].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
      <div class="mr-4 flex flex-row flex-1">
        <div class="flex flex-col flex-1">
          <div class="flex-1 bg-[rgba(240,242,242,1)] relative">
            <span class="absolute left-8 top-4 font-600">远程操控</span>
            <span class="absolute left-8 top-8 font-600 text-linear">REMOTE</span>
            <span class="absolute left-8 top-12 text-4">在工业互联应用当中</span>
            <span class="absolute left-8 top-18 text-4">延伸智能制造的远程操纵</span>
          </div>
          <div class="h-6 uno-Basics-bgColor" />
        </div>
        <div class="h-[273px] flex">
          <img :src="getUrl(imageList[1].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
      <div class="flex flex-row flex-1">
        <div class="flex flex-col flex-1">
          <div class="flex-1 bg-[rgba(240,242,242,1)] relative">
            <span class="absolute left-8 top-4 font-600">协同生产</span>
            <span class="absolute left-8 top-8 font-600 text-linear">COLLABORATIVE</span>
            <span class="absolute left-8 top-12 text-4">工业互联网联合智能制造</span>
            <span class="absolute left-8 top-18 text-4">促进企业间协助合作</span>
          </div>
          <div class="h-6 uno-Basics-bgColor" />
        </div>
        <div class="h-[273px] flex">
          <img :src="getUrl(imageList[2].name)" class="h-full object-contain" alt="" />
        </div>
      </div>
    </div> -->
    <div class="bg-[rgba(240,242,242,1)] p-4 w-full h-120 mt-4">
      <div class="w-full h-full flex flex-row content-box-show">
        <div class="bg-[rgba(240,242,242,1)] flex flex-col w-[400px] h-full">
          <div :class="'border-item ' + (currentItem === 1 ? 'hover-class' : '')" @mouseenter="itemEnter(1)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[3].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">智能化生产</span>
          </div>
          <div :class="'border-item ' + (currentItem === 2 ? 'hover-class' : '')" @mouseenter="itemEnter(2)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[4].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">服务化延伸</span>
          </div>
          <div :class="'border-item ' + (currentItem === 3 ? 'hover-class' : '')" @mouseenter="itemEnter(3)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[5].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">网络化协同</span>
          </div>
          <div :class="'border-item ' + (currentItem === 4 ? 'hover-class' : '')" @mouseenter="itemEnter(4)">
            <div class="h-[30px] w-[30px]">
              <img :src="getUrl(imageList[6].name)" class="h-full object-contain" alt="" />
            </div>
            <span class="ml-4">个性化定制</span>
          </div>
        </div>
        <div class="bg-white flex-1 right-content p-2">
          <img :src="getUrl(imageList[7].name)" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
  <div class="h-20" />
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
</style>
