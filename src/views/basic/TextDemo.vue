<template>
  <div>
    <h2 style="margin-bottom: 20px">文本 Text</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>文字链接</b></template>
      <div style="display: flex; gap: 16px">
        <el-link>默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </div>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>带下划线 & 禁用</b></template>
      <div style="display: flex; gap: 16px">
        <el-link underline>有下划线</el-link>
        <el-link :underline="false">无下划线</el-link>
        <el-link disabled>禁用状态</el-link>
      </div>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>文字省略</b></template>
      <el-text truncated style="max-width: 200px; display: block">这是一段很长的文本内容，超出宽度后会自动显示省略号</el-text>
    </el-card>
    <el-card>
      <template #header><b>文本类型</b></template>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <el-text size="large">Large 大号文本</el-text>
        <el-text>Default 默认文本</el-text>
        <el-text size="small">Small 小号文本</el-text>
        <el-text type="primary">Primary 主要文本</el-text>
        <el-text type="success">Success 成功文本</el-text>
        <el-text type="warning">Warning 警告文本</el-text>
        <el-text type="danger">Danger 危险文本</el-text>
        <el-text tag="b">加粗标签文本</el-text>
        <el-text tag="ins">下划线标签文本</el-text>
        <el-text tag="del">删除线标签文本</el-text>
      </div>
    </el-card>
  </div>
</template>
