<template>
  <!-- 
    component 是一个动态组件
        -component最终以什么标签呈现，由他的is属性决定




   -->
  <button @click="isShow = !isShow">点我一下</button>
  <component :is="isShow?A:B"></component>
</template>

<script setup>
import { ref } from 'vue';
import A from './components/A.vue'
import B from './components/B.vue'

const isShow = ref(true)
</script>

<style lang="css" scoped></style>