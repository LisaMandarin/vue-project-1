<script>
    import {debounce} from "lodash-es"
    import { marked } from "marked";
    
    export default {
        data: () => ({
            input: "# Title"
        }),
        methods: {
            update: debounce( function (e) {
                this.input = e.target.value
            }, 1000) 
        },
        computed: {
            output() {
                return marked(this.input)
            }
        }
    }
</script>

<template>
    <h1 class="font-bold text-2xl text-center">Markdown Editor</h1>
    <div class="grid grid-cols-2 gap-4 p-4">
        <textarea class="p-4 border border-gray-100" :value="input" @input="update">
            
        </textarea>
        <div class="p-4 border" v-html="output"></div>
    </div>
</template>