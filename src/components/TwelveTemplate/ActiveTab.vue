<template>
  <div class="tab-list">
    <div v-for="item in menuList" class="item" :class="{ 'is-active': active === item.value }" :key="item.value">
      <a :href="`#${item.value}`" @click="active = item.value">{{ item.label }}</a>
    </div>
  </div>
  <div class="scroll-content" @scroll="handleScroll">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue"
import { throttle } from "lodash"

interface propsType {
  menuList: Array<{
    label: string
    value: string
  }> &
    any
  parentClass: string
}
const props = withDefaults(defineProps<propsType>(), {
  menuList: () => []
})

const active = ref(props.menuList[0].value)

const offsetTopArr = ref([])
const curIndex = ref(0)

const init = () => {
  const parentNode = document.querySelector(props.parentClass)
  const childNodesAll = parentNode.childNodes
  for (let index = 0; index < childNodesAll.length; index++) {
    const child = childNodesAll[index]
    if (child.nodeType === 1) offsetTopArr.value.push(child.offsetTop)
  }
}

const handleScroll = throttle((e) => {
  curIndex.value = offsetTopArr.value.findIndex((item) => {
    return e.target.scrollTop <= item
  })
  active.value = props.menuList[curIndex.value].value
}, 200)

onMounted(() => {
  nextTick(init)
})
</script>

<style lang="scss" scoped>
.tab-list {
  height: 100%;
  width: 120px;
}
.scroll-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
