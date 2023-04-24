<template>
  <div>
    <!-- 在模板中可以直接访问在组件中声明的变量
      除了组件中的变量外，vue也为我们提供了一些全局对象可以访问(Date,Math,RegExp...)
      除此之外，也可以通过app对象来添加一些全局变量
      app.config.globalProperties

      -使用插值语法时，只能使用表达式
          表达式：就是有返回值(未指定则是undefine)的语句
      -插值语法实际就是修改元素的textContent，如果内容中含有标签，则标签会被转义显示，不会作为标签生效

      指令：
        -指令是模板中为标签设置的一些特殊属性，它可以设置标签如何显示内容
        -指令使用 v- 开头
          v-text 将表达式的值作为元素的textContent插入，作用同{{  }}
          使用指令时，不需要用{{  }}来指定表达式
          v-html 将表达式的值作为元素的innerHTML插入，有被XSS攻击的风险
    -->
    <!-- <h1>{{ hello }}</h1> -->



  </div>
</template>

<script setup>
  const msg='今天下雨'

</script>

<style lang="scss" scoped>

</style>