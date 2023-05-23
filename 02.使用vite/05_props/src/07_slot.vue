<template>
  <h1>App组件</h1>
  <!-- 直接写在组件中的内容是默认插槽的内容，只会出现在默认插槽中(没有name属性的插槽) -->
  <SlotDemo>
    <template v-slot:tom="msg">
      <h2>slot中传来的数据--名字：{{ msg.obj.name }}</h2>
      <A :name="name"></A>
    </template>
  </SlotDemo>
</template>

<script setup>
import SlotDemo from './components/SlotDemo.vue';
import A from './components/a.vue';
const name = '猪八戒'
</script>

<style lang="scss" scoped></style>