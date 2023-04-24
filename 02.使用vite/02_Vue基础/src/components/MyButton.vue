<script>
export default {
    data() {
        return {
            count: 0
        }
    },
}


</script>
<template>
    <div>
        <button @click="count++">点击我</button>
        <p>{{ count }}</p>
    </div>
</template>
