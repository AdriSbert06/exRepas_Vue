<template>
    <p>{{ id }} - {{ titol }} - {{ director }}</p>
</template>

<script setup>

const props = defineProps({
    id:Number,
    titol: String,
    director: String
})
</script>