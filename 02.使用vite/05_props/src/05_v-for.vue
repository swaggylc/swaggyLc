<template>
  <button @click="arr2.unshift({id:4,name:'唐三藏',age:58})">点我一下，添加arr2</button>
  <ul>
    <li v-for="name in arr">{{ name }}</li>
  </ul>
  <div v-for="item in arr2">
    {{ item.name }}--{{ item.age }}
  </div>
  <hr>
  <ul>
    <li v-for="{id,name,age} in arr2" :key="id">
      {{ name }}--{{ age }}
      <input type="text">
    </li>
  </ul>

  <!-- 
    我们使用v-for遍历时，旧的结构和新的结构默认是按照顺序进行对比的

    在使用v-for时，可以为元素指定一个唯一的key
      -有了key后，元素再比较时就会按照相同的key去比较
    真实元素上并没有key属性 

   -->
</template>

<script setup>
import { ref } from 'vue';
const arr = ref(['孙悟空', '猪八戒', '沙和尚'])
const arr2 = ref([
  {
    id: 1,
    name: '孙悟空',
    age: 18
  },
  {
    id: 2,
    name: '猪八戒',
    age: 28
  },
  {
    id: 3,
    name: '沙和尚',
    age: 38
  }
])
</script>

<style lang="scss" scoped></style> 