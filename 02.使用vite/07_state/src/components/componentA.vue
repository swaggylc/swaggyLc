<template>
    <h3>componentA--{{ countStore.count }}</h3>
    <button @click="countStore.increment">按钮</button>

    <h3>componentA2--{{ newCountStore.count }}--{{ newCountStore.double }}</h3>
    <button @click="newCountStore.increment">pinia中action方法</button>
</template>

<script setup>
import { ref,inject } from 'vue'
import { countStore } from '../stroe/count'

// 引入store钩子函数
import { useCountStore } from '../stroe/countStore';
// 获取store实例

const newCountStore = useCountStore()


// const { count, increment } = inject('count')

/**
 * 状态管理
 *      -状态(state)
 *          -应用当中的所有数据就是状态
 *          -状态即数据
 *      -视图(view)
 *          -视图用来呈现数据，用户通过视图访问数据
 *      -交互(actions)
 *          -用户的操作
 *          -状态会根据用户在视图中的操作而发生变化，用户操作视图，视图再去改变状态
 * 
 * 提升状态
 *      -当有多个组件需要使用同一个state时，可以将state提升到这些组件共同的祖先组件中声明
 *          -这样一来所有这些组件都可以通过祖先元素来访问这个state
 * 
 * 
 */





</script>

<style lang="css" scoped></style>