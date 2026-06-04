<template>
  <div>
    <h2 style="margin-bottom: 20px">按钮 Button</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础用法</b></template>
      <el-row :gutter="12">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>不同尺寸</b></template>
      <el-row :gutter="12" style="align-items: center">
        <el-button size="large">Large</el-button>
        <el-button>Default</el-button>
        <el-button size="small">Small</el-button>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>禁用状态 & 加载中</b></template>
      <el-row :gutter="12">
        <el-button disabled>禁用按钮</el-button>
        <el-button type="primary" loading>加载中</el-button>
      </el-row>
    </el-card>
    <el-card>
      <template #header><b>图标按钮 & 按钮组</b></template>
      <el-row :gutter="12" style="align-items: center">
        <el-button type="primary" :icon="Search">搜索</el-button>
        <el-button type="primary" :icon="Edit" circle />
        <el-button-group>
          <el-button type="primary" :icon="ArrowLeft">上一页</el-button>
          <el-button type="primary">下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
        </el-button-group>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { Search, Edit, ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
</script>
