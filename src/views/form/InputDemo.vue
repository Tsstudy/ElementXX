<template>
  <div>
    <h2 style="margin-bottom: 20px">输入框 Input</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础输入框</b></template>
      <el-input v-model="input1" placeholder="请输入内容" style="max-width: 400px" clearable />
      <p style="margin-top: 10px; color: #909399">输入内容: {{ input1 }}</p>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>不同类型</b></template>
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
        <el-input v-model="input2" placeholder="文本类型" />
        <el-input v-model="input3" type="password" placeholder="密码类型" show-password />
        <el-input v-model="input4" type="textarea" :rows="3" placeholder="文本域" />
        <el-input v-model="input5" type="number" placeholder="数字类型" />
      </div>
    </el-card>
    <el-card>
      <template #header><b>复合型输入框</b></template>
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
        <el-input v-model="input6" placeholder="前置内容">
          <template #prepend>Http://</template>
        </el-input>
        <el-input v-model="input7" placeholder="后置内容">
          <template #append>.com</template>
        </el-input>
        <el-input v-model="input8" placeholder="前后都有">
          <template #prepend>https://</template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const input7 = ref('')
const input8 = ref('')
</script>
