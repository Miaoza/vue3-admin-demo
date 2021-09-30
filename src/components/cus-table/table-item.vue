<!-- 表格列 -->
<template>
  <el-table-column v-bind="column">
    <template #header>
      <slot :name="`${column.prop}Header`"></slot>
      <span>{{ column.label }}</span>
    </template>
    <template v-if="!hasChildren" #default="props">
      <div v-if="column.type === 'slot'">
        <slot :name="column.slotName" :row="props.row"></slot>
      </div>
      <span v-else>{{ props.row[column.prop] }}</span>
    </template>
    <template v-if="hasChildren">
      <TableItem
        v-for="item in column.children"
        :key="item.prop"
        :column="item"
      />
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableItem',
  props: {
    column: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    hasChildren() {
      return this.column.children && this.column.children.length
    }
  }
  // setup() {}
})
</script>

<style lang="scss" scoped></style>
