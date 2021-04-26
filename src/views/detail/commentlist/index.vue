<template>
  <div class="commentlist">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="text">返回全部图文</el-button>
      </div>
      <el-table
        :data="comment"
        style="width: 100%">
        <el-table-column
          label="头像"
          width="180">
          <template slot-scope="scope">
            <img width="50%" :src="scope.row.aut_photo" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          label="评论内容"
          width="180">
        </el-table-column>
        <el-table-column
          label="点赞" >
          <template slot-scope="scope">
            {{ scope.row.is_liking === 1 ? '已赞' : '点赞'}}
          </template>
        </el-table-column>
        <el-table-column
          prop="like_count"
          label="点赞数量">
        </el-table-column>
        <el-table-column
          prop="pubdate"
          label="评论日期">
        </el-table-column>
        <el-table-column
          prop="reply_count"
          label="回复数量">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CommentList',
  components: {},
  props: {
    articleid: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      comment: [
        {
          aut_id: 1,
          aut_name: '哪吒',
          aut_photo: 'https://img0.baidu.com/it/u=1101060091,1073424182&fm=26&fmt=auto&gp=0.jpg',
          content: 'b',
          is_liking: 1,
          is_top: 0,
          like_count: 1,
          pubdate: '2019-11-18T17:11:08',
          reply_count: 3
        },
        {
          aut_id: 2,
          aut_name: '哪吒33',
          aut_photo: 'https://img0.baidu.com/it/u=1101060091,1073424182&fm=26&fmt=auto&gp=0.jpg',
          content: 'c',
          is_liking: 0,
          is_top: 0,
          like_count: 6,
          pubdate: '2019-03-19T17:11:08',
          reply_count: 5
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadComments()
    this.fakeData()
  },
  methods: {
    loadComments () {
      this.$axios({
        method: 'get',
        url: '/comments',
        params: {
          type: 'a',
          source: this.$route.params.articleid
        }
      }).then(res => {
        const comment = res.data.data.results
        comment.forEach(function (item) {
          item.pubdate = moment(item.pubdate).format('MM DD YYYY, h:mm:ss')
        })
        console.log(res)
        // this.comment = comment
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    fakeData () {
      this.comment.forEach(function (item) {
        item.pubdate = moment(item.pubdate).format('YYYY-DD-MM HH:mm:ss')
      })
    }
  }
}

</script>

<style scoped lang="less">
</style>
