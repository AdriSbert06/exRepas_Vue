<template>
    <button @click="reiniciar"> Reninciar </button>
</template>

<script setup>
import { inject } from 'vue';

const reiniciar = inject('reiniciar')
</script>