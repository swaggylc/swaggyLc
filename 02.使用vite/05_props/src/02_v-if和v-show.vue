<template>
  <h1>我是APP根组件</h1>
  <button @click="isShow = !isShow">点我切换</button>

  <!--
    v-show：根据表达式的值来决定元素是否显示(通过display来切换元素是否显示的状态) 
        -通过CSS来切换组件的显示与否，切换时不会涉及到组件的重新渲染，切换性能较好，
        -但是在初始化时，需要对所有组件都初始化，即使组件初始时不显示，所以它的初始化性能较差
    v-if：根据表达式的值来决定元素是否显示(会直接将元素删除)
        -通过添加或删除元素来决定元素的显示与否，切换时会反复渲染元素，切换性能较差，
        -但初始化时它只会初始化需要显示的元素，初始化性能较好

        -v-if可以和v-else-if v-else结合使用
        -v-if可以配合template使用

  -->
  <div v-if="isShow">
    <h2>我是if中的内容</h2>
  </div>
  <div v-else>
    <h1>我是else中的内容</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(true)

</script>

<style lang="css" scoped></style>