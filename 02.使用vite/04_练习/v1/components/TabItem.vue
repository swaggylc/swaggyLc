<template>
    <div class="tab-item">
        <!-- 放置图片 -->
        <Photo :src="item.img" :alt="item.name" :rate="item.rate"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <!-- hot-bar -->
            <HotBar :hot="item.hot" :max-hot="props.maxHot"></HotBar>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Photo from './Photo.vue';
import HotBar from './HotBar.vue';
/**
 * 子组件中的数据通常不会直接在子组件中定义，这样会导致与视图发生耦合，丧失灵活性
 * 子组件中的数据通常在创建实例时指定
 * 父组件可以通过props向子组件传递数据
 * 使用props：
 *      -先在子组件中定义props
 */
const props = defineProps(['item','max-hot'])

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


.desc {
    font-size: 30px;
    color: #fff;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    flex: auto;
    margin-left: 30px;
}
</style>