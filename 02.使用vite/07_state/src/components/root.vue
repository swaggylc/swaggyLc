<template>
    <h2>这是root中根组件</h2>
    <ul>
        <li>
            <componentA></componentA>
        </li>
        <li>
            <componentB></componentB>
        </li>
    </ul>
</template>

<script setup>
import componentA from './componentA.vue';
import componentB from './componentB.vue';
import { ref,provide } from 'vue'
const count = ref(0)
const increment = () => {
    count.value++
}

provide('count', {
    count,
    increment
})

</script>

<style lang="css" scoped></style>