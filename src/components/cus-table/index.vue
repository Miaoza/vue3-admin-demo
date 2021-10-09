<template>
  <el-table
    ref="tableRef"
    :data="tableData"
    :stripe="stripe"
    style="width: 100%"
    :empty-text="emptyText"
    @selection-change="handleSelectionChange"
  >
    <TableItem v-for="item in columns" :key="item.prop" :column="item">
      <template v-if="item.type === 'slot'" v-slot:[item.slotname]="{ row }">
        <slot :name="item.slotname" :row="row"></slot>
      </template>
    </TableItem>
  </el-table>
</template>

<script lang="ts" src="./table.ts"></script>

<style lang="sss" scoped></style>
