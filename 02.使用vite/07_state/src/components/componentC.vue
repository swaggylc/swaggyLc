<template>
    <!-- <h4>componentC--{{ countStore.count }}</h4>
    <button @click="countStore.increment">componentC</button> -->
    <h3>componentC</h3>
    <h4>{{ studentStore.name }}--{{ age }}--{{ studentStore.gender }}
        --{{ address }}--{{ studentStore.skills[0] }}--{{ studentStore.title }}
    </h4>
    <button @click="studentStore.growUp">点击让孙悟空年龄变大</button>
    <hr>
    <button @click="() => studentStore.name = '孙大圣'">孙大圣</button>
    <button @click="clickHandler">patch修改</button>
    <button @click="studentStore.$reset()">重置</button>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useStudentStore } from '../stroe/studentStore';
import { storeToRefs } from 'pinia'
const studentStore = useStudentStore()
const { address, age } = storeToRefs(studentStore)
// state中的属性都可以通过state对象直接访问
/**
 * store实例本身就是一个reactive对象
 *      可以通过它直接访问state中的数据
 *      但如果直接将state中的数据解构，那么这些数据就不再是响应式的了 
 *
 *      actions中的方法不能被解构
 * 
 *      可以通过storeToRefs（）来对store进行解构，
 *          它可以将state和getters中的属性结构为ref属性，从而保留响应式的特性
 * 
 * state的修改：
 *      1.直接修改
 *      2.通过$patch修改
 *      3.通过$patch传函数的方式修改
 *      4.直接替换state
 *      5.通过$reset重置state
 * 
 * state的订阅
 *      -当store中的state发生变化时，做一些响应的操作
 *      -store.$subscribe(函数，配置对象) 使用订阅时，不要修改state，否则可能将无限循环
 * 
 * 
 * 
 * 
 */

// import { countStore } from '../stroe/count';
// const { count, increment } = inject('count')
const clickHandler = () => {
    // studentStore.$patch({
    //     name:'孙行者',
    //     age:88
    // })

    // studentStore.$patch((state)=>{
    //     state.name='孙行者'
    //     state.age=88
    // })


    // 等价于studentStore.$patch({})
    studentStore.$state = {
        name: '孙行者',
        age: 88
    }

}

studentStore.$subscribe((mutations, stare) => {
    // mutations表示修改的信息
    console.log('state发生了变化')
}, {
    // 组件销毁时，依然订阅
    detached: true
})

// $onAction用来订阅actions的调用
studentStore.$onAction(({name,store,args,after,onError})=>{
    /**
     * name:调用的actions的名称
     * store:调用的store实例
     * args:调用actions时传入的参数
     * after:actions执行完毕后执行的回调
     * onError:actions执行出错时执行的回调
     * 
     */
})





</script>

<style lang="scss" scoped></style>