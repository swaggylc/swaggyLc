<template>
  <div>
    <!-- 
        当我们需要为标签动态设置属性时，需要使用v-bind指令,v-bind可以简写为:
        当我们为布尔值设置属性时：
            如果值为true，则元素有该属性(转换后为true也算true)，
            如果值为false，则元素没有该属性(转换后为false也算false)
            特殊情况：""  空串在这里会被当成真值



     -->



    <!-- <img :src="imgPath" alt="">
    <button @click="changeImgPath">切换图片</button>
    <div :="attrs"></div> -->
    <input type="text" name="" id="" :disabled="isDisabled">
  </div>
</template>

<script setup>
import { ref } from 'vue';
const imgPath = ref("/images/bg.jpg")
const changeImgPath = () => {
  imgPath.value = "/images/bg1.JPG"
}
const attrs = {
  id: 'aaa',
  class: 'bbb'
}

const isDisabled = false

</script>

<style lang="scss" scoped></style>