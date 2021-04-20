<template>
  <div class="son">
    <p>子组件</p>
    <button @click="onChange(-1)">-</button>
    <input @input="onChangeNumber" type="text" :value="value">
    <button @click="onChange(1)">+</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['value'],
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onChange (num) {
      const newnum = this.value + num
      this.$emit('input', newnum)
    },
    onChangeNumber (e) {
      this.$emit('input', e.target.value)
    }
  }
}

</script>

<style scoped lang="less">
</style>
