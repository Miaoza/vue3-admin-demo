<!-- 自定义表单 -->
<template>
  <section class="cus-form">
    <el-form
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-width="labelWidth"
    >
      <el-row align="middle">
        <el-col
          v-for="item in formItems"
          :key="item.model"
          :span="item.span || 24"
        >
          <el-form-item :label="item.label" :prop="item.prop">
            <el-input
              v-if="item.type === 'input'"
              v-model="form[item.model]"
              placeholder="请输入"
              v-bind="item.attrs || {}"
              @change="handleChange"
            ></el-input>
            <el-input-number
              v-if="item.type === 'number'"
              v-model="form[item.model]"
              placeholder="请输入"
              v-bind="item.attrs || {}"
              @change="handleChange"
            ></el-input-number>
            <el-select
              v-if="item.type === 'select'"
              v-model="form[item.model]"
              placeholder="请选择"
              v-bind="item.attrs || {}"
              @change="handleChange"
            >
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              >
              </el-option>
            </el-select>
            <el-date-picker
              v-if="['date', 'week', 'month', 'year'].includes(item.type)"
              :type="item.type"
              v-model="form[item.model]"
              placeholder="请选择"
              v-bind="item.attrs || {}"
              @change="handleChange"
            ></el-date-picker>
            <el-date-picker
              v-if="item.type === 'daterange'"
              v-model="form[item.model]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-bind="item.attrs || {}"
              @change="handleChange"
            >
            </el-date-picker>
            <el-switch
              v-if="item.type === 'switch'"
              v-model="form[item.model]"
              v-bind="item.attrs || {}"
              @change="handleChange"
            ></el-switch>
            <el-checkbox-group
              v-if="item.type === 'checkbox'"
              v-model="form[item.model]"
              v-bind="item.attrs || {}"
              @change="handleChange"
            >
              <el-checkbox
                v-for="option in item.options"
                :key="option.value"
                :label="option.value"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </el-checkbox>
            </el-checkbox-group>
            <el-radio-group
              v-if="item.type === 'radio'"
              v-model="form[item.model]"
              v-bind="item.attrs || {}"
              @change="handleChange"
            >
              <el-radio
                v-for="option in item.options"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </el-radio>
            </el-radio-group>
            <el-input
              v-if="item.type === 'textarea'"
              v-model="form[item.model]"
              type="textarea"
              placeholder="请输入"
              v-bind="item.attrs || {}"
              @change="handleChange"
            ></el-input>
            <slot v-if="item.type === 'slot'" :name="item.prop"></slot>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </section>
</template>

<script lang="ts" src="./form.ts"></script>

<style lang="scss" scoped>
// .cus-form{}
</style>
