<template>
  <div class="father">
    <p>父组件</p>
    {{ num }}
    <ButtonOption :value="num" @input="num = $event"></ButtonOption>
  </div>
</template>

<script>
import ButtonOption from '@/components/emit.vue'
export default {
  name: '',
  components: {
    ButtonOption
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
  methods: {}
}

</script>

<style scoped lang="less">
</style>
