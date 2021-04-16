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
              <el-radio :label='null'>全部</el-radio>
              <el-radio label="0">草稿</el-radio>
              <el-radio label="1">待审核</el-radio>
              <el-radio label="2">审核通过</el-radio>
              <el-radio label="3">审核失败</el-radio>
              <el-radio label="4">已删除</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道列表">
            <el-select v-model="filterForm.channel_id" >
              <el-option  label='所有频道' :value="null"></el-option>
              <el-option
                :label="item.name"
                v-for="item in channels"
                :key='item.id'
                :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件选择">
            <el-date-picker
              v-model="rangedate"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click='loadArticles(1)'>查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>共找到{{ totalCount }}条符合条件的内容</span>
      </div>
      <el-table
        :data="Articles"
        v-loading="loading"
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
          <template slot-scope="scope">
            <el-button style="color: #409eff;marginLeft: 0" type="text">编辑</el-button>
            <el-button
              @click='onDeleteArticle(scope.row.id)'
             type="text" style="color: #f56c6c">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="pagination">
      <el-pagination
       @current-change= "onPageChange"
        background
        :disabled="loading"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import JSONbig from 'json-bigint'

export default {
  name: 'Article',
  data () {
    return {
      filterForm: {
        status: null,
        channel_id: null
      },
      rangedate: [],
      Articles: [
        {
          cover: {
            images: ['https://img0.baidu.com/it/u=3014059266,3321960934&fm=26&fmt=auto&gp=0.jpg'],
            type: 1
          },
          id: 1195253183874596900,
          pubdate: '2019-11-15 16:12:20',
          status: 0,
          title: '我是公主'
        },
        {
          cover: {
            images: ['https://img0.baidu.com/it/u=3014059266,3321960934&fm=26&fmt=auto&gp=0.jpg'],
            type: 1
          },
          id: 1195253183874596900,
          pubdate: '2019-11-15 16:12:20',
          status: 0,
          title: '我是公主'
        }
      ],
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
      ],
      totalCount: 100,
      loading: '',
      channels: [],
      page: ''
    }
  },
  created () {
    this.fakeArticles()
    this.heheData()
    this.loadArticles(1)
    this.onloadChannels()
  },
  methods: {
    heheData () {
      this.Articles.forEach(function (value) {
        value = JSONbig.parse(JSON.stringify(value))
      })
      // 使用的时候需要toString() 编程字符串
    },
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
            obj.id++
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 1:
            obj.status = 1
            obj.id++
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 2:
            obj.status = 2
            obj.id++
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 3:
            obj.status = 3
            obj.id++
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
          case 4:
            obj.status = 4
            obj.id++
            this.Articles.push(JSON.parse(JSON.stringify(obj)))
            break
        }
      }
    },
    loadArticles (page = 1) {
      // 开始加载loading
      this.loading = true
      const token = window.localStorage.getItem('user-token')
      this.$axios({
        method: 'get',
        url: '/articles',
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          page,
          per_page: 10, // 默认10tiao
          status: this.filterForm.status,
          channel_id: this.filterForm.channel_id, // 不传后面的值就是所有
          begin_pudate: this.rangedate ? this.rangedate[0] : null, // 日期删除后变为null
          end_pubdate: this.rangedate ? this.rangedate[1] : null // null 没有下标,会报错
        }
      }).then(res => {
        // console.log(res)
        this.Articles = res.data.data.results
        this.totalCount = res.data.data.total_count
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.loading = false
      })
    },
    onPageChange (page) {
      this.page = page
      this.loadArticles(page)
    },
    onloadChannels () {
      this.$axios({
        method: 'get',
        url: '/channels'
      }).then(res => {
        this.channels = res.data.data.channels
      }).catch(err => {
        console.log(err)
      })
    },
    onDeleteArticle (id) {
      // 通过Number.Max_SAFE_INTEGER 查询js中最大的安全整数,现在id 已经超出最大范围
      this.$axios({
        method: 'DELETE',
        url: `/articles/${id}`,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('user-token')}`
        }
      }).then(res => {
        console.log(res)
        this.loadArticles(this.page)
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
.box-card {
  margin-bottom: 20px;
  margin-top: 14px;
}
img {
  width: 30%;
}
.pagination {
  text-align: center;
}
/deep/.el-date-editor .el-range-separator {
  padding: 0 0px;
}
</style>
