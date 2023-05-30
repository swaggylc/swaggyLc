<template>
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>
        <StudentItem  />
    </table>
</template>

<script setup>
import StudentItem from './studentItem.vue';
import { inject,provide } from 'vue';

// provide('name','studentList中的name')

const props = defineProps({
    // 定义接收的数据类型
    students: {
        type: Array,
        required: true
    }
})

// 通过defineProps定义的属性在attrs中就不存在了
// 使用自定义属性时，最好通过defineProps来声明



const emit = defineEmits(['del-stu'])







</script>

<style lang="css" scoped>
table {
    width: 80%;
    /* 列表合并 */
    border-collapse: collapse;
}

caption {
    font-size: 30px;
    font-weight: bold;
}

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