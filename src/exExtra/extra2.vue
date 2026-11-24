<template>
    <BtnSi></BtnSi>
    <BtnNo></BtnNo>
    <BtnReiniciar></BtnReiniciar>

    <p>Vots: {{ vots }}</p>
</template>

<script setup>
import { ref, provide } from 'vue';

import BtnNo from './BtnNo.vue'
import BtnReiniciar from './BtnReiniciar.vue'
import BtnSi from './BtnSi.vue'


const vots = ref(0)

const votSi = () =>{
    vots.value++
}

const votNo = () =>{
    vots.value--
}

const reiniciar = () =>{
    vots.value = 0
}

provide('votSi', votSi),
provide('votNo', votNo),
provide('reiniciar', reiniciar)
</script>