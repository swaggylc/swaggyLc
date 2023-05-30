<template>
    <div class="meal">
        <div class="img">
            <img :src=" props.meal.img " :alt="props.meal.title">
        </div>
        <div class="info">
            <div class="desc">
                <h2>{{ props.meal.title }}</h2>
                <p>{{ props.meal.desc }}</p>
            </div>
            <div class="price-btn">
                <span class="price">{{ props.meal.price }}</span>
                <Counter :meal="props.meal"></Counter>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Counter from '../ui/counter.vue'
const props = defineProps(['meal'])
</script>

<style lang="css" scoped>
.meal {
    display: flex;
    align-items: center;
    height: 280rem;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20rem;
}
.img{
    width: 200rem;
}
.info{
    width: 450rem;
    margin-left: 20rem;
}
.info h2{
    font-size: 30rem;
    margin-bottom: 10rem;
}
.info p{
    font-size: 26rem;
    color: #999;
}
.price-btn{
    display: flex;
    justify-content: space-between;
    margin-top: 40rem;
}
.price{
    font-size: 30rem;
    font-weight: bold;
}
.price::before{
    content: "￥";
}










</style>