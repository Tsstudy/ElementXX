<template>
  <div>
    <h2 style="margin-bottom: 20px">Popconfirm 气泡确认框</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础用法</b></template>
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <el-popconfirm title="确定要删除此项吗?" @confirm="handleConfirm" @cancel="handleCancel">
          <template #reference>
            <el-button type="danger">删除</el-button>
          </template>
        </el-popconfirm>
        <el-popconfirm title="确定要执行此操作吗?" confirm-button-text="确认" cancel-button-text="再想想" @confirm="handleConfirm">
          <template #reference>
            <el-button>点击触发</el-button>
          </template>
        </el-popconfirm>
      </div>
    </el-card>
    <el-card style="margin-bottom: 20px">
      <template #header><b>不同触发方式 & 图标</b></template>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center">
        <el-popconfirm
          title="hover 即可触发确认"
          trigger="hover"
          icon-color="#E6A23C"
        >
          <template #reference>
            <el-tag type="warning">Hover 我</el-tag>
          </template>
        </el-popconfirm>
        <el-popconfirm
          title="点击图标来确认操作"
          icon-color="#67C23A"
          :icon="SuccessFilled"
        >
          <template #reference>
            <el-button type="success" :icon="SuccessFilled">自定义图标</el-button>
          </template>
        </el-popconfirm>
      </div>
    </el-card>
    <el-card>
      <template #header><b>表格中使用</b></template>
      <el-table :data="tableData" style="width: 100%; max-width: 500px">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="role" label="角色" />
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-popconfirm title="确定移除该用户?" @confirm="handleDelete(scope.row)">
              <template #reference>
                <el-button type="danger" size="small" link>删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { SuccessFilled } from '@element-plus/icons-vue'

const tableData = ref([
  { name: '张三', role: '管理员' },
  { name: '李四', role: '编辑者' },
  { name: '王五', role: '浏览者' }
])

const handleConfirm = () => {
  ElMessage.success('操作已确认')
}
const handleCancel = () => {
  ElMessage.info('已取消操作')
}
const handleDelete = (row) => {
  ElMessage.success(`已删除用户: ${row.name}`)
}
</script>
