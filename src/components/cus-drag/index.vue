<!-- 拖放组件 -->
<template>
  <!-- <section class="cus-drap-wrap"> -->
  <!-- <transition-group
    name="drag"
    :class="['cus-drap-wrap', direction]"
    tag="section"
  >
    <slot></slot>
  </transition-group> -->
  <!-- </section> -->
  <transition-group
    name="drag"
    :class="['cus-drap-wrap', direction]"
    tag="section"
  >
    <div
      class="drag-item"
      draggable="true"
      v-for="(item, index) in sourceData"
      :key="index"
      :id="`drag-item` + index"
      @dragstart="handleDragstart"
      @dragover="handleDragover"
      @dragenter="handleDragenter"
      @drop="handleDrop"
      @ondragend="handleDragend"
    >
      <!-- {{ item }} -->
      <slot :scope="{ row: item, $index: index }">{{ item }}</slot>
    </div>
  </transition-group>
</template>

<script lang="ts" src="./drag.ts"></script>

<style lang="scss" scoped>
.cus-drap-wrap {
  position: relative;
  display: flex;
  width: 100%;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // overflow: hidden;
  &.horizontal {
    flex-direction: row;
    align-items: center;
  }
  &.vertical {
    flex-direction: column;
  }
  .drag-item {
    box-sizing: border-box;
    //   position: absolute;
    //   width: 200px;
    //   border: 1px solid #ccc;
    //   padding: 5px 20px;
    //   font-size: 14px;
    //   text-align: center;
  }
}
</style>
