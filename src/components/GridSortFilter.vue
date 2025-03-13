<script setup>
    import { ref } from 'vue';
    import GridTable from './GridTable.vue';
    const searchQuery = ref('')
    const columns = ref(['Name', 'Power'])
    const gridData = ref([
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
    ])
</script>

<template>
    <div class="w-[350px] mx-auto space-y-4">
        <form>
            <span>Search</span>
            <input v-model="searchQuery" class="border border-gray-300 rounded">
        </form>
        <GridTable :searchQuery="searchQuery" :columns="columns" :data="gridData" />
    </div>
</template>