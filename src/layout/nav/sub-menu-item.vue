<template>
  <el-sub-menu class="nav-sub-menu" :index="subItem.path">
    <template #title>
      <!-- <i :class="`el-icon-${subItem.icon}`"></i> -->
      <el-icon v-if="subItem.icon">
        <component :is="subItem.icon"> </component>
      </el-icon>
      <span>{{ subItem.title }}</span>
    </template>

    <template v-for="item in subItem.children" :key="item.path">
      <template v-if="item.children && item.children.length">
        <SubMenuItem :subItem="item" />
      </template>
      <template v-else>
        <el-menu-item :index="item.path">
          <i v-if="item.icon" :class="`el-icon-${item.icon}`"></i>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </template>
  </el-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SubMenuItem',
  props: {
    subItem: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-sub-menu {
  .el-icon {
    line-height: 0;
    vertical-align: middle;
    font-size: 16px;
    margin-right: 8px;
  }
}
</style>
