<!-- 右键菜单 -->
<template>
  <section
    v-show="show"
    class="tabs-contextmenu"
    :style="{
      left: `${left}px`
    }"
  >
    <div
      class="menu-items"
      v-for="(context, index) in menuItems"
      :key="index"
      @click="handleClose(context)"
    >
      {{ context }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    show: Boolean,
    tabIndex: {
      type: Number,
      default: -1
    }
  },
  computed: {
    left() {
      return this.tabIndex < 0 ? 0 : this.tabIndex * 136
    }
  },
  data() {
    return {
      menuItems: ['关闭', '关闭右侧', '关闭其他', '全部关闭']
    }
  },
  methods: {
    /**
     * 关闭
     * @param {String} context
     */
    handleClose(context: string) {
      this.$emit('close', context)
    }
  }
})
</script>

<style lang="scss" scoped>
.tabs-contextmenu {
  position: absolute;
  // width: 200px;
  top: 32px;
  // left: -1px;
  background: $module-bg;
  // border-radius: $normal-border-radius;
  border-bottom-left-radius: $normal-border-radius;
  border-bottom-right-radius: $normal-border-radius;
  box-shadow: 2px 2px 12px #f0f0f0;
  z-index: 2;
  padding: 4px 0;
  .menu-items {
    width: 136px;
    padding: 6px 0;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;

    &:last-child {
      border-bottom: 0;
    }

    &:hover {
      background: $page-bg;
    }
  }
}
</style>
