<template>
  <div class="main-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <div>
        <el-form  v-model="filterForm">
          <el-form-item label="文章状态">
            <el-radio-group v-model="filterForm.status" >
              <el-radio label="全部"></el-radio>
              <el-radio label="草稿"></el-radio>
              <el-radio label="待审核"></el-radio>
              <el-radio label="审核通过"></el-radio>
              <el-radio label="审核失败"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道列表">
            <el-select v-model="filterForm.channer_id"  placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件选择">
            <el-date-picker
              v-model="rangedate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterForm: {
        status: '',
        channel_id: '',
        begin_pudate: '',
        end_pubdate: ''
      },
      rangedate: ''
    }
  }

}
</script>

<style lang="less" scoped>
/deep/.el-card__header {
  border-bottom: 2px dotted #cccc;
}
.el-button {
  margin-left: 68px;
}
</style>
