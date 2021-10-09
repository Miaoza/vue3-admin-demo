<!-- 详情页列表 -->
<template>
  <section class="detail-table-layout">
    <header v-if="filterItems.length > 0">
      <CusFilter :filterItems="filterItems" @search="handleSearch" />
    </header>
    <section class="detail-table-body">
      <div class="sub-header">
        <el-button type="primary" v-if="showAdd" @click="handleAdd">
          {{ addBtnText }}
        </el-button>
      </div>
      <CusTable :loading="loading" :columns="columns" :data="tableData">
        <template
          v-for="slotItem in slotColumns"
          :key="slotItem.slotname"
          v-slot:[slotItem.slotname]="{ row }"
        >
          <slot :name="slotItem.slotname" :row="row"> </slot>
        </template>
      </CusTable>
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
    .sub-header {
      padding: 4px 0;
      text-align: right;
    }
    .el-pagination {
      margin-top: $gap;
      text-align: right;
    }
  }
}
</style>
