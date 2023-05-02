<template>
  <!-- 选项卡的外部容器 -->
  <div class="tab-wrapper">
    <!-- 选项卡头部 -->
    <header class="tab-head">
      <!-- 定义两个按钮 -->
      <div @click="current = 0" class="tab-button" :class="{ active: current === 0 }">热门球员</div>
      <div @click="current = 1" class="tab-button" :class="{ active: current === 1 }">热门球队</div>
    </header>
    <!-- 选项卡主体 -->
    <div class="main">
      <!-- 
          current = 0   显示球员
          current = 1   显示球队
            v-show指令：用来设置一个内容是否显示
              v-show是通过 display：none 来设置一个元素是否显示的
               
       -->
      <!-- 球员信息 -->
      <div v-show="current === 0">
        <!-- 球员 -->
        <div class="tab-list">
          <!-- <TabItem :item="players[0]" :max-hot="maxHot"></TabItem>
          <TabItem :item="players[1]" :max-hot="maxHot"></TabItem>
          <TabItem :item="players[2]" :max-hot="maxHot" ></TabItem> -->
          <TabItem v-for="item in players" :item="item" :max-hot="playMaxHot"></TabItem>
        </div>
      </div>
      <!-- 球队信息 -->
      <div v-show="current === 1">
        <div class="tab-list">
          <!-- <TabItem :item="country"></TabItem>
          <TabItem :item="country2"></TabItem>
          <TabItem :item="country3"></TabItem> -->
          <TabItem v-for="item in teams" :item="item" :max-hot="teamMaxHot"></TabItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import TabItem from './components/TabItem.vue';
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

<style lang="css" scoped>
.tab-wrapper {
  width: 800px;
  background-color: rgb(45, 83, 211);
  box-sizing: border-box;
  padding: 20px;
}

.tab-head {
  display: flex;
  border-radius: 10px;
  /* 溢出隐藏 */
  overflow: hidden;

}

.tab-button {
  font-size: 30px;
  text-align: center;
  /* 弹性布局伸缩 */
  flex: auto;
  background-color: #fff;
  /* 内边距：上下为10，左右为0 */
  padding: 10px 0;
  color: #000;
  /* 更改鼠标悬浮的样式 */
  cursor: pointer;
  /* 添加过渡效果 */
  transition: 0.5s;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);
}

.active {
  color: #fff;
  background-color: rgb(187, 3, 52);
}

/* 内容的样式 */
.tab-list {
  margin: 20px;
}
</style>