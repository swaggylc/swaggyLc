<template>
  <Mealsfilter></Mealsfilter>
  <Meals></Meals>
  <CarBar></CarBar>
</template>

<script setup>
import { useMealsStore } from "./store/meals";
import Mealsfilter from "./components/mealsfilter/mealsfilter.vue";
import Meals from "./components/meals/meals.vue";
import CarBar from "./components/car/CarBar.vue";
const meals = useMealsStore()

</script>

<style lang="scss" scoped></style>