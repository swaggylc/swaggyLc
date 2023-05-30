<template>
    <div class="filter">
        <div class="filter-inner">
            <input v-model="meals.keyword" class="filter-input" type="text" placeholder="请输入搜索内容">
            <i class="ri-search-line"></i>
        </div>
    </div>
</template>

<script setup>
    import { useMealsStore } from "../../store/meals";
    const meals = useMealsStore()
</script>

<style lang="css" scoped>
.filter {
    padding: 20rem 40rem;
    border-bottom: 1px solid #e6e6e6;
}

.filter-inner {
    display: flex;
    align-items: center;
    position: relative;
    height: 80rem;
}
.filter-input{
    background-color: rgb(242, 242, 242);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40rem;
    outline: none;
    padding: 0 40rem 0 60rem;
}
.filter-inner i{
    position: absolute;
    color: rgb(184, 184, 184);
    font-size: 30rem;
    left: 30rem;
}






</style>