<template>

        <h2>这是A组件--{{ props.name }}</h2>

</template>

<script setup>
const props=defineProps(['name'])
</script>

<style lang="scss" scoped>

</style>