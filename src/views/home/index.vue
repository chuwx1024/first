<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">侧边</el-aside>
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
