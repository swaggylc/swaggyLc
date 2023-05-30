<template>
    <tbody>
        <!-- 通过$attrs透传访问APP组件传过来的数据，但不建议使用
            <tr v-for="stu in $attrs.students">
                <td>{{stu.id}}</td>
                <td>{{stu.name}}</td>
                <td>{{stu.age}}</td>
                <td>{{stu.gender}}</td>
                <td>{{stu.address}}</td>
            </tr> -->

        <tr v-for="(stu, index) in students">
            <td>{{ stu.id }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.age }}</td>
            <td>{{ stu.gender }}</td>
            <td>{{ stu.address }}</td>
            <td>
                <!-- 在模板中可以通过$emit()来触发自定义事件 -->
                <!-- <button @click.prevent="$event => $emit('del-stu',index)">删除</button> -->
                <button @click.prevent="delStuHandler(index)">删除</button>
            </td>
        </tr>

    </tbody>
</template>

<script setup>
import { inject } from 'vue';

const {students,delStudentByIndex}=inject('student')

// 定义一个删除学生的方法
const delStuHandler = (index) => {
    if (confirm('确定要删除吗？')) {
        // 删除当前的学生
        // props.students.splice(index, 1)
        // props.fn(index)
        // emit('del-stu', index)
        delStudentByIndex(index)
    }
}
const emit = defineEmits(['del-stu'])

// const name = inject('name')
// console.log(name)  //studentList中的name（谁近取谁）


</script>

<style lang="css" scoped>
th,
td {
    border: 1px solid #000;
    text-align: center;
    font-size: 26px;
}

button {
    font-size: 20px;
}
</style>