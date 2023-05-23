<template>
    <div>
        SlotDemo组件

        <!-- 
                可以在slot中指定一个默认内容，默认会在组件中没有内容时显示

             -->
        <!-- <slot >插槽的默认内容</slot> -->
        <div>
            <slot name="tom" :obj="stu"></slot>
        </div>
    </div>
</template>

<script setup>
const stu = {
    name: '孙悟空',
    age: 18,
    sex:'男'
}
</script>

<style lang="scss" scoped></style>