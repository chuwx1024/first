<template>
  <div class="sbox">
    <p>子组件2</p>
    <button @click="onChangeNumber(-1)">-</button>
    <input
      @blur="onBlur"
      type="text" :value="value" :disabled='disabled'>
    <button @click="onChangeNumber(1)">+</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  // props: ['value', 'min', 'max', 'disabled'],
  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    disabled: {
      type: Boolean
    }
    // 引用类型必须这么写
    // arr: {
    //   type: Object,
    //   default () {
    //     return {

    //     }
    //   }
    // },
    // arr: {
    //   type: Array,
    //   default () {
    //     return {

    //     }
    //   }
    // },
  },
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
    },
    onBlur () {
      this.$emit('blur')
    }
  }
}

</script>

<style scoped lang="less">
</style>
