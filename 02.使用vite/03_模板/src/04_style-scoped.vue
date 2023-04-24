<template>
  <div class="app">
    <h1>今天下雨</h1>
    <div class="box1">app中的box1</div>
    <MyBox></MyBox>
  </div>
</template>

<script setup>
  import MyBox from './components/mybox.vue'
</script>

<!--可以直接在style标签中编写样式
      如果直接在style标签中编写样式，则此时编写的样式为全局样式，
      会影响到所有的组件

    可以为style标签添加一个scoped属性，
    这样样式将成为局部样式，只对当前组件生效
    如何实现的？
      当我们在组件中使用scoped时，vue会为组件中所有元素生成一个随机的属性
      形如：data-v-7a7a37b1
      生成后所有选择器都会在最后添加一个[data-v-7a7a37b1]
      如：h1 -- > h1[data-v-7a7a37b1]，.box1 -- > .box1[data-v-7a7a37b1]

    注意：随即生成的属性，除了会添加到当前组件内的所有元素上，
          也会添加到当前组件引入的其他组件的根元素上，这样设计
          是为了通过父组件给子组件设置一些样式


-->
<style scoped>
  h1{
    background-color: aquamarine;
  }
  .box1{
    width: 300px;
    height: 300px;
    background-color: blanchedalmond;
  }
  /* 将组件中所有h2的字体颜色变成黄色 
        -.app h2[data-v-7a7a37b1]   没用deep
        -.app[data-v-7a7a37b1] h2    用了deep
  
        -:global()    全局选择器
  */
  .app :deep(h2){
    color: yellow;
  }
  :global(div){
    border: 1px solid #f00;
  }
</style>