<template>
  <div>
    <h2 style="margin-bottom: 20px">日期选择器 DatePicker</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础日期选择</b></template>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center">
        <div>
          <p style="margin-bottom: 6px">日期选择:</p>
          <el-date-picker v-model="date1" type="date" placeholder="选择日期" />
        </div>
        <div>
          <p style="margin-bottom: 6px">日期范围:</p>
          <el-date-picker v-model="dateRange" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>
      </div>
      <p style="margin-top: 10px; color: #909399">日期: {{ date1 }} | 范围: {{ dateRange }}</p>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>日期时间选择</b></template>
      <div style="display: flex; gap: 20px; flex-wrap: wrap">
        <el-date-picker v-model="datetime" type="datetime" placeholder="选择日期时间" />
      </div>
      <p style="margin-top: 10px; color: #909399">{{ datetime }}</p>
    </el-card>
    <el-card>
      <template #header><b>带快捷选项</b></template>
      <el-date-picker
        v-model="date2"
        type="date"
        placeholder="选择日期"
        :shortcuts="shortcuts"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date1 = ref('')
const date2 = ref('')
const dateRange = ref([])
const datetime = ref('')

const shortcuts = [
  { text: '今天', value: new Date() },
  { text: '昨天', value: () => { const d = new Date(); d.setDate(d.getDate() - 1); return d } },
  { text: '一周前', value: () => { const d = new Date(); d.setDate(d.getDate() - 7); return d } }
]
</script>
