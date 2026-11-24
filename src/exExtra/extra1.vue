<template>
    <h1>PEL·LICULES:</h1>
    <ul>
        <li v-for="pelicula in pelicules" :key="pelicula.id">
            <RouterLink :to="`/extra1/${pelicula.id}`"> Pelicula {{ pelicula.id }}</RouterLink>
        </li>
    </ul>

    <RouterView :pelicules="pelicules"></RouterView>
</template>

<script setup>
import {reactive} from 'vue';

const pelicules = reactive([
    {id: 1, titol: 'Titol 1', director: 'Director 1'},
    {id: 2, titol: 'Titol 2', director: 'Director 2'}

])
</script>