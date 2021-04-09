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
            <img src="../assets/img/avatar.jpg" alt="">
            <span class="el-dropdown-link">水若寒与</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账户信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  layoutheader: 'LayoutHeader'
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
      border-radius: 20px;
      margin-right: 8px;
    }
  }
}

</style>
