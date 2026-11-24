<template>
    <button @click="votSi"> +1 </button>
</template>

<script setup>
import { inject } from 'vue';

const votSi = inject('votSi')
</script>