<template>
  <div>
    <h2 style="margin-bottom: 20px">单选框 Radio</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础用法</b></template>
      <el-radio-group v-model="radio1">
        <el-radio label="选项1">选项1</el-radio>
        <el-radio label="选项2">选项2</el-radio>
        <el-radio label="选项3">选项3</el-radio>
      </el-radio-group>
      <p style="margin-top: 10px; color: #909399">当前选中: {{ radio1 }}</p>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>按钮样式</b></template>
      <el-radio-group v-model="radio2">
        <el-radio-button label="北京" />
        <el-radio-button label="上海" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
      </el-radio-group>
      <p style="margin-top: 10px; color: #909399">当前选中: {{ radio2 }}</p>
    </el-card>
    <el-card>
      <template #header><b>带边框 & 禁用</b></template>
      <el-radio-group v-model="radio3">
        <el-radio label="A" border>选项A</el-radio>
        <el-radio label="B" border>选项B</el-radio>
        <el-radio label="C" border disabled>禁用选项</el-radio>
      </el-radio-group>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('选项1')
const radio2 = ref('北京')
const radio3 = ref('A')
</script>
