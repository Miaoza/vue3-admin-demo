<!-- 拖放组件 -->
<template>
  <!-- <section class="cus-drap-wrap"> -->
  <!-- <transition-group name="drag" class="cus-drap-wrap" tag="section">
    <slot></slot>
  </transition-group> -->
  <!-- </section> -->
  <transition-group name="drag" class="cus-drap-wrap" tag="section">
    <div
      class="drag-item"
      draggable="true"
      v-for="(item, index) in sourceData"
      :key="index"
      @dragstart="handleDragstart($event, index)"
      @dragover="handleDragover($event, index)"
      @dragenter="handleDragenter($event, index)"
    >
      <!-- <slot></slot> -->
      {{ item }}
    </div>
  </transition-group>
</template>

<script lang="ts" src="./drag.ts"></script>

<style lang="scss" scoped>
.cus-drap-wrap {
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  .drag-item {
    width: 200px;
    border: 1px solid #ccc;
    padding: 5px 20px;
    font-size: 14px;
    text-align: center;
  }
}
</style>
