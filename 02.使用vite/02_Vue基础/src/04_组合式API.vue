<template>
    <div>
        <h1>演示组合式API</h1>
        <h2>{{ msg }}</h2>
        <h3>{{ count }}</h3>
        <button @click="changeAge">点我一下</button>
        <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.sex }}</h2>
    </div>
</template>

<script>
import { reactive } from 'vue'
    export default {
        // set up 是一个钩子函数，可以通过这个函数向外暴露组件的配置
        // 在组合式API中直接声明的变量，就是一个普通变量，不是响应式属性
        //      修改这些属性时，在视图中不会产生效果
        setup(){
            // 定义变量，局部变量，外部不可见
            let msg='今天22摄氏度'
            let count=0

            // 可以通过reactive() 创建一个响应式对象
            const stu=reactive({
                name:'孙悟空',
                age:18,
                sex:'男'
            })

            function changeAge(){
                stu.age=55
            }



            // 在set up 中可以设置返回值来决定哪些内容要暴露给外部
            // 暴露后的内容可以在模板中直接使用
            return {
                msg,
                count,
                stu,
                changeAge
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>