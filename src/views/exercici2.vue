<template>
    <h1>Exercici 2</h1>
    <BtnSumar></BtnSumar>
    <BtnRestar></BtnRestar>
    <button @click="reset"> Reiniciar</button>
    <p>El valor del comptador és: {{ comptador }}</p>
</template>

<script setup>
import BtnRestar from '@/components/BtnRestar.vue';
import BtnSumar from '@/components/BtnSumar.vue';
import { provide, reactive, ref } from 'vue';

const comptador = ref(0)

const sumar = () =>{
    comptador.value++
}

const restar = () =>{
    comptador.value--
}

const reset = () =>{
    comptador.value = 0
}
provide('sumar', sumar)
provide('restar', restar)
</script>