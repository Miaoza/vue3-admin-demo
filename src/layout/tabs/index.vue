<!-- 标签页 -->
<template>
  <section class="tabs">
    <div
      :class="['home', '/home' === currentTab.path && 'active']"
      @click.stop="handleToggle({ path: '/home', title: '工作台' })"
    >
      <i class="el-icon-house"> </i>
    </div>
    <el-button type="text">
      <el-icon size="18">
        <d-arrow-left />
      </el-icon>
    </el-button>
    <section class="tabs-wrap" v-click-outside="handleOutSide">
      <div
        v-for="(tab, index) in tabs"
        :class="['tab-item', tab.path === currentTab.path && 'active']"
        :key="`${tab.path}-${index}`"
        @click.stop="handleToggle(tab)"
        @contextmenu.prevent="handleContextmenu(index)"
      >
        <div
          :class="['tab-item-wrap', tab.path === currentTab.path && 'active']"
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
        <el-divider
          v-if="index + 1 < tabs.length"
          direction="vertical"
        ></el-divider>
      </div>

      <Contextmenu
        :show="show"
        :tabIndex="tabIndex + 1"
        @close="handleCloseTab"
      />
    </section>
    <el-button type="text">
      <el-icon size="18">
        <d-arrow-right />
      </el-icon>
    </el-button>
  </section>
</template>

<script lang="ts" src="./tabs.ts"></script>

<style lang="scss" scoped>
.tabs {
  position: absolute;
  left: 80px;
  right: 100px;
  bottom: 0;
  height: 36px;
  display: flex;
  align-items: center;
  background: #fff;
  .home {
    border: 1px solid #e0e0e0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 0;
    cursor: default;
    height: 36px;
    line-height: 36px;
    width: 36px;
    text-align: center;
    &.active {
      background: #edf5fe;
    }
  }
  .tabs-wrap {
    flex: 1;
    border: 1px solid #e0e0e0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 0;
    cursor: default;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .tab-item {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .tab-item-wrap {
        padding: 0 $mini-font-size;
        width: 136px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: default;
        &.active {
          border-top-right-radius: 12px;
          border-top-left-radius: 12px;
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
  }
}
</style>
