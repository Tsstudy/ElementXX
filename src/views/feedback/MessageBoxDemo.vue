<template>
  <div>
    <h2 style="margin-bottom: 20px">MessageBox 消息弹出框</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>Alert / Confirm / Prompt</b></template>
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <el-button plain @click="openAlert">Alert 提醒</el-button>
        <el-button plain type="primary" @click="openConfirm">Confirm 确认</el-button>
        <el-button plain type="warning" @click="openPrompt">Prompt 输入</el-button>
      </div>
    </el-card>
    <el-card>
      <template #header><b>自定义</b></template>
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <el-button plain type="success" @click="openCustom">自定义标题/内容</el-button>
        <el-button plain type="danger" @click="openVNode">提交确认</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessageBox, ElMessage } from 'element-plus'

const openAlert = () => {
  ElMessageBox.alert('这是一段内容', '标题', {
    confirmButtonText: '确定',
    callback: () => {
      ElMessage.success('点击了确定')
    }
  })
}

const openConfirm = () => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    ElMessage.success('删除成功')
  }).catch(() => {
    ElMessage.info('已取消删除')
  })
}

const openPrompt = () => {
  ElMessageBox.prompt('请输入你的邮箱', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: '邮箱格式不正确'
  }).then(({ value }) => {
    ElMessage.success(`邮箱: ${value}`)
  }).catch(() => {
    ElMessage.info('取消输入')
  })
}

const openCustom = () => {
  ElMessageBox({
    title: '自定义标题',
    message: '这是使用配置方式创建的消息弹出框',
    type: 'success',
    showCancelButton: true
  })
}

const openVNode = () => {
  ElMessageBox.confirm('确认提交此订单?', '订单确认', {
    distinguishCancelAndClose: true,
    confirmButtonText: '提交',
    cancelButtonText: '返回修改'
  }).then(() => {
    ElMessage.success('订单已提交')
  }).catch((action) => {
    ElMessage.info(action === 'cancel' ? '返回修改' : '已取消')
  })
}
</script>
