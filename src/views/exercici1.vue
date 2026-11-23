<template>
    <h1>Exercici 1</h1>
    <ul>
        <li v-for="llibre in llibres" :key="llibre.id">
            <RouterLink :to="`/exercici1/${llibre.id}`">Llibre {{ llibre.id }}</RouterLink>
        </li>
    </ul>
    <!--:to="`/exercici1/${llibre.id}`-->
    <!-- :to="{name:'LlibreDetalls',params:{llibreId:llibre.id}}"-->
    <RouterView :llibres="llibres"></RouterView>
</template>

<script setup>
import { reactive } from 'vue';


const llibres = reactive([
    {id: 1, name: 'Llibre 1', descripcio: 'Un llibre 1'},
    {id: 2, name: 'Llibre 2', descripcio: 'Un llibre 2'},
    {id: 3, name: 'Llibre 3', descripcio: 'Un llibre 3'}
])
</script>