<template>
  <h1>App组件</h1>
  <!-- 
    希望在父组件中指定子组件中的内容
        我们可以通过插槽(slot)来实现该需求
        <MyButton> 插槽的入口 </MyButton>

        <button>
          <slot></slot>   插槽的出口
        </button>

    通过插槽引入的组件，位于父组件的作用域中

   -->
  <!-- <MyButton>
    <A></A> 
  </MyButton> -->

  <MyWapper>
    <!-- 
      具名插槽的入口
     -->
    <template v-slot:a>这是h1的数据</template>
    <template #b>这是h2的数据</template>


  </MyWapper>
</template>

<script setup>
import MyButton from './components/MyButton.vue';
import A from './components/a.vue'
import MyWapper from './components/MyWapper.vue'
</script> 

<style lang="scss" scoped></style>