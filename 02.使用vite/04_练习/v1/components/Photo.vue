<template>
    <div class="photo">
        <img :src="props.src" :alt="props.alt">
        <span>{{ props.rate }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps([
    'src', 'alt', 'rate'
])

/**
 * 第一名：254 45 70
 * 第二名：245 102 1
 * 第三名：247 169 1 
 */
const color = computed(() => {
    // 编写判断颜色的代码(利用计算属性)
    if (props.rate === 1) {
        return 'rgb(254,45,70)'
    } else if (props.rate === 2) {
        return 'rgb(245,102,1)'
    } else {
        return 'rgb(247,169,1)'
    }
})

</script>

<style lang="css" scoped>
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
    background-color: v-bind(color);
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 15px;
}
</style>