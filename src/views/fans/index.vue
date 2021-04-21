<template>
  <div class="father">
    <p>父组件</p>
    {{ num }}
    <ButtonOption :value="num" @input="num = $event"></ButtonOption>
    <ButtonO :value="num" @input="num = $event" @change="onChangeNumber"></ButtonO>
  </div>
</template>

<script>
import ButtonOption from '@/components/emit.vue'
import ButtonO from '@/components/emit1.vue'
export default {
  name: '',
  components: {
    ButtonOption,
    ButtonO
  },
  props: {},
  data () {
    return {
      num: 123
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onChangeNumber (a, b) {
      console.log(a, b)
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
