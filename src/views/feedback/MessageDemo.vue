<template>
  <div>
    <h2 style="margin-bottom: 20px">Message 消息提示</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>不同类型的消息</b></template>
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <el-button plain @click="showSuccess">成功消息</el-button>
        <el-button plain @click="showWarning">警告消息</el-button>
        <el-button plain @click="showInfo">信息消息</el-button>
        <el-button plain @click="showError">错误消息</el-button>
      </div>
    </el-card>
    <el-card>
      <template #header><b>自定义消息</b></template>
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <el-button plain type="primary" @click="showCustom">可关闭的消息</el-button>
        <el-button plain type="success" @click="showHtml">动态消息</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const showSuccess = () => {
  ElMessage.success('这是一条成功消息')
}
const showWarning = () => {
  ElMessage.warning('这是一条警告消息')
}
const showInfo = () => {
  ElMessage.info('这是一条信息消息')
}
const showError = () => {
  ElMessage.error('这是一条错误消息')
}
const showCustom = () => {
  ElMessage({
    message: '这条消息可手动关闭',
    type: 'success',
    showClose: true,
    duration: 5000
  })
}
const showHtml = () => {
  ElMessage({
    message: '你已成功登录系统',
    type: 'success',
    duration: 2000
  })
}
</script>
