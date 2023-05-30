<template>
    <form @submit.prevent="submitHandler">
        <div>
            姓名<input v-model="newStu.name" type="text" />
        </div>
        <div>
            年龄<input v-model="newStu.age" type="number" />
        </div>
        <div>
            性别
            <input v-model="newStu.gender" type="radio" name="gender" value="男" />男
            <input v-model="newStu.gender" type="radio" name="gender" value="女" />女
        </div>
        <div>
            住址<input v-model="newStu.address" type="text" />
        </div>
        <div>
            <button>添加</button>
        </div>
    </form>
</template>

<script setup>
import { ref,inject } from 'vue';

const {addNewStudent} =inject('student')



// 创建一个ref来存储新的学生信息
const newStu = ref({
    name: '',
    age: 1,
    gender: '男',
    address: ''
})
// 定义一个提交的函数
const submitHandler = () => {
    // console.log(newStu.value);
    // 调用方法，将newStu添加到数组中

    // 浅复制，防止传入响应式数据
    // emit('addNewStudent', Object.assign({}, newStu.value))
    
    // 或直接用展开运算符
    // emit('addNewStudent', {...newStu.value})

    addNewStudent({...newStu.value})


    // 清空表单
    newStu.value.name = ''
    newStu.value.age = 1
    newStu.value.gender = '男'
    newStu.value.address = ''
}
</script>

<style lang="css" scoped></style>