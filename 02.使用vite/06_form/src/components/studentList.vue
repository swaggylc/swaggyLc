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
        <tbody>
            <!-- 通过$attrs透传访问APP组件传过来的数据，但不建议使用
            <tr v-for="stu in $attrs.students">
                <td>{{stu.id}}</td>
                <td>{{stu.name}}</td>
                <td>{{stu.age}}</td>
                <td>{{stu.gender}}</td>
                <td>{{stu.address}}</td>
            </tr> -->

            <tr v-for="(stu, index) in props.students">
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
    </table>
</template>

<script setup>
const props = defineProps({
    // 定义接收的数据类型
    students: {
        type: Array,
        required: true
    }
})

// 通过defineProps定义的属性在attrs中就不存在了
// 使用自定义属性时，最好通过defineProps来声明

// 定义一个删除学生的方法
const delStuHandler = (index) => {
    if (confirm('确定要删除吗？')) {
        // 删除当前的学生
        // props.students.splice(index, 1)
        // props.fn(index)
         emit('del-stu', index)
    }
}

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