<template>
  <h1>
    HELLO VITE
  </h1>
  <div class="box1" @click="clickHander('box1')">
    <div class="box2" @click="clickHander('box2')">
      <div class="box3" @click.stop="clickHander('box3')">

      </div>
    </div>
  </div>
</template>

<script setup>
function clickHander(text) {
  // event.stopPropagation()
  alert(text)
}
/**
 * 事件修饰符
 *    .stop 阻止事件传播
 *    .capture 在捕获阶段触发事件    
 *    .self 只有当事件在该元素本身（比如不是子元素）触发时才触发回调
 *    .once 事件只触发一次
 *    .passive 事件的默认行为立即执行，无需等待事件回调执行完毕（主要用于提升滚动事件的性能）
 *    .prevent 阻止事件的默认行为
 * 
 */
</script>

<style lang="css" scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: red;
}
.box2 {
  width: 100px;
  height: 100px;
  background-color: green;
}
.box3 {
  width: 50px;
  height: 50px;
  background-color: blue;
}

</style>