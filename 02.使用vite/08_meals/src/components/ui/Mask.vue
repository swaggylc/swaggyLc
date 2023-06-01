<template>
    <!-- teleport可以将组件渲染到网页的指定位置 -->
    <Teleport to="#hello">
        <div :="$attrs" class="mask" v-show="props.isShow" @click.self="$emit('hidden')">
            <slot></slot>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['isShow'])
const emit = defineEmits(['hidden'])
</script>

<style lang="css" scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
</style>