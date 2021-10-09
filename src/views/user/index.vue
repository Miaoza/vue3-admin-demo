<!-- 用户列表页 -->
<template>
  <section class="user-wrap">
    <LayoutTable
      showAdd
      :filterItems="filterItems"
      :columns="columns"
      :promiseRequest="getUsers"
      @add="handleAdd"
    >
      <template v-slot:username="{ row }">
        <el-button type="text" @click="handleToForm(row.id)">
          {{ row.username }}
        </el-button>
      </template>
    </LayoutTable>
  </section>
</template>

<script lang="ts" src="./user.ts"></script>

<style lang="scss" scoped>
// .user-wrap {
//   padding: $gap;
// }
</style>
