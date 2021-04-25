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
          prop="total_comment_count"
          label="总评论数">
        </el-table-column>
        <el-table-column
          prop="fans_comment_count"
          label="粉丝总评论数">
        </el-table-column>
        <el-table-column
          prop="comment_status"
          label="评论状态"
          width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.comment_status"
              active-color="#409eff"
              @change="onStatusChange(scope.row)"
              inactive-color="#dcdfe6">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template  slot-scope="scope">
            <el-button
            @click="$router.push(`/comment/${scope.row.id}`)"
            type="text">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="1000"
          @current-change="onChangePage"
          >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  data () {
    return {
      articles: [
        {
          id: 12233332,
          title: '呵呵呵',
          total_comment_count: 10,
          fans_comment_count: 0,
          comment_status: false
        },
        {
          id: 122332,
          title: '呵呵呵',
          total_comment_count: 10,
          fans_comment_count: 0,
          comment_status: false
        },
        {
          id: 12238882,
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
    },
    onStatusChange (article) {
      this.$axios({
        method: 'put',
        url: '/comments/status',
        params: {
          article_id: article.id.toString()
        },
        data: {
          allow_comment: article.comment_status
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        this.$message({
          message: err,
          type: 'error'
        })
      })
    },
    onChangePage (page) {
      console.log(page)
      // 页码改变重新发请求,请求数据
    }
  }
}
</script>

<style lang="less" scoped>
  .el-pagination {
    margin-top: 20px
  }
</style>
