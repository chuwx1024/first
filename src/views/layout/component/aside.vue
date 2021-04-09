<template>
<div class="side">
  <div class="aside-title">
    <img src="../../../assets/img/logo_admin.png" alt="">
  </div>
  <el-menu style="width: 221px" background-color="#353b4e" text-color="#adafb5"
    active-text-color="#ffd04b"
    default-active="/"
    router
  >
    <!-- 一级菜单 -->
    <el-menu-item index="/">首页</el-menu-item>
    <!-- 二级菜单 -->
    <el-submenu index="detail">
      <template slot="title">内容管理</template>
      <el-menu-item index="/publish">发表文章</el-menu-item>
      <el-menu-item index="/article">文章列表</el-menu-item>
      <el-menu-item index="/comment">评论列表</el-menu-item>
      <el-menu-item index="material">素材管理</el-menu-item>
    </el-submenu>
    <el-submenu index="fans">
      <template slot="title">粉丝管理</template>
      <el-menu-item index="/book">图文数据</el-menu-item>
      <el-menu-item index="/fans">粉丝概况</el-menu-item>
      <el-menu-item index="/fansphoto">粉丝画像</el-menu-item>
      <el-menu-item index="/fanslist">粉丝列表</el-menu-item>
    </el-submenu>
    <el-menu-item index="/accont">账户信息</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .aside-title {
    padding: 14px 0;
    background-color: rgb(29, 21, 37);
    text-align: center;
    img {
      height: 40px;
    }
  }

</style>
