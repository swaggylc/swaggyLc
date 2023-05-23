<template>
    <h2 class="box3">我是组件C</h2>
    <!-- <h2 class="boxc">我是组件C</h2> -->
    <!-- <h3 :class="$attrs.class">我也是组件C</h3> -->

    <!-- 
    在模板中，可以通过 $attrs 访问到父组件中透传过来的属性
        可以手动指定透传过来的属性添加到哪些元素上
 -->
    <!-- {{ $attrs }} -->
</template>

<script setup>
/**
 * 在script中，可以通过 useAttrs() 访问到父组件中透传过来的属性
 * 
 * 
 */
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(attrs);
</script>

<script>
export default {
    inheritAttrs: false,
}
</script>

<style lang="css" scoped>
.boxc {
    background-color: orange;
}
</style>