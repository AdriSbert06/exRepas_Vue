<template>
    <h1>Exercici 3</h1>

    <input v-model="text" placeholder="Filtra usuaris">

    <ul>
        <li v-for="usuari in llistaUsuaris" :key="usuari.id">{{ usuari.name }}</li>
    </ul>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';

const text = ref('')

const usuaris = reactive([
    {id: 1, name: 'Carlos'},
    {id: 2, name: 'Adria'}
])

const llistaUsuaris = computed(() =>{
    return usuaris.filter( usuari =>
        usuari.name.toLowerCase().includes(text.value.toLowerCase())
    )

}) 

watch (text, (nou, antic) =>{
    console.log('ABANS: ', antic)
    console.log('ARA: ', nou)
})
</script>