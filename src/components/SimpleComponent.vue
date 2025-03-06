<script>
    import TodoItem from './TodoItem.vue';

    export default {
        components: {
            TodoItem
        },
        data() {
            return {
                groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ]
            }
        }
    }
</script>

<template>
    <h1 class="text-center text-2xl font-bold">Simple Component</h1>
    <ol class="w-fit mx-auto list-decimal">
        <TodoItem v-for="todo in groceryList" :key="todo.id" :todo="todo"/>
    </ol>
</template>