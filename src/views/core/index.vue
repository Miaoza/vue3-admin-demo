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
  width: 100%;
  height: 100%;
  background: $page-bg;
  .core-main {
    position: relative;
  }
}
</style>
