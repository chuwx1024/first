<template>
  <div class="header-container">
     <!-- left -->
    <div class="left">
      <i class="el-icon-s-fold"></i>
      <span>家里屯大学</span>
    </div>
    <div class="right">
     <!-- right -->
        <el-dropdown trigger='click'>
          <div class="dropdown-con">
            <img :src="user.photo" alt="">
            <span class="el-dropdown-link">{{ user.name }}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账户信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item @click.native="onLoginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '呵呵呵',
        photo: 'https://img2.baidu.com/it/u=3144296246,804426693&fm=26&fmt=auto&gp=0.jpg'
      }
    }
  },
  created () {
    this.loadUser()
  },
  methods: {
    onLoginOut () {
      this.$confirm('确定要退出?', '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem('user-token')
        this.$router.push('./login')
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
    loadUser () {
      this.$axios({
        method: 'GET',
        url: '/user/profile'
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
.header-container {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    font-size: 18px;
    i {
      margin-right: 8px;
    }
  }
  .dropdown-con {
    display: flex;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      margin-right: 8px;
    }
  }
}

</style>
