<!-- 通用筛选项 -->
<template>
  <section class="cus-filter-wrap">
    <!-- <slot name="front" :row="filter"></slot> -->
    <div class="filter-item" v-for="item in filterItems" :key="item.model">
      <span class="label">{{ item.label }}：</span>
      <el-input
        v-if="item.type === 'input'"
        v-model="filter[item.model]"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :placeholder="item.placeholder || '请输入'"
        @change="handleChange"
      />
      <el-select
        v-if="item.type === 'select'"
        v-model="filter[item.model]"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :multiple="item.multiple"
        :collapse-tags="item.multiple"
        :filterable="item.filterable"
        :placeholder="item.placeholder || '请选择'"
        :popper-append-to-body="false"
        @change="handleChange"
      >
        <el-option
          v-for="opt in item.options"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        >
        </el-option>
      </el-select>
      <el-cascader
        v-if="item.type === 'cascader'"
        v-model="filter[item.model]"
        :options="item.options"
        :props="item.props"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :collapse-tags="item.props && item.props.multiple"
        :filterable="item.filterable"
        :placeholder="item.placeholder || '请选择'"
        :popper-append-to-body="false"
        @change="handleChange"
      ></el-cascader>
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        v-model="filter[item.model]"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :format="item.format || 'YYYY-MM-DD'"
        :value-format="item.valueFormat || 'YYYY/MM/DD'"
        :shortcuts="item.shortcuts"
        :placeholder="item.placeholder || '请选择日期'"
        :disabledDate="item.disabledDate"
        :popper-append-to-body="false"
        @change="handleChange"
      >
      </el-date-picker>
      <el-date-picker
        v-if="item.type === 'daterange'"
        type="daterange"
        v-model="filter[item.model]"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :shortcuts="item.shortcuts"
        :format="item.format || 'YYYY-MM-DD'"
        :value-format="item.valueFormat || 'YYYY/MM/DD'"
        :range-separator="separator || '至'"
        :start-placeholder="item.startPlaceholder || '开始日期'"
        :end-placeholder="item.endPlaceholder || '结束日期'"
        :disabledDate="item.disabledDate"
        unlink-panels
        :popper-append-to-body="false"
        @change="handleChange"
      >
      </el-date-picker>
    </div>
    <!-- <slot name="end" :row="filter"></slot> -->
    <div class="button-wrap">
      <el-button type="primary" @click="handleSearch">查询</el-button>
      <el-button type="primary" plain @click="handleReset"> 重置 </el-button>
    </div>
  </section>
</template>

<script lang="ts" src="./filter.ts"></script>

<style lang="scss" scoped>
.cus-filter-wrap {
  display: flex;
  align-items: center;

  .filter-item {
    margin: 8px $gap 8px 0;
  }
}
</style>
