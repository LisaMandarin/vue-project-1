<script setup>
    import TodoItem from './TodoItem.vue';
    import { ref } from 'vue';
    const groceryList = ref([
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
    ])
</script>

<template>
    <TodoItem :groceryList="groceryList" />
</template>