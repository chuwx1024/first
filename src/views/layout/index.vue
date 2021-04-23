<template>
  <div class="home">
    <el-container>
      <el-aside width="220px" class="left" >
        <AsideLeft></AsideLeft>
      </el-aside>
      <el-container>
        <el-header>
          <LayoutHeader></LayoutHeader>
        </el-header>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideLeft from '@/views/layout/component/aside.vue'
import LayoutHeader from '../../components/layout-header'

export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    AsideLeft
  }
}
</script>

<style scoped lang="less">
.left {
  background-color: #353b4e;
  height: 100vh;
  overflow: hidden;
}
</style>
