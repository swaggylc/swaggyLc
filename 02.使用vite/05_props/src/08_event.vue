<template>
  <div>
    <h1>{{ count }}</h1>
    <!-- 
      为元素绑定事件：
          1、绑定事件使用v-on指令
              v-on：事件名
              @事件名
          2、绑定事件的两种方式
              a、内联事件处理器(自己调用函数)
                -事件触发时，直接执行js语句
                -内联事件处理器，回调函数的参数由我们自己传递
              b、方法事件处理器
                -事件触发时，vue会对事件的函数进行调用
                -方法事件处理器，回调函数的参数由vue帮我们传递
                  参数就是事件对象
              vue如何区分两种处理器：
                检查事件的值是否是合法的js标识符(变量名)或属性访问路径，
                  如果是，则表示它是方法事件处理器
                  否则，表示它是内联事件处理器
     -->
    <button @click="count++">点我一下</button>
    <hr>

    <button @click="test">方法事件处理器</button>
    <button @click="test(1, 2, 3)">内联事件处理器</button>
  </div>
  <hr>
  <!-- <div class="box1" @click="boxHandle($event, 'box1')">
    box1
    <div class="box2" @click="boxHandle($event, 'box2')">
      box2
      <div class="box3" @click="boxHandle($event, 'box3')">
        box3
      </div>
    </div>
  </div> -->
  <div class="box1" @click="boxHandle2('box1')">
    box1
    <div class="box2" @click.stop="boxHandle2('box2')">
      box2
      <div class="box3" @click.stop="boxHandle2('box3')">
        box3
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0)
function test(...args) {
  /**
   * 方法事件处理器的回调函数，vue会将事件对象作为参数传递
   * 这个事件对象就是DOM中原生的事件对象，它里面包含了相关信息
   * 通过该对象，可以获取：事件触发的对象，触发事件时的一些情况...
   * 同时可以通过该对象，也可以对事件进行一些配置：取消事件的传播，取消事件的默认行为... 
   */

  /**
   * 内联事件处理器，回调函数由我们自己调用，参数也是由我们自己传递的
   * 在内联事件处理器中，可以使用$event来访问事件对象
   */

  console.log(...args);
}

function boxHandle(event, text) {
  // 可以通过事件对象取消事件的传播
  event.stopPropagation()
  alert(text)
}
function boxHandle2(text) {
  // 可以通过事件对象取消事件的传播
  // event.stopPropagation()
  alert(text)
}
</script>

<style lang="css" scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa;
}

.box2 {
  width: 150px;
  height: 150px;
  background-color: orange;
}

.box3 {
  width: 80px;
  height: 80px;
  background-color: tomato;
}
</style>