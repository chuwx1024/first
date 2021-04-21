<template>
  <div class="sbox">
    <p>子组件2</p>
    <button @click="onChangeNumber(-1)">-</button>
    <input type="text" :value="value" :disabled='disabled'>
    <button @click="onChangeNumber(1)">+</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['value', 'min', 'max', 'disabled'],
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
      let newdata = this.value + data
      if (newdata < this.min) {
        newdata = this.min
      } else if (newdata > this.max) {
        newdata = this.max
      }
      this.$emit('input', newdata)
    }
  }
}

</script>

<style scoped lang="less">
</style>
