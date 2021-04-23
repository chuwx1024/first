<template>
  <div class="channelSelest">
    <el-select @input="onInput"  placeholder="请选择区域" :value="value">
      <el-option v-show="AllSelest"  label='所有频道' :value="null"></el-option>
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
  name: 'Selest',
  components: {},
  props: {
    value: {
      required: true
    },
    AllSelest: {
      type: Boolean
    }
  },
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
    },
    onInput (data) {
      this.$emit('input', data)
    }
  }
}

</script>

<style scoped lang="less">
</style>
