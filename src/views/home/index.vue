<template>
  <div class="home">
    <el-container>
      <el-aside width="220px" class="left" >
        <div class="aside-title">
          <img src="../../assets/img/logo_admin.png" alt="">
        </div>
        <el-menu style="width: 221px" background-color="#353b4e" text-color="#adafb5"
          active-text-color="#ffd04b"
        >
          <!-- 一级菜单 -->
          <el-menu-item>首页</el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu>
            <template slot="title">内容管理</template>
            <el-menu-item>发表文章</el-menu-item>
            <el-menu-item>内容列表</el-menu-item>
            <el-menu-item>评论列表</el-menu-item>
            <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
          <el-submenu>
            <template slot="title">粉丝管理</template>
            <el-menu-item>图文数据</el-menu-item>
            <el-menu-item>粉丝概况</el-menu-item>
            <el-menu-item>粉丝画像</el-menu-item>
            <el-menu-item>粉丝列表</el-menu-item>
          </el-submenu>
          <el-menu-item>账户信息</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>
          333
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped lang="less">
.left {
  background-color: #353b4e;
  height: 100vh;
  overflow: hidden;
  .aside-title {
    padding: 14px 0;
    background-color: rgb(29, 21, 37);
    text-align: center;
    img {
      height: 40px;
    }
  }
}
</style>
