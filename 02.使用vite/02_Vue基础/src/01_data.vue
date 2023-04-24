<script>

import MyButton from './components/MyButton.vue';

export default {
    data() {
        // data返回的对象最终会被vue代理
        // this.$data.xxx='xxx' 动态添加响应式数据(不建议这么做)
        // 建议将那些暂时没有使用到的属性，也添加到data的返回对象中，值可以设置为null



        return {
            msg: '今天天气很好',

            // vue在构建响应式对象时，同时会将对象中的属性构建为响应式属性
            // 深层响应式对象
            stu: {
                name: '孙悟空',
                age: 18,
                sex: '男',
                friend:{
                    name:'我是猪八戒'
                }
            }
        }
    },
    components: {
        MyButton
    }
}



</script>

<template>
    <div>
        <h1>{{ msg }}</h1>


        <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.sex }}</h2>
        <h3>{{ stu.friend.name }}</h3>

        <hr>
        <MyButton></MyButton>
        <MyButton></MyButton>
    </div>
</template>