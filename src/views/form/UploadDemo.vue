<template>
  <div>
    <h2 style="margin-bottom: 20px">上传器 Upload</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>点击上传</b></template>
      <el-upload
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :on-success="handleSuccess"
        :on-error="handleError"
        :limit="3"
        :file-list="fileList"
        list-type="text"
      >
        <el-button type="primary">点击上传</el-button>
        <template #tip>
          <div style="margin-top: 6px; color: #909399; font-size: 12px">只能上传 jpg/png 文件，最多3个</div>
        </template>
      </el-upload>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>拖拽上传</b></template>
      <el-upload
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        drag
        :on-success="handleDragSuccess"
      >
        <el-icon style="font-size: 48px; color: #c0c4cc"><UploadFilled /></el-icon>
        <div style="margin-top: 8px; color: #606266">将文件拖到此处，或<em style="color: #409EFF">点击上传</em></div>
      </el-upload>
    </el-card>
    <el-card>
      <template #header><b>图片上传（模拟展示）</b></template>
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
        :on-preview="handlePreview"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview" />
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadFilled, Plus } from '@element-plus/icons-vue'

const fileList = ref([])
const dialogVisible = ref(false)
const dialogImageUrl = ref('')

const handleSuccess = (res) => {
  ElMessage.success('上传成功')
}
const handleError = () => {
  ElMessage.error('上传失败（Mock服务不可用时可能出现）')
}
const handleDragSuccess = () => {
  ElMessage.success('拖拽上传成功')
}
const handlePreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
</script>
