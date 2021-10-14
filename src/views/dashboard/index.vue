<template>
  <section class="dashboard">
    <div
      class="item"
      draggable="true"
      v-for="n in [1, 2, 3, 4, 5]"
      :id="`drag--${n}`"
      :key="n"
      @dragstart="handleDragstart"
      @dragover="handleDragover"
      @drop="handleDrop"
      @dragend="handleDragend"
    >
      测试模块{{ n }}
    </div>
  </section>
</template>

<script lang="ts" src="./dashboard.ts"></script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  .item {
    padding: 4px 8px;
    border: 1px solid #ccc;
    // margin-right: 8px;
  }
}
</style>
