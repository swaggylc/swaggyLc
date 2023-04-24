

<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.sex }}</h1>
        <h2>methods:{{ info }}</h2>
        <button @click="updataAge">点我一下</button>
        <hr>

        <h3>{{ getInfo() }}</h3>
        <!-- <h3>{{ info }}</h3> -->
        <hr>
        <h1>{{ name }}</h1>
        <hr>
        <h1>{{ arr[0] }}——{{ arr[1] }}——{{ arr[2] }}</h1>
    </div>
</template>

<script>


export default {
    data() {
        return {
            msg: '今天适合打球',
            stu: {
                name: "孙悟空",
                age: 18,
                sex: "男"
            },
            firstName:'悟空',
            lastName:'孙',
            // 数组也是响应式数据
            arr:['孙悟空','猪八戒','沙和尚']
        };
    },
    // 每次组件重新渲染都会调用
    methods: {
        updataAge() {
            if (this.stu.age === 18) {
                this.stu.age = 17;
            } else {
                this.stu.age = 18
            }
        },
        getInfo() {
            // 在计算属性的getter中，尽量只做读取相关的逻辑
            // 不要执行那些会产生(副)作用的代码
            console.log('getInfo调用了');
            return this.stu.age >= 18 ? '你是一个成年人' : '你是一个未成年人'
        }
    },
    /**computed 用来指定计算属性
     * {
     *      属性名：getter方法
     * 
     * }
     * 
     * -计算属性，只会在其依赖的数据发生变化时才会重新执行
     * -会对数据进行缓存
     */
    computed: {
        info() {
            console.log('----->info调用了');
            return this.stu.age >= 18 ? '你是一个成年人' : '你是一个未成年人'
        },

        // 计算属性的简写(只有getter时)
        // name(){
        //     return this.lastName+this.firstName
        // }
        // 可以为计算属性设置setter，使得计算属性可写，但不建议这么做
        name:{
            get(){
                return this.lastName+this.firstName
            },
            set(value){
                // set在计算属性被修改时调用
                this.lastName=value[0]
                this.firstName=value.slice(1)
            }
            
        }
    }
}
</script>

<style lang="scss" scoped></style>