<template>
  <div class="sbox">
    <p>子组件2</p>
    <button @click="onChangeNumber(-1)">-</button>
    <input type="text" :value="value">
    <button @click="onChangeNumber(1)">+</button>
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
  watch: {
    value (currentdata, olddata) {
      this.$emit('change', currentdata, olddata)
    }
  },
  created () {},
  methods: {
    onChangeNumber (data) {
      const newdata = this.value + data
      this.$emit('input', newdata)
    }
  }
}

</script>

<style scoped lang="less">
</style>
