<template>
    <div>
        <h1>reactive</h1>
        <h2>{{ obj.name }}--{{ obj.age }}</h2>

        <h1>ref</h1>
        <h2>{{ count }}</h2>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
/**
 * reactive() 
 *      -返回一个对象的响应式代理
 *      -返回的是一个深层响应式对象
 *      -也可以使用shallowReactive()创建一个浅层响应式对象
 *      -缺点：
 *          -只能返回对象的响应式代理，不能处理原始值
 * 
 * ref()
 *      -接受一个任意值，并生成它的响应式代理
 */

// ref生成响应式代理时，它是将值包装成了一个对象，0-->{value:0}
// 访问ref对象时，必须通过 对象.value 来访问值
// 在模板中，ref会被自动解包
let count = $ref(0)       //生成0的响应式代理

/**
 * vue给我们提供了一个语法糖，使得ref在script标签中也能自动解包
 * $是实验性的，需要在vite配置文件中做一些配置
 * 
 */
// console.log(count);

//  count=10        //改变量只会影响到变量自己，在js中，无法对一个变量进行代理

const obj = reactive({
    name: '孙悟空',
    age: 20
})
</script>

<style lang="scss" scoped></style>