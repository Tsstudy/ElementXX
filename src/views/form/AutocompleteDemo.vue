<template>
  <div>
    <h2 style="margin-bottom: 20px">自动补全框 Autocomplete</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础用法</b></template>
      <el-autocomplete
        v-model="value1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        style="width: 300px"
        clearable
      />
      <p style="margin-top: 10px; color: #909399">选中值: {{ value1 }}</p>
    </el-card>
    <el-card>
      <template #header><b>自定义模板</b></template>
      <el-autocomplete
        v-model="value2"
        :fetch-suggestions="querySearchCustom"
        placeholder="请输入菜名"
        style="width: 300px"
        @select="handleSelect"
      >
        <template #default="{ item }">
          <div style="display: flex; align-items: center; justify-content: space-between">
            <span>{{ item.value }}</span>
            <span style="color: #909399; font-size: 12px">{{ item.address }}</span>
          </div>
        </template>
      </el-autocomplete>
      <p style="margin-top: 10px; color: #909399">选中值: {{ value2 }}</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value1 = ref('')
const value2 = ref('')

const restaurants = [
  { value: '宫保鸡丁', address: '川菜经典' },
  { value: '糖醋里脊', address: '酸甜可口' },
  { value: '麻婆豆腐', address: '麻辣鲜香' },
  { value: '北京烤鸭', address: '外酥里嫩' },
  { value: '红烧肉', address: '肥而不腻' }
]

const querySearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.filter(r => r.value.toLowerCase().includes(queryString.toLowerCase()))
    : restaurants
  cb(results)
}

const querySearchCustom = (queryString, cb) => {
  const results = queryString
    ? restaurants.filter(r => r.value.toLowerCase().includes(queryString.toLowerCase()))
    : restaurants
  cb(results)
}

const handleSelect = (item) => {
  ElMessage.success(`选择了: ${item.value} (${item.address})`)
}
</script>
