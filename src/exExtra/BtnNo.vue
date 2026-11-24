<template>
    <button @click="votNo"> -1 </button>
</template>

<script setup>
import { inject } from 'vue';

const votNo = inject('votNo')
</script>