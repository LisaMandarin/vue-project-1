<script setup>
    import { ref } from 'vue';
    const textInput = ref('Edit me')
    const checkboxInput = ref(true)
    const checkboxNames = ref(['Jack'])
    const radioInput = ref('One')
    const selectInput = ref('A')
    const multipleSelects = ref(null)
</script>

<template>
    <div class="space-y-4 w-[300px] mx-auto">
        <div>
            <h1 class="font-bold text-lg">Text Input</h1>
            <input type="text" v-model="textInput" class="border border-gray-300 rounded" />
            <p>{{ textInput }}</p>
        </div>
    
        <div>
            <h1 class="font-bold text-lg">Checkbox</h1>
            <input type="checkbox" v-model="checkboxInput" />
            <label>Checked: {{ checkboxInput }}</label>
        </div>

        <div>
            <h1 class="font-bold text-lg">Multi Checkbox</h1>
            <div class="space-x-2">
                <label><input type="checkbox" value="Jack" v-model="checkboxNames"/>Jack</label>
                <label><input type="checkbox" value="John" v-model="checkboxNames"/>John</label>
                <label><input type="checkbox" value="Mike" v-model="checkboxNames"/>Mike</label>
            </div>
            <p>Checked names: {{ checkboxNames }}</p>
        </div>

        <div>
            <h1 class="font-bold text-lg">Radio</h1>
            <div class="space-x-2">
                <label><input type="radio" value="One" v-model="radioInput">One</label>
                <label><input type="radio" value="Two" v-model="radioInput">Two</label>
            </div>
            <p>Picked: {{ radioInput }}</p>
        </div>

        <div>
            <h1 class="font-bold text-lg">Select</h1>
            <select class="border border-gray-300" v-model="selectInput">
                <option disabled>Please select:</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <p>Selected: {{ selectInput }}</p>
        </div>

        <div>
            <h1 class="font-bold text-lg">Multi Select</h1>
             <select multiple v-model="multipleSelects" class="border border-gray-300  rounded w-[100px]">
                <option>A</option>
                <option>B</option>
                <option>C</option>
             </select>
             <p>Selected: {{ multipleSelects }}</p>
        </div>
    </div>

</template>