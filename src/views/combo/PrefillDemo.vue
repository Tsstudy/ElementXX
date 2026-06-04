<template>
  <div class="prefill-page">
    <h2 class="page-title">预填单</h2>

    <div class="prefill-wrapper">
      <el-card class="steps-card">
        <el-steps :active="activeStep" align-center>
          <el-step title="账户与服务" description="选择账户类型" />
          <el-step title="个人基本信息" description="填写身份信息" />
          <el-step title="地址和联系信息" description="联系方式" />
          <el-step title="附件上传" description="上传相关文件" />
        </el-steps>
      </el-card>

      <div class="section-group">
        <!-- 子区域1：账户选择 -->
        <el-card class="section-card">
        <template #header>
          <div class="section-header" @click="collapsed.acct = !collapsed.acct">
            <span class="section-title">{{ collapsed.acct ? '&#x25B6;' : '&#x25BC;' }} 账户选择</span>
            <el-tag :type="collapsed.acct ? 'info' : ''" size="small">{{ collapsed.acct ? '已折叠' : '展开中' }}</el-tag>
          </div>
        </template>
        <div v-show="!collapsed.acct">
          <el-alert type="warning" :closable="false" show-icon style="margin-bottom: 18px">
            <template #title>请您至少选择1个活期账户，最多2种活期账户和1种定期账户。</template>
          </el-alert>

          <el-form label-width="140px" label-position="right">
            <el-form-item label="账户类型">
              <el-checkbox-group v-model="form.acct.accountTypes">
                <el-checkbox label="定期一本通" />
                <el-checkbox label="英镑活期账户" />
                <el-checkbox label="人民币活期账户" />
                <el-checkbox label="美元活期账户" />
                <el-checkbox label="港币活期账户" />
                <el-checkbox label="欧元活期账户" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <span class="desc-text">开户成功后，我们将提供以下服务：网上银行、手机银行服务，对账单服务</span>
            </el-form-item>

            <el-divider />

            <el-form-item label="对账单发送方式">
              <el-radio-group v-model="form.acct.statementType">
                <el-radio label="electronic">电子对账单</el-radio>
                <el-radio label="paper">纸质对账单</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <span class="desc-text">如有特殊需要请联系分行。</span>
            </el-form-item>

            <el-divider />

            <el-form-item label="是否申请借记卡">
              <el-radio-group v-model="form.acct.debitCard">
                <el-radio label="yes">是</el-radio>
                <el-radio label="no">否</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item v-if="form.acct.debitCard === 'yes'">
              <span class="desc-text">申请人需年满18岁，且长期在英国定居或学习。</span>
            </el-form-item>

            <el-form-item label="开户网点">
              <el-input v-model="form.acct.branch" placeholder="请输入开户网点" style="max-width: 400px" clearable />
            </el-form-item>
          </el-form>
        </div>
      </el-card>

      <!-- 子区域2：资金信息 -->
      <el-card class="section-card">
        <template #header>
          <div class="section-header" @click="collapsed.fund = !collapsed.fund">
            <span class="section-title">{{ collapsed.fund ? '&#x25B6;' : '&#x25BC;' }} 资金信息</span>
            <el-tag :type="collapsed.fund ? 'info' : ''" size="small">{{ collapsed.fund ? '已折叠' : '展开中' }}</el-tag>
          </div>
        </template>
        <div v-show="!collapsed.fund">
          <el-form class="fund-form" label-width="160px" label-position="right">

            <el-form-item label="开户原因">
              <el-checkbox-group v-model="form.fund.openReasons">
                <el-checkbox label="移民" />
                <el-checkbox label="留学" />
                <el-checkbox label="工作" />
                <el-checkbox label="投资" />
                <el-checkbox label="其他" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="开立账户用途">
              <el-checkbox-group v-model="form.fund.accountPurposes">
                <el-checkbox label="储蓄" />
                <el-checkbox label="代发工资" />
                <el-checkbox label="社保医疗" />
                <el-checkbox label="投资理财" />
                <el-checkbox label="偿还贷款" />
                <el-checkbox label="处理日常收支" />
                <el-checkbox label="其他" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="财富来源国家/地区">
              <el-input v-model="form.fund.wealthCountry" placeholder="请输入国家/地区" style="max-width: 400px" clearable />
            </el-form-item>

            <el-form-item label="预计未来12个月的资金来源">
              <el-checkbox-group v-model="form.fund.fundSources">
                <el-checkbox v-for="item in fundSourceOptions" :key="item" :label="item" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="初始存款金额 (GBP)">
              <el-input-number v-model="form.fund.initialDeposit" :min="0" :precision="2" style="width: 280px" />
            </el-form-item>

            <el-form-item label="预计每月交易笔数">
              <el-input-number v-model="form.fund.monthlyTrades" :min="0" placeholder="选填" style="width: 200px" />
              <span class="desc-text" style="margin-left: 8px">选填</span>
            </el-form-item>

            <el-form-item label="预计的账户操作">
              <el-checkbox-group v-model="form.fund.operations">
                <el-checkbox v-for="item in operationOptions" :key="item" :label="item" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="预计账户每月流水金额 (GBP)">
              <el-input-number v-model="form.fund.monthlyFlow" :min="0" :precision="2" style="width: 280px" />
            </el-form-item>

            <el-form-item label="是否会定期接收或者汇出款项到英国以外的账号" class="long-label">
              <el-radio-group v-model="form.fund.foreignTransfer">
                <el-radio label="yes">是</el-radio>
                <el-radio label="no">否</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="初始存款和后续的持续资金来源是否是配偶、家庭或其他第三方" class="long-label">
              <el-radio-group v-model="form.fund.thirdPartySource">
                <el-radio label="yes">是</el-radio>
                <el-radio label="no">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
      </el-card>

      <!-- 子区域3：营销偏好 -->
      <el-card class="section-card">
        <template #header>
          <div class="section-header" @click="collapsed.marketing = !collapsed.marketing">
            <span class="section-title">{{ collapsed.marketing ? '&#x25B6;' : '&#x25BC;' }} 营销偏好</span>
            <el-tag :type="collapsed.marketing ? 'info' : ''" size="small">{{ collapsed.marketing ? '已折叠' : '展开中' }}</el-tag>
          </div>
        </template>
        <div v-show="!collapsed.marketing">
          <el-form label-width="140px" label-position="right">

            <el-form-item>
              <el-checkbox v-model="form.marketing.agreeContact">
                我同意DDbank有限公司就其提供的账户、产品和服务信息，以及我可能感兴趣的DDbank其他公司的账户、产品和服务信息联系我。
              </el-checkbox>
            </el-form-item>

            <el-form-item label="联系方式">
              <el-checkbox-group v-model="form.marketing.contactChannels" :disabled="!form.marketing.agreeContact">
                <el-checkbox label="邮寄" />
                <el-checkbox label="电话" />
                <el-checkbox label="电子邮件" />
                <el-checkbox label="手机短信" />
              </el-checkbox-group>
            </el-form-item>

            <el-divider />

            <el-form-item>
              <el-checkbox v-model="form.marketing.agreeShare">
                我同意DDbank有限公司将我的联系方式分享给DDbank的其他公司。这些公司可以就我可能感兴趣的账户、产品和服务联系我。
              </el-checkbox>
            </el-form-item>

            <el-form-item label="分享方式">
              <el-checkbox-group v-model="form.marketing.shareChannels" :disabled="!form.marketing.agreeShare">
                <el-checkbox label="邮寄" />
                <el-checkbox label="电话" />
                <el-checkbox label="电子邮件" />
                <el-checkbox label="手机短信" />
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    </div>

    <div class="footer-bar">
      <el-button @click="goHome">返回首页</el-button>
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-button type="success" @click="handleNext">下一步</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const activeStep = 0

