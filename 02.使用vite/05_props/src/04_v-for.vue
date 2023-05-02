<template>
<ul>
  <li v-for="name in arr">{{ name }}</li>
</ul>
</template>

<script setup>
import { ref } from 'vue';
const arr=ref(['孙悟空','猪八戒','沙和尚'])
</script>

<style lang="scss" scoped>

</style>