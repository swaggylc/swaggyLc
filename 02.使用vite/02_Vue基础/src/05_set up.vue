<template>
    <div>
        <h1 @click="fn">组合式API</h1>
        <h2>{{ msg }}</h2>
        <h3>{{ count }}</h3>
        <h2>{{ obj.name }}--{{ obj.age }}</h2>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    let msg='今天天气很好'
    let count=0
    function fn(){
        alert('哈哈哈哈')
    }
    const obj = reactive({
        name:'孙悟空',
        age:20
    })
</script>

<style lang="scss" scoped>

</style>