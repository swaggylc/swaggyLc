<template>
  <div class="app">
    <div :class="$style.box1">App中的box1</div>
    <MyBox></MyBox>
  </div>
</template>

<script setup>
import MyBox from './components/mybox.vue'
</script>

<!-- CSS 模块 
  自动对模块中的类名进行hash化处理来确保类名的唯一性
  在模板中可以通过 $style.类名 使用
  也可以通过module的属性值来指定变量名进行使用 module="xxx"  xxx.类名
-->
<style lang="css" module>
  .box1{
    background-color: bisque;
  }
</style>