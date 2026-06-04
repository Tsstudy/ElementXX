<template>
  <div>
    <h2 style="margin-bottom: 20px">Dialog 对话框</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础弹窗</b></template>
      <el-button type="primary" @click="dialogVisible = true">打开 Dialog</el-button>
      <el-dialog v-model="dialogVisible" title="提示" width="500px">
        <p>这是一段信息内容</p>
        <p style="margin-top: 10px; color: #909399">你可以在此处放置任何自定义内容</p>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>嵌套表单弹窗</b></template>
      <el-button type="success" @click="formDialogVisible = true">打开表单弹窗</el-button>
      <el-dialog v-model="formDialogVisible" title="用户信息" width="500px">
        <el-form :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="城市">
            <el-select v-model="form.city" placeholder="请选择城市">
              <el-option label="北京" value="beijing" />
              <el-option label="上海" value="shanghai" />
              <el-option label="广州" value="guangzhou" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="formDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </template>
      </el-dialog>
    </el-card>
    <el-card>
      <template #header><b>居中弹窗 & 全屏</b></template>
      <div style="display: flex; gap: 12px">
        <el-button type="warning" @click="centerVisible = true">居中 Dialog</el-button>
        <el-button type="danger" @click="fullVisible = true">全屏 Dialog</el-button>
      </div>
      <el-dialog v-model="centerVisible" title="居中弹窗" center width="400px">
        <p style="text-align: center">这是一个居中对齐的弹窗</p>
        <template #footer>
          <el-button type="primary" @click="centerVisible = false">知道了</el-button>
        </template>
      </el-dialog>
      <el-dialog v-model="fullVisible" title="全屏弹窗" fullscreen>
        <p>全屏模式下的内容区域</p>
        <template #footer>
          <el-button @click="fullVisible = false">关闭</el-button>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const formDialogVisible = ref(false)
const centerVisible = ref(false)
const fullVisible = ref(false)

const form = reactive({
  name: '',
  email: '',
  city: ''
})

const submitForm = () => {
  formDialogVisible.value = false
  ElMessage.success(`提交成功! 姓名: ${form.name}, 邮箱: ${form.email}`)
}
</script>
