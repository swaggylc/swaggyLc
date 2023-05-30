<template>
    <div class="counter">
        <template v-if="props.meal.count>0">
            <button class="sub" @click="meals.subMealFormCar(props.meal)"><i class="ri-subtract-line"></i></button>
            <span class="count">{{props.meal.count}}</span>
        </template>
        <button class="add" @click="meals.addMealToCar(props.meal)"><i class="ri-add-line"></i></button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMealsStore } from '../../store/meals';
const count = ref(0)
const meals=useMealsStore()
const props = defineProps(['meal'])
</script>

<style lang="css" scoped>
.counter {
    display: flex;
}

.sub,
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36rem;
    height: 36rem;
    background-color: rgb(234, 178, 0);
    border: none;
    border-radius: 50%;
    text-align: center;
    font-size: 40rem;

}

.sub {
    background-color: #fff;
    border: 1px solid #000;
}

.count {
    width: 60rem;
    height: 36rem;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10rem;
    text-align: center;
    line-height: 36rem;
    font-size: 30rem;
    margin: 0 10rem;
}</style>