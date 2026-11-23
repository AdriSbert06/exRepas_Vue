<template>
    <button @click="sumar">+1</button>
</template>

<script setup>
import { inject } from 'vue';


const sumar = inject('sumar')
</script>