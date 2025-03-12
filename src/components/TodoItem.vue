<script setup>
    const props = defineProps({
        groceryList: Array
    })
</script>

<template>
    <div class="w-[400px] mx-auto">
        <h1 class="font-bold text-lg">Todo Items</h1>
        <ol class="list-decimal">
            <li v-for="item in groceryList" :key="item.id">{{ item.text }}</li>
        </ol>
    </div>
</template>