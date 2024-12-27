<script lang="ts" setup>
import { AppMain, Logo, TextLogo } from "./components"
import { useRouter } from "vue-router"
import { watch, ref } from "vue"
import { getToken } from "@/utils/cache/cookies"
import { useUserStore } from "@/store/modules/user"
const userStore = useUserStore()
const token = getToken()
console.log("🚀 ~ token:", token)
const router = useRouter()
const routerList = router.getRoutes()
const navList = routerList.filter((item) => {
  return item.meta.menu
})
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("🚀 ~ handleSelect ~ key:", key)
  if (key === "/control") {
    const baseUrl = window.location.href.split("#")[0] + "#"
    window.open(baseUrl + key, "_blank")
    return
  }
  if (key.includes("http")) {
    window.open(key, "_blank")
  } else {
    if (keyPath && keyPath.length > 0) {
      router.push(keyPath.join("/"))
    }
  }
}
const goHome = () => {
  router.push("/")
}
const currentPath = ref("")
watch(
  () => router.currentRoute.value,
  (newValue) => {
    currentPath.value = newValue.path
  },
  { immediate: true }
)
const goLogin = () => {
  router.push("/login")
}
const logout = () => {
  userStore.logout()
  router.push("/login")
}
</script>

<template>
  <div class="app-wrapper">
    <!-- 头部导航栏和标签栏 -->
    <div class="fixed-header layout-header">
      <div class="content">
        <Logo :collapse="false" class="logo cursor-pointer" @click="goHome" />
        <TextLogo :collapse="false" class="text-logo cursor-pointer" @click="goHome" />
        <div class="navigation-bar">
          <!-- <ul class="menu">
            <li v-for="item in navList" :key="item.path">
              {{ item.name }}
              <ul class="submenu">
                <li v-for="item1 in item.children" :key="item1.path">
                  {{ item1.name }}

                  <ul class="thirdmenu" v-if="item1.children && item1.children.length">
                    <li v-for="item2 in item1.children" :key="item2.path">
                      {{ item2.name }}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul> -->
          <el-menu
            class="el-menu"
            mode="horizontal"
            text-color="#000"
            @select="handleSelect"
            :default-active="currentPath"
          >
            <template v-for="item in navList" :key="item.path">
              <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
                <template #title>{{ item.name }}</template>
                <template v-for="item1 in item.children" :key="item1.path">
                  <el-sub-menu v-if="item1.children && item1.children.length > 0" :index="item1.path">
                    <template #title> {{ item1.name }}</template>
                    <el-menu-item v-for="item2 in item1.children" :key="item2.path" :index="item2.path">{{
                      item2.name
                    }}</el-menu-item>
                  </el-sub-menu>
                  <el-menu-item v-else :index="item1.path">{{ item1.name }}</el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="item.path" v-show="!(item.name === '控制台' && !userStore.token)">{{
                item.name
              }}</el-menu-item>
            </template>
          </el-menu>
        </div>
        <el-button type="primary" class="btn" @click="goLogin" v-if="!userStore.token">登录</el-button>
        <el-dropdown class="right-menu-item" v-else>
          <div class="right-menu-avatar">
            <el-avatar :icon="UserFilled" :size="30" />
            <span>{{ userStore.username }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- <a target="_blank" href="https://github.com/un-pany/v3-admin-vite">
              <el-dropdown-item>GitHub</el-dropdown-item>
            </a>
            <a target="_blank" href="https://gitee.com/un-pany/v3-admin-vite">
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a> -->
              <el-dropdown-item divided @click="logout">
                <span style="display: block">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <!-- 主容器 -->
    <div class="main-container">
      <!-- 页面主体内容 -->
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  @extend %clearfix;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;

  .logo {
    width: 135px;
    min-width: 135px;
    margin: 16px 0 16px 22px;
  }
  .text-logo {
    width: 324px;
    min-width: 324px;
    margin: auto 0;
    margin-left: 15px;
  }
  .content {
    display: flex;
    align-items: center;
    padding: 0 27px;
    .navigation-bar {
      flex: 1;
      :deep(.el-menu) {
        height: 100%;
        margin-left: auto;
        margin-right: 22px;
        display: flex;
        // background-color: transparent;
        // border-bottom: none;
        // > .el-sub-menu__title,
        // .el-tooltip__trigger,
        // .el-tooltip__trigger {
        //   font-weight: 400;
        //   font-size: 18px;
        //   color: #5d5b5b;
        // }

        > .el-menu-item {
          // border-bottom: none;
        }
        &.is-active {
          // border-bottom: none;
        }
      }
      :deep(.el-menu--horizontal.el-menu) {
        border-bottom: none;
      }
      :deep(.el-sub-menu) {
        &.is-active {
          .el-sub-menu__title {
            color: var(--el-color-primary) !important;
          }
        }
      }
      // :deep(.el-sub-menu__title) {
      //   font-size: 14px;
      //   .el-menu-item {
      //     font-size: 14px;
      //   }
      // }
      // :deep(.el-menu-item) {
      //   font-size: 14px;
      // }
      // :deep(.el-menu--popup) {
      //   .el-menu-item {
      //     font-size: 14px;
      //   }
      // }
      ul,
      li {
        list-style: none;
      }
      .menu {
        display: flex;
      }

      .menu > li {
        padding: 10px;
      }

      .menu > li:hover .submenu {
        display: block;
      }

      .menu > li .submenu {
        position: absolute;
        background-color: red;
        display: none;
      }

      .menu > li .submenu > li {
        position: relative;
      }

      .menu > li .submenu > li:hover .thirdmenu {
        display: block;
      }

      .thirdmenu {
        width: 100px;
        position: absolute;
        left: 100%;
        top: 0;
        display: none;
        background: #fff;
      }
    }
  }
  .btn {
    width: 135px;
    height: 51px;
    border-radius: 8px;
    font-size: 18px;
    color: #ffffff;
  }
}

.layout-header {
  background-color: var(--v3-header-bg-color);
  box-shadow: var(--v3-header-box-shadow);
  border-bottom: var(--v3-header-border-bottom);
}

.main-container {
  min-height: 100%;
}

.app-main {
  transition: padding-left $transition-time;
  padding-top: 77px;
  // height: 100vh;
  // overflow: auto;
}

.hasTagsView {
  .app-main {
    padding-top: var(--v3-header-height);
  }
}
</style>
