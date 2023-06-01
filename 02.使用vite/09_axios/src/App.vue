<template>
  <h1>
    HELLO AXIOS
  </h1>
  <button @click="getData">点我哦</button>
  <h2>
    {{ msg }}
  </h2>
</template>

<script setup>
import instance from './axios';
import { ref } from 'vue';
var msg = ref('')
const getData = function () {
  const redate = instance.get('/').then(res => {
    console.log(res);
    // 注意：ref数据类型的值，需要通过.value来获取！！！
    msg.value = res.data;
  })
}


console.log(msg);

</script>

<style lang="scss" scoped></style>