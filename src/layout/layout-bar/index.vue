<!-- 柱状图模块 -->
<template>
  <section
    class="layout-bar-wrap"
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-row>
      <el-col :span="8" class="title">{{ title }}</el-col>
      <el-col :span="16">
        <el-button
          type="text"
          icon="el-icon-full-screen"
          @click="dialogVisible = true"
        ></el-button>
      </el-col>
    </el-row>
    <CusFilter :filterItems="filterItems" />
    <div class="chart-wrap">
      <CusRectChart
        :key="chartId"
        :chartId="chartId"
        :xAxis="xAxis"
        :yAxis="yAxis"
        :series="series"
      />
    </div>

    <!-- 放大弹框 start -->
    <el-dialog v-model="dialogVisible" :title="title" width="90%" top="5vh">
      <CusFilter :filterItems="filterItems" />
      <div class="chart-wrap">
        <CusRectChart
          :key="`${chartId}--large`"
          :chartId="`${chartId}--large`"
          size="large"
          :xAxis="xAxis"
          :yAxis="yAxis"
          :series="series"
        />
      </div>
    </el-dialog>
    <!-- 放大弹框 end -->
  </section>
</template>

<script lang="ts" src="./bar.ts"></script>

<style lang="scss" scoped>
.layout-bar-wrap {
  width: 600px;
  height: 300px;
  border-radius: $large-border-radius;
  background: $module-bg;
  box-shadow: 0 0 12px #f0f0f0;
  padding: $gap;
  display: flex;
  flex-direction: column;

  .chart-wrap {
    width: 100%;
    flex: 1;
  }

  .el-row {
    .el-col {
      display: flex;
      align-items: center;

      &:last-child {
        justify-content: flex-end;
        .el-button {
          font-size: $large-font-size;
        }
      }
    }
  }

  .title {
    font-size: $middle-font-size;
    color: $text-color;
  }

  ::v-deep .el-dialog {
    height: 90vh;
    display: flex;
    flex-direction: column;
    .el-dialog__body {
      flex: 1;
      padding-top: 0;
      display: flex;
      flex-direction: column;

      .chart-wrap {
        width: 100%;
        flex: 1;
        background: rgba($color: #000000, $alpha: 0.1);
      }
    }
  }
}
</style>
