<template>
  <!-- 选项卡的外部容器 -->
  <Tab>
    <template v-slot:players>
      <TabList :items="players" :max-hot="playMaxHot"></TabList>
    </template>
    <template v-slot:teams>
      <TabList :items="teams" :max-hot="teamMaxHot"></TabList>
    </template>
  </Tab>
</template>

<script setup>
import { ref, reactive } from 'vue'
import TabItem from './components/TabItem.vue';
import TabList from './components/TabList.vue';
import Tab from './components/Tab.vue';
// 创建一个变量来记录选项卡的状态
const current = ref(0)    //0表示球员，1表示球队
const players = reactive([
  {
    name: '梅西',
    img: '/images/messi.png',
    rate: 1,
    hot: 433320
  }, {
    name: '罗纳尔多',
    img: '/images/ronaldo.png',
    rate: 2,
    hot: 253336
  }, {
    name: '内马尔',
    img: '/images/neymar.png',
    rate: 3,
    hot: 203320
  }
])
const teams = reactive([
  {
    name: '法国',
    img: '/images/法国.jpg',
    rate: 1,
    hot: 433020
  }, {
    name: '巴西',
    img: '/images/巴西.jpg',
    rate: 2,
    hot: 303020
  }, {
    name: '荷兰',
    img: '/images/荷兰.jpg',
    rate: 3,
    hot: 253020
  }
])
// 获取最大的热度
const playMaxHot = players[0].hot
const teamMaxHot = teams[0].hot



</script>

