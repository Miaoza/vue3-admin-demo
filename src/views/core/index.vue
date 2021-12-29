<!-- 项目入口 -->
<template>
  <el-container class="core-wrap" direction="vertical">
    <Header />
    <el-container direction="horizontal">
      <Nav />
      <el-main class="core-main">
        <keep-alive v-if="$route.meta.cache">
          <router-view />
        </keep-alive>
        <router-view v-else />
      </el-main>
    </el-container>
    <!-- <Footer /> -->
  </el-container>
</template>

<script lang="ts" src="./core.ts"></script>

<style lang="scss" scoped>
.core-wrap {
  // min-width: 1440px;
  // min-height: 810px;
  // min-width: 1280px;
  // min-height: 720;
  width: 100vw;
  height: 100vh;
  // :deep {
  //   .main-header {
  //     min-width: 1280px;
  //   }
  // }
  .core-main {
    background: $page-bg;
    position: relative;
    height: calc(100vh - 60px);
    overflow: auto;
    & > * {
      min-width: 1280px;
      min-height: 720;
    }
  }
}
</style>
