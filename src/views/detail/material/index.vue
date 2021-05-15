<template>
  <div class="box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>素材管理</span>
        <el-upload
          style="float: right;padding: 3px 0;margin-top: -8px;"
          class="upload-demo"
          action="https://ttapi.research.itcast.cn/mp/v1_0/user/images"
          :headers="uploadHeaders"
          name="image"
          :on-success="onsucess"
          :on-error='onerror'
          >
          <el-button
            type="success">成功按钮</el-button>
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
      <div class="selectAll">
        <el-radio-group v-model="type" @change='onFind'>
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="收藏"></el-radio-button>
      </el-radio-group>
      </div>
      <el-row :gutter="20">
        <el-col
          v-for="item in images"
          :key="item.id"
          :xs='12' :sm="8" :md="6" :lg="4">
          <div class="grid-content bg-purple">
            <el-card
              :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image">
              <div style="padding: 14px;" class="bottomS">
                  <!-- <i :class="item.is_collected ? 'el-icon-star-on' : 'el-icon-star-off' "></i> -->
                  <i :class='{
                    "el-icon-star-on": item.is_collected,
                    "el-icon-star-off": !item.is_collected,
                    }'
                    @click="onCollect(item)"
                    ></i>
                  <i
                    @click="onDelete(item)"
                    class="el-icon-delete"></i>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
const token = window.localStorage.getItem('user-token')
export default {
  data () {
    return {
      images: [
        {
          id: 1,
          url: 'https://img0.baidu.com/it/u=2596200191,2777645264&fm=26&fmt=auto&gp=0.jpg',
          is_collected: false
        },
        {
          id: 2,
          url: 'https://img0.baidu.com/it/u=2596200191,2777645264&fm=26&fmt=auto&gp=0.jpg',
          is_collected: true
        },
        {
          id: 3,
          url: 'https://img1.baidu.com/it/u=4113175551,4092177878&fm=11&fmt=auto&gp=0.jpg',
          is_collected: true
        },
        {
          id: 4,
          url: 'https://img0.baidu.com/it/u=2596200191,2777645264&fm=26&fmt=auto&gp=0.jpg',
          is_collected: false
        },
        {
          id: 5,
          url: 'https://img0.baidu.com/it/u=2102076840,2356347403&fm=26&fmt=auto&gp=0.jpg',
          is_collected: true
        },
        {
          id: 6,
          url: 'https://img0.baidu.com/it/u=2102076840,2356347403&fm=26&fmt=auto&gp=0.jpg',
          is_collected: true
        },
        {
          id: 7,
          url: 'https://img0.baidu.com/it/u=2102076840,2356347403&fm=26&fmt=auto&gp=0.jpg',
          is_collected: false
        },
        {
          id: 8,
          url: 'https://img0.baidu.com/it/u=2102076840,2356347403&fm=26&fmt=auto&gp=0.jpg',
          is_collected: true
        },
        {
          id: 9,
          url: 'https://img0.baidu.com/it/u=2102076840,2356347403&fm=26&fmt=auto&gp=0.jpg',
          is_collected: true
        }
      ],
      type: '全部',
      uploadHeaders: {
        Authorization: `Bearer ${token}`
      }
    }
  },
  created () {
    this.loadImages()
  },
  methods: {
    loadImages (iscollect = false) {
      this.$axios({
        method: 'get',
        url: '/user/images',
        params: {
          collect: iscollect // 是否获取收藏图片
        }
      }).then(res => {
        console.log(res)
        // this.images = res.data.data.resluts
      }).catch(err => {
        console.log(err)
      })
    },
    onFind (value) {
      // if (value === '收藏') {
      //   this.loadImages(true)
      // } else {
      //   this.loadImages()
      // }
      this.loadImages(value === '收藏')
    },
    onCollect (item) {
      this.$axios({
        method: 'PUT',
        url: `/user/images/${item.id}`,
        data: {
          collect: !item.is_collected
        }
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
      item.is_collected = !item.is_collected
    },
    onDelete (item) {
      this.$confirm('是否要删除这张图片?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          method: 'DELETE',
          url: `/user/images/${item.id}`
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
        // 删除
        const index = this.images.findIndex(function (i) {
          return i.id === item.id
        })
        this.images.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    onsucess (res) {
      console.log(res)
    },
    onerror (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="less" scoped>
  img {
    height: 140px;
  }
  /deep/.el-card__body {
    text-align: center;
  }
  .el-card.is-always-shadow {
    margin-bottom: 20px;
  }
  .bottomS {
    display: flex;
    justify-content: space-around;
    i {
      font-size: 22px;
    }
    .el-icon-star-on {
      color: orchid;
    }
  }
  .selectAll {
    text-align: left;
    margin-bottom: 20px;
  }

</style>
