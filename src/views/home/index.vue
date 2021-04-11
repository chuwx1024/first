<template>
  <div class="main-container">
    <el-card class="firstCard">
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
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>共找到? 条符合条件的内容</span>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="封面"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
        </el-table-column>
      </el-table>
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
      rangedate: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created () {
    const token = window.localStorage.getItem('user-token')
    this.$axios({
      method: 'get',
      url: '/articles',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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
.firstCard {
  margin-bottom: 14px;
}
</style>
