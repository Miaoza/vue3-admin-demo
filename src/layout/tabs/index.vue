<!-- 标签页 -->
<template>
  <section class="tabs-wrap" v-click-outside="handleOutSide">
    <div
      :class="['tab-item', '/home' === currentTab.path && 'active']"
      @click.stop="handleToggle({ path: '/home', title: '工作台' })"
    >
      <span class="title">工作台</span>
    </div>
    <div
      v-for="(tab, index) in tabs"
      :class="['tab-item', tab.path === currentTab.path && 'active']"
      :key="tab.path"
      @click.stop="handleToggle(tab)"
      @contextmenu.prevent="handleContextmenu(index)"
    >
      <img v-if="tab.icon" class="icon" :src="tab.icon" />
      <span class="title">{{ tab.title }}</span>
      <div v-if="tab.path !== '/home'">
        <i
          class="el-icon-close"
          v-show="tab.path !== currentTab.path"
          @click.stop="handleClose(tab)"
        ></i>
        <i
          class="el-icon-circle-close"
          v-show="tab.path === currentTab.path"
          @click.stop="handleClose(tab)"
        ></i>
      </div>
    </div>
    <Contextmenu
      :show="show"
      :tabIndex="tabIndex + 1"
      :len="tabs.length"
      @close="handleCloseTab"
    />
  </section>
</template>

<script lang="ts" src="./tabs.ts"></script>

<style lang="scss" scoped>
.tabs-wrap {
  position: absolute;
  left: 62px;
  right: 100px;
  // top: 0;
  bottom: -3px;
  height: 36px;
  display: flex;
  align-items: center;
  .tab-item {
    position: relative;
    box-sizing: border-box;
    padding: 0 $mini-font-size;
    width: 136px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border: 1px solid #e0e0e0;
    // border-radius: $mini-border-radius;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 0;
    cursor: default;

    &.active {
      background: #edf5fe;
    }

    .title {
      width: 90px;
    }

    .el-icon-close,
    .el-icon-circle-close {
      cursor: pointer;
      color: $info-color;
    }
  }
}
</style>
