<template>
    <input v-model="text" placeholder="Escriu un animal...">

    <input v-model="nouAnimal" placeholder="Nou animal...">

    <button @click="afegirAnimal">
        Afegir animal
    </button>

    <ul>
        <li v-for="animal in llistaAnimals" :key="animal.id">
            {{ animal.id }} - {{ animal.nom }}
        </li>
    </ul>

    <p>{{ llistaAnimals.length }} resultats</p>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

const text = ref('')
const nouAnimal = ref('');

const animals = reactive([
    {id: 1, nom: 'Animal 1'},
    {id: 2, nom: 'Animal 2'},
    {id: 3, nom: 'Animal 3'},
    {id: 4, nom: 'Animal 4'},
    {id: 5, nom: 'Animal 5'}
])


const llistaAnimals = computed(() =>{
    return animals.filter(a => a.nom.toLowerCase().includes(text.value.toLowerCase()))
})


const afegirAnimal = () => {
    animals.push({
        id: animals.length + 1,
        nom: nouAnimal.value
    });

    nouAnimal.value = '';
}

watch (text, (ara, abans) =>{
    console.log('ARA: ', ara),
    console.log('ABANS: ', abans)

})
</script>