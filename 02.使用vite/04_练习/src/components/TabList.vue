<template>
    <!-- 用来显示列表 -->
    <div class="tab-list">
        <TabItem v-for="item in props.items" :item="item" :max-hot="props.maxHot"></TabItem>
    </div>
</template>

<script setup>
import TabItem from './TabItem.vue';
// 定义参数
const props=defineProps(['items','maxHot'])
</script>

<style lang="css" scoped>
.tab-list {
    margin: 20px;
}
</style>