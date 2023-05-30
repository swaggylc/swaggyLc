<template>
    <div class="mask" v-show="props.isShow" @click.self="$emit('hidden')">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['isShow'])
const emit=defineEmits(['hidden'])
</script>

<style lang="css" scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
}
</style>