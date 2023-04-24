<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ sum(123,456) }}</h2>
        <button @click="changeMsg">点我获取新msg</button>
    </div>
</template>

<script>
    export default {
        // data用来指定实例对象中响应式属性的
        data() {
            return {
                msg:'今天适合打球'
            }
        },

        /**用来指定实例对象中的方法
         *      -它是一个对象，可以在它里面定义多个方法
         *      -这些方法最终会被挂载到组件实例上
         *      -可以直接通过组件实例来调用这些方法
         *      -所有组件实例上的属性都可以在模板中直接访问
         *      -methods中函数的this会被自动绑定为组件实例
         */
        methods:{
            test(){
                alert('哈哈哈')
            },
            hello(){
                console.log('hello');
            },
            sum(a,b){
                console.log(this);   //组件实例 Proxy(Object)  vm
                return a+b
            },
            changeMsg(){
                this.msg='这是新的msg'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>