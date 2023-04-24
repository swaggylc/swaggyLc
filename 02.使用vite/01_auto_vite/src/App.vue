<script>

/**组件，一个组件可以创建多个组件实例
 * 组件就是一个普通的js对象
 * 
 */

export default {
    // data就是一个方法
    // 在data中，this就是当前的组件实例vm
    // 如果使用箭头函数，则无法通过this来访问组件实例
    // 使用vue时，减少使用箭头函数

    data() {
        // 直接向组件实例中添加属性，不会被vue所代理
        // 在控制台中更改'孙悟空'，但在页面上不会显示更改，因为它不是响应式数据，它没有在返回的对象中
        // this.name='孙悟空'

        // vm.$data 是实际的代理对象，通过vm可以直接访问到$data中的属性
        // vm.$data.msg 等价于 vm.msg


        // data会返回一个对象作为返回值，vue会对该对象进行代理
        //      从而将其转化为响应式数据，响应式数据可以直接通过组件实例访问

        return {
            msg: '这是第一个vue'
        }
    },
    created() {
        // 会在组件创建完毕后调用
        // 可以通过 vm.$data 动态的向组件中添加响应式数据
        this.$data.name = '孙悟空'
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
</template>