<!-- 
    Tab组件的主要作用就是在多个选项卡之间进行切换
        -其中显示的主要内容是 TabList ，而 TabList 的数据在App组件中
        如果按照之前的方式编写代码，必须要在App组件中将数据传递给Tab组件
        然后由Tab组件传递给TabList  步骤较为繁琐
        
        
 -->

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
                <!-- <TabList :items="players" :max-hot="playMaxHot"></TabList> -->
                <slot name="players"></slot>
            </div>
            <!-- 球队信息 -->
            <div v-show="current === 1">
                <!-- <TabList :items="teams" :max-hot="teamMaxHot"></TabList> -->
                <slot name="teams"></slot>
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
</style>