<template>
    <Mask style="z-index: 999;">
        <Dialog msg="是否清空购物车" @sure="sureHandler" @hidden="showDialog = false" :isShow="showDialog"></Dialog>
        <!-- 
            1、把购物车清空
                meals.clearCar()
            2、关闭对话框
                触发hidden事件
            3、关闭carrlist
            
         -->


        <div class="car-list">
            <div class="header">
                <h2>餐品详情</h2>
                <a @click="showDialog = true" href="javascript:;">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :desc="false" :meals="meals.carMeals"></Meals>
        </div>
    </Mask>
</template>

<script setup>
import Mask from '../ui/Mask.vue';
import Meals from '../meals/meals.vue';
import Dialog from '../ui/Dialog.vue';
import { ref } from 'vue';
import { useMealsStore } from '../../store/meals';
const meals = useMealsStore()
const showDialog = ref(false)
const emit = defineEmits()
const sureHandler = () => {
    /**
     * 1、把购物车清空
     *      meals.clearCar()
     * 2、关闭对话框
     *      触发hidden事件
     * 3、关闭carrlist
     */
    meals.clearCar()
    emit('hidden')
}
</script>

<style lang="css" scoped>
.car-list {
    position: absolute;
    bottom: 0;
    width: 750rem;
    background-color: #fff;
    overflow: auto;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
}

.meals {
    height: auto;
    max-height: calc(280rem * 4);
}

.header {
    background-color: #fff;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
    display: flex;
    justify-content: space-between;
    padding: 20rem 40rem;
}

.header h2 {
    font-size: 28rem;
}

.header a {
    display: flex;
    color: #9f9f9f;
    font-size: 24rem;
    align-items: center;
}

.header i {
    font-size: 30rem;
    margin-right: 10rem;
}</style>