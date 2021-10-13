<template>
  <section class="home">
    <LayoutBar
      title="产品-柱状图1"
      key="test1"
      chartId="test1"
      :filterItems="filterItems"
      :promiseRequest="getProductsSummary"
    />
    <LayoutBar
      title="产品-柱状图2"
      key="test2"
      chartId="test2"
      :filterItems="filterItems"
      :promiseRequest="getProductsSummary"
    />
    <LayoutLine
      title="产品-折线图2"
      key="test3"
      chartId="test3"
      :filterItems="filterItems"
      :promiseRequest="getProductsSummary"
    />
    <!-- <section></section> -->
  </section>
</template>
<script lang="ts" src="./home.ts"></script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    margin-bottom: $gap;
  }
}
</style>
