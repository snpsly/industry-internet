<script lang="ts" setup>
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-row items-center">
    <div class="flex flex-row items-center">
      <div class="uno-Basics-bgColor w-[22px] h-[22px]" />
      <span class="ml-[22px] font-600 text-size-[26px]">
        {{ props.title }}
      </span>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
