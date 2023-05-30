<template>
    <!-- 遮罩层 -->
    <!-- <Mask :is-show="showDetail" @hidden="showDetail = false"></Mask> -->
    <CarList :isShow="showDetail" @hidden="showDetail = false"></CarList>



    <div class="car-bar">
        <div class="car-bag">
            <img :src="carBag" alt="">
            <span v-show="meals.totalCount > 0" class="total-count">{{ meals.totalCount }}</span>
        </div>
        <div class="total-money">
            <p v-show="meals.totalCount <= 0" class="no-thing">
                未选购商品(⊙o⊙)…
            </p>
            <p v-show="meals.totalCount > 0" class="have-thing">{{ meals.totalMenoy }}</p>
        </div>
        <button @click="showDetail = true" class="checkout">去结算</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import carBag from "../../assets/bag.png";
import { useMealsStore } from '../../store/meals';
// import Mask from '../ui/Mask.vue'
import CarList from './CarList.vue'
const meals = useMealsStore()
const showDetail = ref(false)
</script>

<style lang="css" scoped>
.car-bar {
    position: fixed;
    width: 710rem;
    height: 80rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 50rem;
    background-color: rgb(58, 58, 58);
    border-radius: 60rem;
    z-index: 1000;
}

.car-bag {
    position: absolute;
    width: 90rem;
    bottom: -10rem;
}

.total-count {
    position: absolute;
    background-color: red;
    border-radius: 50%;
    right: -10rem;
    width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    color: white;
    font-weight: bold;
}

.total-money {
    margin-left: 150rem;
    line-height: 80rem;

}

.no-thing,
.have-thing {
    color: rgb(148, 148, 148);
    font-size: 34rem;
    font-weight: bold;
}

.have-thing {
    color: white;
}

.have-thing::before {
    content: "￥";
    font-size: 26rem;
}

.checkout {
    position: absolute;
    top: 0;
    right: 0;
    width: 200rem;
    height: 100%;
    border-radius: 60rem;
    border: none;
    background-color: rgb(248, 188, 0);
    font-size: 32rem;
}
</style>