const collapsed = reactive({
  acct: false,
  fund: false,
  marketing: false
})

const form = reactive({
  acct: {
    accountTypes: [],
    statementType: 'electronic',
    debitCard: '',
    branch: ''
  },
  fund: {
    openReasons: [],
    accountPurposes: [],
    wealthCountry: '',
    fundSources: [],
    initialDeposit: null,
    monthlyTrades: null,
    operations: [],
    monthlyFlow: null,
    foreignTransfer: '',
    thirdPartySource: ''
  },
  marketing: {
    agreeContact: false,
    contactChannels: [],
    agreeShare: false,
    shareChannels: []
  }
})

const fundSourceOptions = [
  '薪金', '商业收益', '遗产继承', '投资收益', '退休收入',
  '个人储蓄', '资产出售', '生活费', '家庭收入', '租金收入',
  '利息收入', '自雇收入', '佣金', '抚养费', '社会救助',
  '信托', '礼品', '保险理赔/支付', '暴利/赌博收入',
  '客户不愿提供财富来源', '其他'
]

const operationOptions = [
  '储蓄', '营运资金', '投资', '收取薪金养老金', '电汇交易',
  '活期或定期存款', '现金收支', '资金汇划', '房屋贷款', '临时贷款',
  '国际汇兑', '网上银行', '透支', '旅游储蓄', '学费',
  '社保医疗', '偿还贷款', '处理日常收支', '旅行费用', '普惠金融', '其他'
]

const goHome = () => {
  ElMessage.info('返回首页')
}

const handleSave = () => {
  ElMessage.success('表单已保存')
}

const handleNext = () => {
  ElMessage.success('进入下一步')
}
</script>

<style scoped>
.prefill-page {
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.page-title {
  margin-bottom: 20px;
  font-size: 22px;
  color: #303133;
}

.prefill-wrapper {
  background: #f5f7fa;
  border: 10px solid #dcdfe6;
  border-radius: 8px;
  padding: 20px;
  font-size: 13px;
}

.prefill-wrapper :deep(.el-form-item__label),
.prefill-wrapper :deep(.el-checkbox),
.prefill-wrapper :deep(.el-radio),
.prefill-wrapper :deep(.el-alert),
.prefill-wrapper :deep(.el-step__title),
.prefill-wrapper :deep(.el-step__description) {
  font-size: 13px;
}

.steps-card {
  margin-bottom: 20px;
}

.section-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-card {
  overflow: visible;
}

.section-card :deep(.el-card__body) {
  overflow: visible;
}

:deep(.el-form-item__label) {
  white-space: normal;
  word-break: break-word;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

.section-title:hover {
  color: #409EFF;
}

.desc-text {
  color: #909399;
  font-size: 13px;
}

.fund-form {
  max-width: 950px;
  margin: 0 auto;
}

.long-label :deep(.el-form-item__label) {
  line-height: 1.4;
  align-self: flex-start;
  padding-top: 2px;
}

:deep(.el-checkbox-group) {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
}

:deep(.el-checkbox) {
  margin-right: 0;
  height: auto;
  white-space: normal;
  word-break: break-word;
}

.footer-bar {
  position: fixed;
  bottom: 0;
  left: 220px;
  right: 0;
  padding: 14px 24px;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  z-index: 100;
}
</style>
