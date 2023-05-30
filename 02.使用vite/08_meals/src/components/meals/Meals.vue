<template>
    <!-- 所有汉堡的容器 -->
    <div class="meals">
        <!-- 显示商品信息 -->
        <Meal v-for="item in meals.filterMeals" :meal="item"></Meal>
    </div>
</template>

<script setup>
    import Meal from "./Meal.vue";
    import { useMealsStore } from "../../store/meals";
    const meals = useMealsStore()
</script>

<style scoped>
.meals {
    height: calc(100vh - 250rem);
    margin-bottom: 130rem;
    overflow: auto;

}
</style>