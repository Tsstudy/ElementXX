<template>
  <div>
    <h2 style="margin-bottom: 20px">多选框 Checkbox</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础多选</b></template>
      <el-checkbox-group v-model="checkedCities">
        <el-checkbox label="北京" />
        <el-checkbox label="上海" />
        <el-checkbox label="广州" />
        <el-checkbox label="深圳" />
      </el-checkbox-group>
      <p style="margin-top: 10px; color: #909399">已选: {{ checkedCities.join('、') }}</p>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>禁用状态 & 中间状态</b></template>
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll">全选</el-checkbox>
      <el-checkbox-group v-model="checkedFruits" @change="handleCheckedChange" style="margin-left: 12px">
        <el-checkbox label="苹果" />
        <el-checkbox label="香蕉" />
        <el-checkbox label="橙子" disabled />
        <el-checkbox label="葡萄" />
      </el-checkbox-group>
    </el-card>
    <el-card>
      <template #header><b>按钮样式 & 边框</b></template>
      <el-checkbox-group v-model="checkedBtn">
        <el-checkbox-button label="选项A" />
        <el-checkbox-button label="选项B" />
        <el-checkbox-button label="选项C" />
      </el-checkbox-group>
      <p style="margin-top: 10px; color: #909399">已选: {{ checkedBtn.join('、') }}</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const checkedCities = ref(['北京', '上海'])
const checkedFruits = ref(['苹果'])
const checkedBtn = ref(['选项A'])

const checkAll = ref(false)
const isIndeterminate = ref(true)

const handleCheckAll = (val) => {
  checkedFruits.value = val ? ['苹果', '香蕉', '葡萄'] : []
  isIndeterminate.value = false
}
const handleCheckedChange = (value) => {
  checkAll.value = value.length === 3
  isIndeterminate.value = value.length > 0 && value.length < 3
}
</script>
