<template>
  <h1>
    属性的透传
  </h1>
  <h2 class="box1">我是h2</h2>
  <C class="box2" @click="showMsg"></C>
</template>

<script setup>
import C from './components/C.vue'

/**
 * 透传属性
 *    -在组件上设置属性，会自动传递给组件的根元素
 *    -这样一来可以方便我们在父组件中为子组件设置属性
 *    -透传会发生在没有被声明为 props 和 emits 的属性上
 *    -透传的属性会覆盖子组件根元素上的原有属性
 *    -自动的透传只适用于单根组件，如果组件有多个根元素，透传会失效
 * 
 */
function showMsg() {
  alert('showMsg')
}

</script>

<style lang="css" scoped>
.box2 {
  background-color: red;
}
</style>