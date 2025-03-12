<script setup>
    import { computed, ref } from "vue";
    import {debounce} from "lodash-es"
    import { marked } from "marked";
    const input = ref("# hello")
    const update = debounce((e) => {
        input.value = e.target.value
    }, 1000)
    const output = computed(() => marked(input.value))
</script>

<template>
    <h1 class="font-bold text-2xl text-center">Markdown Editor</h1>
    <div class="grid grid-cols-2 gap-4 p-4">
        <textarea class="p-4 border border-gray-100" :value="input" @input="update"> 
            
        </textarea>
        <div class="p-4 border" v-html="output"></div>
    </div>
</template>