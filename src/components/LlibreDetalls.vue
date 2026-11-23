<template>
  <div v-if="llibre">
    <p>ID: {{ llibre.id }}</p>
    <p>NOM: {{ llibre.name }}</p>
    <p>DETALLS: {{ llibre.descripcio }}</p>
  </div>
  <p v-else>Llibre no trobat</p>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  llibres: Array
})

const route = useRoute()

const llibre = computed(() => {
  return props.llibres.find(
    l => l.id === Number(route.params.llibreId)
  )
})
</script>