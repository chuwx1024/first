<template>
  <div class="box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>素材管理</span>
      </div>
      <el-row :gutter="20">
        <el-col
          v-for="item in images"
          :key="item.id"
          :xs='24' :sm="12" :md="8" :lg="6">
          <div class="grid-content bg-purple">
            <el-card
              :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
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
          is_collected: true
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
          is_collected: true
        },
        {
          id: 5,
          url: 'https://img0.baidu.com/it/u=2102076840,2356347403&fm=26&fmt=auto&gp=0.jpg',
          is_collected: true
        }
      ]
    }
  },
  created () {
    this.loadImages()
  },
  methods: {
    loadImages () {
      this.$axios({
        method: 'get',
        url: '/user/images',
        params: {
          collect: false
        }
      }).then(res => {
        console.log(res)
        // this.images = res.data.data.resluts
      }).catch(err => {
        console.log(err)
      })
    }

  }

}
</script>

<style lang="less" scoped>
  img {
    height: 220px;
  }
  /deep/.el-card__body {
    text-align: center;
  }
  .el-card.is-always-shadow {
    margin-bottom: 20px;
  }
</style>
