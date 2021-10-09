<!-- 表单布局 -->
<template>
  <section class="layout-form-wrap">
    <el-page-header
      icon="el-icon-arrow-left"
      title="返回"
      :content="pageTitle"
      @back="goBack"
    />

    <section class="form-wrap">
      <CusForm :labelWidth="labelWidth" :formItems="formItems">
        <template
          v-for="item in slotItems"
          :key="item.slotname"
          v-slot:[item.slotname]="{ form }"
        >
          <slot :name="item.slotname" :form="form"></slot>
        </template>
      </CusForm>

      <footer>
        <el-button type="primary"> 提交 </el-button>
      </footer>
    </section>
  </section>
</template>

<script lang="ts" src="./form.ts"></script>

<style lang="scss" scoped>
.layout-form-wrap {
  padding: $large-gap;

  .form-wrap {
    padding: $gap 0;
  }
}
</style>
