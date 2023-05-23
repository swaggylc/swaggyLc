<template>
  <h1>HELLO VUE</h1>

  <form action="" @submit.prevent="submitHandler">
    <!-- 
        这里我们将表单项的value属性和变量text做了绑定
          当value值发生变化时，text值也会发生变化（单向绑定）
        
        当value或text任意一个发生变化时，另一个也会发生变化（双向绑定）
     -->
    <div>
      <input type="text" @input="(event) => (text = event.target.value)" :value="text">
    </div>
     
    <input type="text" @input="(event) => (text = event.target.value)" :value="text">
    <button>提交</button>
  </form>
</template>

<script setup>
import {ref} from 'vue'
let text = ref('hello')

function submitHandler() {
  console.log(text.value)
  // 将text提交给服务器，再根据服务器返回的数据做后续的操作
}
</script>

<style lang="css" scoped></style>