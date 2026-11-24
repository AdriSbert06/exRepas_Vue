<template>
    <ul>
        <li v-for="pelicula in pelicules" :key="pelicula.id">
            <PeliculaDetallsProps :id="pelicula.id"
            :titol="pelicula.titol"
            :director="pelicula.director">

            </PeliculaDetallsProps>
        </li>
    </ul>

    <!--<ul> //Forma també vàlida
        <PeliculaDetallsProps v-for="pelicula in pelicules" :key="pelicula.id"
            :id="pelicula.id"
            :titol="pelicula.titol"
            :director="pelicula.director">
            
        </PeliculaDetallsProps>
    </ul>-->

</template>

<script setup>
import {reactive} from 'vue';
import PeliculaDetallsProps from './PeliculaDetallsProps.vue';

const pelicules = reactive([
    {id: 1, titol: 'Titol 1', director: 'Director 1'},
    {id: 2, titol: 'Titol 2', director: 'Director 2'}

])
</script>