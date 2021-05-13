<template>
  <div class="box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>素材管理</span>
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
                    }'></i>
                  <i class="el-icon-delete"></i>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
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
      type: '全部'
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
