<template>
  <el-table
    ref="tableRef"
    :data="tableData"
    style="width: 100%"
    :empty-text="emptyText"
    @selection-change="handleSelectionChange"
  >
    <TableItem v-for="item in columns" :key="item.prop" :column="item" />
  </el-table>
</template>

<script lang="ts" src="./table.ts"></script>

<style lang="sss" scoped></style>
