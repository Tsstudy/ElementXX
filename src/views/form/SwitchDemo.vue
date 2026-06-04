<template>
  <div>
    <h2 style="margin-bottom: 20px">开关 Switch</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础用法</b></template>
      <div style="display: flex; gap: 20px; align-items: center">
        <el-switch v-model="val1" />
        <el-switch v-model="val2" active-text="开启" inactive-text="关闭" />
        <span style="color: #606266">状态: {{ val1 ? '开' : '关' }} / {{ val2 ? '开启中' : '已关闭' }}</span>
      </div>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>不同颜色</b></template>
      <div style="display: flex; gap: 20px">
        <el-switch v-model="val3" active-color="#13ce66" inactive-color="#ff4949" />
        <el-switch v-model="val4" active-color="#409EFF" inactive-color="#909399" />
        <el-switch v-model="val5" active-color="#E6A23C" style="--el-switch-on-color: #E6A23C" />
      </div>
    </el-card>
    <el-card>
      <template #header><b>禁用 & 加载</b></template>
      <div style="display: flex; gap: 20px">
        <el-switch v-model="val6" disabled />
        <el-switch v-model="val7" loading />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(true)
const val3 = ref(true)
const val4 = ref(true)
const val5 = ref(false)
const val6 = ref(false)
const val7 = ref(true)
</script>
