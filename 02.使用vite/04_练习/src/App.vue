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
          <div class="tab-item">
            <!-- 放置图片 -->
            <div class="photo">
              <img src="/images/messi.png" alt="梅西">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">梅西</span>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 球队信息 -->
      <div v-show="current === 1">
        球队
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 创建一个变量来记录选项卡的状态
const current = ref(0)    //0表示球员，1表示球队



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

.tab-item {
  display: flex;
  margin-bottom: 40px;

}

/* 容器 */
.photo {
  position: relative;

  width: 150px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
}

/* 图片 */
.photo img {
  width: 100%;
  vertical-align: top;
}

/* 排名 */
.photo span {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: rgb(245, 102, 1);
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 15px;
}

.desc {
  font-size: 30px;
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  flex: auto;
  margin-left: 30px;
}

.hot-bar {
  background-color: rgb(3, 37, 103);
  border-radius: 20px;
  text-indent: 0.5em;
  overflow: hidden;
}

.inner {
  border-radius: 20px;
  background-image: 
  linear-gradient(90deg,rgb(187, 3, 52) 50%,
  rgb(66,2,12));
  white-space: nowrap;
}

</style>