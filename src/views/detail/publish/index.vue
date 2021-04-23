<template>
<div class="publishArticle">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>发布文章</span>
    </div>
    <el-form ref="form" :model="Pubarticle" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="Pubarticle.title"></el-input>
      </el-form-item>
      <el-form-item label="频道">
        <!-- <el-select v-model="Pubarticle.channel_id" placeholder="请选择区域">
          <el-option
            v-for="item in channels"
            :label="item.name"
            :value="item.id"
            :key="item.id"
          ></el-option>
        </el-select> -->
        <ChannelSelest v-model="Pubarticle.channel_id" ></ChannelSelest>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="Pubarticle.cover">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="内容">
         <quill-editor
          ref="myQuillEditor"
          v-model="Pubarticle.content"
           :options="editorOption"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(true)">发表</el-button>
        <el-button @click="onSubmit(false)">存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</div>

</template>

<script>
// 引入富文本组件样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import ChannelSelest from '@/components/channelSelest/channelSelest.vue'
export default {
  name: 'PublishArticle',
  components: {
    quillEditor,
    ChannelSelest
  },
  data () {
    return {
      Pubarticle: {
        title: '',
        content: '',
        cover: {
          type: 0,
          images: ''
        },
        channel_id: 10
      },
      // channels: [],
      editorOption: {}
    }
  },
  created () {
    // this.onloadChannels()
    console.log('c122222')
    const ID = this.$route.params.Articleid
    if (ID) {
      this.loadArticleDetails()
    }
  },
  methods: {
    onSubmit (draft) {
      if (this.$route.params.Articleid) {
        this.uploadArticleDetails(draft)
      } else {
        this.addArticle(draft)
      }
    },
    // onloadChannels () {
    //   this.$axios({
    //     method: 'get',
    //     url: '/channels'
    //   }).then(res => {
    //     this.channels = res.data.data.channels
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
    addArticle (draft) {
      this.$axios({
        method: 'post',
        url: '/articles',
        // headers: {
        //   Authorization: `Bearer ${window.localStorage.getItem('user-token')}`
        // },
        params: {
          draft
        },
        data: this.Pubarticle
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err, '保存失败')
      })
    },
    loadArticleDetails () {
      const ID = this.$route.params.Articleid
      this.$axios({
        method: 'get',
        url: `/articles/${ID}`
      }).then(res => {
        // console.log(res)
        this.Pubarticle = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    uploadArticleDetails (draft) {
      this.$axios({
        method: 'put',
        url: `/articles/${this.$route.params.Articleid}`,
        params: {
          draft
        },
        data: this.Pubarticle
      }).then(res => {
        console.log(res)
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

<style lang="less" scoped>
.el-form-item {
  width: 80%;
}
// /deep/.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
//   margin-top: -8px;
//   }
/deep/.ql-toolbar.ql-snow .ql-formats {
  line-height: 24px;
}
/deep/.ql-editor {
  height: 200px;
}
</style>
