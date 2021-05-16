<template>
  <div class="accont">
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户头像">
        <!-- <div class="image">
          <img width="200px"  :src="user.photo">
        </div> -->
          <el-upload
            action="http://ttapi.research.itcast.cn/mp/v1_0/user/photo"
            class="avatar-uploader"
            :http-request="HeadImage"
            :show-file-list="false"
            >
          <img  :src="user.photo" class="avatar">
        </el-upload>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input type="textarea" v-model="user.intro"></el-input>
      </el-form-item>
      <el-form-item label="个人邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input disabled v-model="user.mobile"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      user: {
        email: 'xxx@.heh',
        id: 1,
        intro: '吃吃',
        mobile: 18383993,
        name: '吃吃吃',
        photo: 'https://img2.baidu.com/it/u=3144296246,804426693&fm=26&fmt=auto&gp=0.jpg'
      }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.onloadUser()
  },
  methods: {
    onloadUser () {
      this.$axios({
        method: 'get',
        url: '/user/profile'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    onsSubmit () {
      const { name, email, intro } = this.user
      this.$axios({
        method: 'PATCH',
        url: '/user/profile',
        data: {
          name,
          email,
          intro
        }
      }).then(res => {
        console.log(res)
        EventBus.$emit('update-user', this.user)
      }).catch(err => {
        console.log(err)
      })
    },
    HeadImage (config) {
      console.log(config)
      const file = new FormData()
      file.append('photo', config.file)
      this.$axios({
        method: 'PATCH',
        url: '/user/photo',
        data: file
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<style scoped lang="less">
.image {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  img {
    height: 100%;
  }
}
/deep/.el-upload {
  width: 200px;
  height: 200px;
  border: 1px dotted purple;
  line-height: 200px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
