import { reactive, ref } from 'vue'

const obj = reactive({
    name: '孙悟空',
    age: 20
})
let count = ref(0)

console.log(count.value);