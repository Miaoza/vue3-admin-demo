<!-- 详情页列表 -->
<template>
  <section class="detail-table-layout">
    <header v-if="filterItems.length > 0">
      <CusFilter :filterItems="filterItems" @search="handleSearch" />
    </header>
    <section class="detail-table-body">
      <CusTable :loading="loading" :columns="columns" :data="tableData" />
      <el-pagination
        background
        v-model:currentPage="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :layout="pageLayout"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </section>
  </section>
</template>

<script lang="ts" src="./layout-table.ts"></script>

<style lang="scss" scoped>
.detail-table-layout {
  & > header,
  & > .detail-table-body {
    background: $module-bg;
    padding: $large-gap;
  }

  & > header {
    margin-bottom: $gap;
  }

  .detail-table-body {
    .el-pagination {
      margin-top: $gap;
      text-align: right;
    }
  }
}
</style>
