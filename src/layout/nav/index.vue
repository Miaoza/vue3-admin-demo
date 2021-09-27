<template>
  <el-aside class="nav-wrap" :width="isCollapse ? '64px' : '320px'">
    <el-menu default-active="/home" unique-opened router :collapse="isCollapse">
      <template v-for="item in menus" :key="item.path">
        <template v-if="item.children && item.children.length">
          <SubMenuItem :subItem="item" />
        </template>
        <template v-else>
          <el-menu-item :index="item.path">
            <!-- <i v-if="item.icon" :class="`el-icon-${item.icon}`"></i> -->
            <el-icon v-if="item.icon">
              <component :is="item.icon"> </component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" src="./nav.ts"></script>

<style lang="scss" scoped>
.nav-wrap {
  background: #fff;
  .el-menu {
    height: 100%;
    .el-icon {
      line-height: 0;
      vertical-align: middle;
      font-size: 16px;
      margin-right: 8px;
    }
  }
}
</style>
