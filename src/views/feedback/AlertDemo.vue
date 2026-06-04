<template>
  <div>
    <h2 style="margin-bottom: 20px">Alert 提醒</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础样式</b></template>
      <div style="display: flex; flex-direction: column; gap: 12px">
        <el-alert title="成功提示的文案" type="success" show-icon />
        <el-alert title="消息提示的文案" type="info" show-icon />
        <el-alert title="警告提示的文案" type="warning" show-icon />
        <el-alert title="错误提示的文案" type="error" show-icon />
      </div>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>带描述 & 可关闭</b></template>
      <el-alert
        title="操作成功"
        type="success"
        description="这是一段详细的描述文字，用于解释操作的具体内容"
        show-icon
        closable
        @close="handleClose"
      />
    </el-card>
    <el-card>
      <template #header><b>使用插槽</b></template>
      <el-alert title="提示信息标题" type="warning" show-icon>
        <template #default>
          <p style="margin-top: 4px">这里可以使用插槽来渲染更丰富的内容</p>
        </template>
      </el-alert>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const handleClose = () => {
  ElMessage.info('Alert 已关闭')
}
</script>
