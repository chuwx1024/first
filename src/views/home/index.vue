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
        :data="Articles"
        style="width: 100%">
        <!-- table 只能渲染文本,渲染其他的,需要自定义---- -->
        <el-table-column
          prop="cover"
          label="封面"
          width="180">
          <template slot-scope="scope">
            <img :src="scope.row.cover.images[0]" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
          <template slot-scope="scope">
            <!-- <span v-show="scope.row.status === 0">草稿</span>
            <span v-show="scope.row.status === 1">待审核</span>
            <span v-show="scope.row.status === 2">审核通过</span>
            <span v-show="scope.row.status === 3">审核失败</span>
            <span v-show="scope.row.status === 4">已删除</span> -->
            <!-- <span>{{ ArticlesStatus[scope.row.status].value }}</span>
             -->
            <el-tag
              :type="ArticlesStatus[scope.row.status].tape"
            >{{ ArticlesStatus[scope.row.status].value }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="pubdate"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
          <template>
            <el-button style="marginLeft: 0;marginRight: 20px" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      filterForm: {
        status: '',
        channel_id: '',
        begin_pudate: '',
        end_pubdate: ''
      },
      rangedate: '',
      Articles: [{
        cover: {
          images: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11302429824%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620730162&t=13f8214d3399138b38704af7b2d260de'],
          type: 1
        },
        id: 1195253183874596900,
        pubdate: '2019-11-15 16:12:20',
        status: 0,
        title: '我是公主'
      }],
      ArticlesStatus: [
        {
          tape: '',
          value: '草稿'
        },
        {
          tape: 'info',
          value: '待审核'
        },
        {
          tape: 'success',
          value: '审核通过'
        },
        {
          tape: 'warning',
          value: '审核失败'
        },
        {
          tape: 'danger',
          value: '已删除'
        }
      ]
    }
  },
  created () {
    this.fakeArticles()
    this.loadArticles()
  },
  methods: {
    fakeArticles () {
      for (var i = 0; i < 10; i++) {
        const num = i % 5
        const obj = this.Articles[0]
        // if (num === 0) {
        //   obj.status = 0
        //   this.Articles.push(JSON.parse(JSON.stringify(obj)))
        // } else if (num === 1) {
        //   obj.status = 1
        //   this.Articles.push(JSON.parse(JSON.stringify(obj)))
        // } else if (num === 2) {
        //   obj.status = 2
        //   this.Articles.push(JSON.parse(JSON.stringify(obj)))
        // } else if (num === 3) {
        //   obj.status = 3
        //   this.Articles.push(JSON.parse(JSON.stringify(obj)))
        // } else {
        //   obj.status = 4
        //   this.Articles.push(JSON.parse(JSON.stringify(obj)))
        // }
        switch (num) {
          case 0:
            obj.status = 0
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 1:
            obj.status = 1
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 2:
            obj.status = 2
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 3:
            obj.status = 3
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 4:
            obj.status = 4
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
        }
      }
    },
    loadArticles () {
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
img {
  width: 50%;
}
</style>
