<script lang="ts" setup>
import { useLayoutMode } from "@/hooks/useLayoutMode"
import logoText from "@/assets/layouts/logo-text.png?url"
interface Props {
  collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapse: true
})

const { isTop } = useLayoutMode()
</script>

<template>
  <div class="layout-logo-container" :class="{ collapse: props.collapse, 'layout-mode-top': isTop }">
    <!-- <transition name="layout-logo-fade"> -->
    <!-- <router-link key="expand" to="/"> -->
    <img :src="logoText" class="layout-logo-text" />
    <!-- <img :src="logoText" class="layout-logo-text" /> -->
    <!-- </router-link> -->
    <!-- </transition> -->
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  position: relative;
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;

  .layout-logo {
    display: none;
  }
  .layout-logo-text {
    height: 100%;
    vertical-align: middle;
    object-fit: contain;
  }
}

.layout-mode-top {
  height: var(--v3-navigationbar-height);
  line-height: var(--v3-navigationbar-height);
}

.collapse {
  .layout-logo {
    height: 32px;
    vertical-align: middle;
    display: inline-block;
  }
  .layout-logo-text {
    display: none;
  }
}
</style>
