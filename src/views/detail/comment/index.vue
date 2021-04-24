<template>
  <div class="box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>评论管理</span>
      </div>
      <el-table
        :data="articles"
        stripe
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="comment_status"
          label="评论状态"
          width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.comment_status"
              active-color="#409eff"
              inactive-color="#dcdfe6">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="total_comment_count"
          label="总评论数">
        </el-table-column>
        <el-table-column
          prop="fans_comment_count"
          label="粉丝总评论数">
        </el-table-column>
        <el-table-column
          label="操作">
          <template >
            <el-button type="text">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      // tableData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄'
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄'
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1516 弄'
      // }],
      articles: [
        {
          id: 12232,
          title: '呵呵呵',
          total_comment_count: 10,
          fans_comment_count: 0,
          comment_status: false
        },
        {
          id: 12232,
          title: '呵呵呵',
          total_comment_count: 10,
          fans_comment_count: 0,
          comment_status: false
        },
        {
          id: 12232,
          title: '呵呵呵',
          total_comment_count: 10,
          fans_comment_count: 0,
          comment_status: false
        }
      ]
    }
  },
  created () {
    // this.loadArticles()
  },
  methods: {
    loadArticles () {
      this.$axios({
        method: 'get',
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        this.articles = res.data.data.results
      }).catch(err => {
        this.$message({
          message: err,
          type: 'warning'
        })
      })
    }
  }
}
</script>

<style>

</style>
