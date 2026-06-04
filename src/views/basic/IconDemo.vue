<template>
  <div>
    <h2 style="margin-bottom: 20px">图标 Icon</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>常用图标</b></template>
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <div v-for="icon in icons" :key="icon.name" style="display: flex; flex-direction: column; align-items: center; width: 80px; padding: 10px; cursor: pointer; border-radius: 4px" @click="copyIcon(icon.name)">
          <component :is="icon.comp" style="font-size: 28px; color: #409EFF" />
          <span style="font-size: 12px; margin-top: 6px; color: #606266">{{ icon.name }}</span>
        </div>
      </div>
    </el-card>
    <el-card>
      <template #header><b>不同颜色的图标</b></template>
      <div style="display: flex; gap: 20px; font-size: 32px">
        <el-icon color="#409EFF"><StarFilled /></el-icon>
        <el-icon color="#67C23A"><CircleCheckFilled /></el-icon>
        <el-icon color="#E6A23C"><WarningFilled /></el-icon>
        <el-icon color="#F56C6C"><CircleCloseFilled /></el-icon>
        <el-icon color="#909399"><InfoFilled /></el-icon>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { Search, Edit, Delete, Share, Upload, Download, Setting, User, StarFilled, CircleCheckFilled, WarningFilled, CircleCloseFilled, InfoFilled } from '@element-plus/icons-vue'

const icons = [
  { name: 'Search', comp: Search },
  { name: 'Edit', comp: Edit },
  { name: 'Delete', comp: Delete },
  { name: 'Share', comp: Share },
  { name: 'Upload', comp: Upload },
  { name: 'Download', comp: Download },
  { name: 'Setting', comp: Setting },
  { name: 'User', comp: User }
]

const copyIcon = (name) => {
  ElMessage.success(`图标名称: ${name}`)
}
</script>
