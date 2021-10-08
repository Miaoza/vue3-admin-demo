<!-- 表单布局 -->
<template>
  <section class="layout-form-wrap">
    <el-page-header
      icon="el-icon-arrow-left"
      title="返回"
      :content="pageTitle"
    />

    <section class="form-wrap">
      <CusForm :labelWidth="labelWidth" :formItems="formItems" />

      <footer>
        <el-button type="primary"> 提交 </el-button>
      </footer>
    </section>
  </section>
</template>

<script lang="ts" src="./form.ts"></script>

<style lang="scss" scoped>
// .layout-form-wrap {
// }
</style>
