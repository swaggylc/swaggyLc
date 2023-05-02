<template>
  <h1>我是APP根组件</h1>
  <MyBox :number="count"></MyBox>
  <button @click="count++">点我一下</button>
</template>

<script setup>
  import MyBox from './components/MyBox.vue';
  import { ref } from 'vue';
  const count=ref(0)

</script>

<style lang="css" scoped></style>