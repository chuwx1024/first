<template>
  <div class="father">
    <p>父组件</p>
    {{ num }}
    <ButtonOption :value="num" @input="num = $event"></ButtonOption>
    <ButtonO :value="num"
      :min="1"
      :max="10"
      :disabled="disabled"
      @blur="onBlur"
     @input="num = $event" @change="onChangeNumber"></ButtonO>
  </div>
</template>

<script>
import ButtonOption from '@/components/emit.vue'
import ButtonO from '@/components/emit1.vue'
export default {
  name: 'MIN',
  components: {
    ButtonOption,
    ButtonO
  },
  props: {},
  data () {
    return {
      num: 1,
      min: 1,
      max: 10,
      disabled: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onChangeNumber (a, b) {
      console.log(a, b)
    },
    onBlur () {
      this.disabled = !this.disabled
      console.log(this.disabled)
    }
  }
}

</script>

<style scoped lang="less">
.sbox {
  border: 1px solid orange;
  margin-top: 50px;
}
</style>
