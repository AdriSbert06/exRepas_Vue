<template>
    <p>ID: {{ pelicula.id }}</p>
    <p>TITOL: {{ pelicula.titol }}</p>
    <p>CIRECTOR: {{ pelicula.director }}</p>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    pelicules: Array
})

const route = useRoute()

const pelicula = computed(() => {
    return props.pelicules.find(p => p.id === Number(route.params.peliculaId))
})
</script>