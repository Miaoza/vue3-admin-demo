<!-- 用户列表页 -->
<template>
  <section class="user-wrap">
    <LayoutTable
      :filterItems="filterItems"
      :columns="columns"
      :promiseRequest="getUsers"
    />
  </section>
</template>

<script lang="ts" src="./user.ts"></script>

<style lang="scss" scoped>
// .user-wrap {
//   padding: $gap;
// }
</style>
