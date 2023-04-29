<template>
    <div>
        <h2>我是子组件MyBox--{{ props.number }}</h2>
        
    </div>
</template>

<script setup>
/**
 * 父组件可以通过props向子组件传递数据
 * 注意：父组件传递给子组件的props都是只读的，无法修改
 *      即使可以修改，也尽量不要在子组件中修改父组件的数据
 * 
 *      属性名：
 *          -定义属性名时要遵循驼峰命名法
 */

// 定义props
const props = defineProps(['number'])
</script>

<style lang="css" scoped>
div {
    color: orange;
}
</style>