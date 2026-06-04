<template>
  <el-container style="height: 100vh">
    <el-header style="height: 60px; padding: 0; background: #fff; border-bottom: 1px solid #e6e6e6; display: flex; align-items: center; justify-content: space-between">
      <div style="display: flex; align-items: center; padding-left: 20px">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #409EFF, #67C23A); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; font-size: 18px">XX</div>
        <span style="font-size: 20px; font-weight: 600; margin-left: 10px; color: #303133">ElementXX</span>
      </div>
      <div style="padding-right: 20px">
        <el-tabs v-model="activeTab" @tab-click="handleTabClick">
          <el-tab-pane label="Tab 1" name="first"></el-tab-pane>
          <el-tab-pane label="Tab 2" name="second"></el-tab-pane>
          <el-tab-pane label="Tab 3" name="third"></el-tab-pane>
        </el-tabs>
      </div>
    </el-header>
    <el-container>
      <el-aside width="220px" style="border-right: 1px solid #e6e6e6; background: #fff">
        <el-menu
          :default-openeds="['basic', 'form', 'feedback']"
          router
          :default-active="$route.path"
          style="border-right: none"
        >
          <el-sub-menu index="basic">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>基础组件</span>
            </template>
            <el-menu-item index="/basic/button">
              <el-icon><CircleCheck /></el-icon>
              <span>按钮 Button</span>
            </el-menu-item>
            <el-menu-item index="/basic/border">
              <el-icon><Box /></el-icon>
              <span>边框 Border</span>
            </el-menu-item>
            <el-menu-item index="/basic/icon">
              <el-icon><Star /></el-icon>
              <span>图标 Icon</span>
            </el-menu-item>
            <el-menu-item index="/basic/text">
              <el-icon><Document /></el-icon>
              <span>文本 Text</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="form">
            <template #title>
              <el-icon><Edit /></el-icon>
              <span>表单组件</span>
            </template>
            <el-menu-item index="/form/autocomplete">自动补全框 Autocomplete</el-menu-item>
            <el-menu-item index="/form/checkbox">多选框 Checkbox</el-menu-item>
            <el-menu-item index="/form/datepicker">日期选择器 DatePicker</el-menu-item>
            <el-menu-item index="/form/input">输入框 Input</el-menu-item>
            <el-menu-item index="/form/radio">单选框 Radio</el-menu-item>
            <el-menu-item index="/form/switch">开关 Switch</el-menu-item>
            <el-menu-item index="/form/upload">上传器 Upload</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="feedback">
            <template #title>
              <el-icon><WarningFilled /></el-icon>
              <span>反馈组件</span>
            </template>
            <el-menu-item index="/feedback/alert">Alert 提醒</el-menu-item>
            <el-menu-item index="/feedback/dialog">Dialog 对话框</el-menu-item>
            <el-menu-item index="/feedback/message">Message 消息提示</el-menu-item>
            <el-menu-item index="/feedback/messagebox">MessageBox 消息弹出框</el-menu-item>
            <el-menu-item index="/feedback/popconfirm">Popconfirm 气泡确认</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main style="padding: 20px; background: #f5f7fa; overflow-y: auto">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const activeTab = ref('first')

const handleTabClick = (tab) => {
  ElMessage.info(`你点击了 ${tab.props.label}`)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}
</style>
