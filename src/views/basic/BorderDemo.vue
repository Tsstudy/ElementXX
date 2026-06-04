<template>
  <div>
    <h2 style="margin-bottom: 20px">边框 Border</h2>
    <el-card style="margin-bottom: 20px">
      <template #header><b>基础边框</b></template>
      <el-row :gutter="16">
        <el-col :span="6" v-for="item in borderStyles" :key="item.label">
          <div :style="{ border: item.style, padding: '20px', textAlign: 'center', borderRadius: item.radius || '0', marginBottom: '10px', background: '#fff' }">
            {{ item.label }}
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <template #header><b>圆角边框</b></template>
      <el-row :gutter="16">
        <el-col :span="6">
          <div style="border: 2px solid #409EFF; border-radius: 0; padding: 20px; text-align: center; background: #fff">无圆角</div>
        </el-col>
        <el-col :span="6">
          <div style="border: 2px solid #67C23A; border-radius: 4px; padding: 20px; text-align: center; background: #fff">小圆角</div>
        </el-col>
        <el-col :span="6">
          <div style="border: 2px solid #E6A23C; border-radius: 12px; padding: 20px; text-align: center; background: #fff">中圆角</div>
        </el-col>
        <el-col :span="6">
          <div style="border: 2px solid #F56C6C; border-radius: 50%; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center; background: #fff">圆形</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
const borderStyles = [
  { label: '实线边框', style: '2px solid #409EFF', radius: '4px' },
  { label: '虚线边框', style: '2px dashed #67C23A', radius: '4px' },
  { label: '点线边框', style: '2px dotted #E6A23C', radius: '4px' },
  { label: '双线边框', style: '4px double #F56C6C', radius: '4px' }
]
</script>
