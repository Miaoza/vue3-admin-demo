<!-- 标签页 -->
<template>
  <section class="tabs">
    <div
      :class="['home', '/home' === currentTab.path && 'active']"
      @click.stop="handleToggle({ path: '/home', title: '工作台' })"
    >
      <i class="el-icon-house"> </i>
    </div>
    <el-button type="text" @click="handleScrollLeft">
      <el-icon size="18">
        <d-arrow-left />
      </el-icon>
    </el-button>
    <section class="tabs-wrap" v-click-outside="handleOutSide">
      <CusDrag direction="horizontal" :sourceData="tabs">
        <template v-slot="{ scope }">
          <div
            :class="[
              'tab-item',
              scope.row.path === currentTab.path && 'active'
            ]"
            :key="`${scope.row.path}-${scope.$index}`"
            @click.stop="handleToggle(scope.row)"
            @contextmenu.prevent="handleContextmenu(scope.$index)"
          >
            <div
              :class="[
                'tab-item-wrap',
                scope.row.path === currentTab.path && 'active'
              ]"
            >
              <img v-if="scope.row.icon" class="icon" :src="scope.row.icon" />
              <span class="title">{{ scope.row.title }}</span>
              <div v-if="scope.row.path !== '/home'">
                <i
                  class="el-icon-close"
                  v-show="scope.row.path !== currentTab.path"
                  @click.stop="handleClose(scope.row)"
                ></i>
                <i
                  class="el-icon-circle-close"
                  v-show="scope.row.path === currentTab.path"
                  @click.stop="handleClose(scope.row)"
                ></i>
              </div>
            </div>
            <!-- <el-divider
              v-if="scope.$index + 1 < tabs.length"
              direction="vertical"
            ></el-divider> -->
          </div>
        </template>
      </CusDrag>

      <Contextmenu
        :show="show"
        :tabIndex="tabIndex + 1"
        @close="handleCloseTab"
      />
    </section>
    <el-button type="text" @click="handleScrollRight">
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
  background: $module-bg;

  .home {
    border: 1px solid $boder-color;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 0;
    cursor: default;
    height: 36px;
    line-height: 36px;
    width: 36px;
    text-align: center;
    &.active {
      background: $page-bg;
    }
  }
  .tabs-wrap {
    flex: 1;
    border: 1px solid $boder-color;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 0;
    cursor: default;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    display: flex;
    align-items: center;
    transition: all 0.5s;
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
          background: $page-bg;
        }

        .title {
          width: 90px;
        }

        .el-icon-close:hover {
          background: $info-bg;
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
