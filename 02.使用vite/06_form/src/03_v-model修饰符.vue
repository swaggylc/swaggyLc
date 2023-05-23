<template>
  <h1>HELLO VUE</h1>

  <form action="" @submit.prevent="submitHandler">
    <!-- 
        v-model的修饰符：
          .lazy：失去焦点时才更新数据（使用change来处理数据）
          .number：将输入的字符串转换为数字
          .trim：去除输入的首尾空格
     -->
    <div>信息：
      <input type="text" v-model="text">
    </div>
    <div>是否：
      <input type="checkbox" v-model="bool" true-value="是" false-value="否">
    </div>
    <div>
      爱好：
      <input type="checkbox" name="hobby" value="篮球" v-model="hobbis">篮球
      <input type="checkbox" name="hobby" value="足球" v-model="hobbis">足球
      <input type="checkbox" name="hobby" value="羽毛球" v-model="hobbis">羽毛球
      <input type="checkbox" name="hobby" value="乒乓球" v-model="hobbis">乒乓球
    </div>
    <div>
      性别：
      <input type="radio" name="gender" value="男" v-model="gender">男
      <input type="radio" name="gender" value="女" v-model="gender">女
    </div>
    <div>
      朋友：
      <select name="" id="" v-model="friend">
        <option>孙悟空</option>
        <option>猪八戒</option>
        <option>沙和尚</option>
      </select>
    </div>
    <button>提交</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('hello')
const bool = ref('是')
const hobbis = ref([])
const gender = ref('')
const friend = ref('')
function submitHandler() {
  console.log(text.value)
  // 将text提交给服务器，再根据服务器返回的数据做后续的操作
}
</script>

<style lang="css" scoped></style>