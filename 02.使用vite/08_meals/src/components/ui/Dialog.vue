<template>
    <Mask>
        <div class="dialog">
            <p class="msg">{{ props.msg }}</p>
            <div class="btn">
                <button @click="$emit('hidden')" class="cancel">取消</button>
                <button @click="() => {
                    $emit('hidden')
                    $emit('sure')
                }
                    " class="sure">确定</button>
            </div>
        </div>
    </Mask>
</template>

<script setup>
import Mask from './Mask.vue';
const props = defineProps(['msg'])
const emit = defineEmits(['sure'])

</script>

<style lang="css" scoped>
.dialog {
    position: absolute;
    width: 700rem;
    height: 300rem;
    background-color: #fff;
    border-radius: 40rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.msg {
    text-align: center;
    line-height: 190rem;
    height: 190rem;
    font-size: 40rem;
}

button {
    width: 300rem;
    height: 80rem;
    border-radius: 40rem;
    font-size: 40rem;
    border: none;
}

.btn {
    display: flex;
    justify-content: space-around;
}

.sure {
    background-color: rgb(248, 188, 0);
}</style>