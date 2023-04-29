<template>
    <div class="tab-item">
        <!-- 放置图片 -->
        <div class="photo">
            <img :src="item.img" :alt="item.name">
            <span>{{ item.rate }}</span>
        </div>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <div class="hot-bar">
                <div class="inner">{{ item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
/**
 * 子组件中的数据通常不会直接在子组件中定义，这样会导致与视图发生耦合，丧失灵活性
 * 子组件中的数据通常在创建实例时指定
 * 父组件可以通过props向子组件传递数据
 * 使用props：
 *      -先在子组件中定义props
 */
const props = defineProps(['item'])

const item = reactive({
    name: props.item.name,
    img: props.item.img,
    rate: props.item.rate,
    hot: props.item.hot
})
</script>

<style lang="css" scoped>
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
        linear-gradient(90deg, rgb(187, 3, 52) 50%,
            rgb(66, 2, 12));
    white-space: nowrap;
}
</style>