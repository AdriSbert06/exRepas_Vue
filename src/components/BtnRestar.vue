<template>
    <button @click="restar">-1</button>

</template>

<script setup>
import { inject } from 'vue';


const restar = inject('restar')

</script>