// 引入函数defineStore()
import { defineStore } from 'pinia'
// 通过这个函数创建一个store
// difineStore('store的id'，配置对象)
// 配置对象：state是一个函数，需要将pinia维护的数据以对象形式返回
export const useCountStore = defineStore('count', {
    // 数据
    state: () => ({
        count: 100
    }),
    // 计算属性
    getters: {
        double: (state) => state.count * 2
    },
    // 方法
    actions: {
        increment() {
            this.count++
        }
    }

})