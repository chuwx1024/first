<template>
  <div class="channelSelest">
    <el-select  placeholder="请选择区域">
      <el-option
        v-for="item in channels"
        :label="item.name"
        :value="item.id"
        :key="item.id"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.onloadChannels()
  },
  methods: {
    onloadChannels () {
      this.$axios({
        method: 'get',
        url: '/channels'
      }).then(res => {
        this.channels = res.data.data.channels
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<style scoped lang="less">
</style>
