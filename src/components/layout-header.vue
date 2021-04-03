<template>
  <el-row class="box" type="flex" justify="space-between" style="paddiingTop: 6px; align-item:center">
    <!-- left -->
    <el-col :span='4'  class="collage">
      <i class="el-icon-s-fold"></i>
      <span>家里屯大学</span>
    </el-col>
    <!-- right -->
    <el-col :span="2" class="right">
      <img src="../assets/img/avatar.jpg" alt="">
      <el-dropdown trigger='click'>
        <span class="el-dropdown-link">水若寒与</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>账户信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  layoutheader: 'LayoutHeader'
}
</script>

<style lang="less" scoped>
.box {
  margin-top: 15px;
}
.collage {
  display: flex;
  align-items: center;
  i {
    font-size: 24px;
  }
  span {
    margin-left: 4px;
  }
}
.right {
  display: flex;
  align-items: center;
  img {
    width: 30px;
    margin-right: 8px;
    border-radius: 50%;
  }
}

</style>
