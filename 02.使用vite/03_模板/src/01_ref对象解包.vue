<template>
  <div>
    <h1>模板</h1>
    <h1>{{ newMsg }}</h1>
    <!-- ref对象在模板中会自动解包(要求ref对象必须是顶层对象) -->
    <h2>{{ msg }}</h2>
    <button @click="changeMsgHandle">点我一下</button>
    <h2>{{ obj.name }}</h2>

    <!-- name不是顶层响应式对象，所以不能自动解包 -->
    <h2>{{ obj2.name.value }}</h2>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const msg = ref('孙悟空')

// obj.value.name
const obj = ref({
  name: '张三',
  age: 18
})

// obj2.name.value
/**
 * {
 *    name:{
 *            value:'李四'
 *            }
 *      }
 */
const obj2 = {
  name: ref('李四'),
  age: ref(18)
}



const changeMsgHandle = () => {
  msg.value = '哈哈哈'    //若不加value，则要在msg之前加上$，$msg
}

const newMsg = computed(() => {
  return msg.value + '-哈哈哈'
})

</script>

<style lang="scss" scoped></style>