<template>
  <div>
    <h1 class="header">今天4月23日</h1>
    <div :class="arr2">我是div</div>
    <div :style="style">我是通过style设置的div</div>
  </div>
</template>

<script setup>
  const arr=['box1','box2','box3']
  const arr2=[{box1:true},{box2:false},{box3:false}]
  const style={
    backgroundColor:'#bfa'
  }
</script>

<style lang="css" scoped>
  .header{
    background-color: orange;
  }
</style>