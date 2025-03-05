<script>
    export default {
        data() {
            return {
                newInput: "",
                newCheckbox: true,
                checkboxNames: [],
                radioInput: "one",
                selectedInput: "",
                multiSelects: []
            }
        }
    }
</script>
<template>
    <div class="space-y-4">
        <div class="flex flex-col w-sm items-start mx-auto">
            <h2 class="font-bold text-xl">Text Input</h2>
            <input v-model="newInput" type="text" class="border"/>
            <p>{{ newInput }}</p>
        </div>

        <div class="flex flex-col w-sm items-start mx-auto">
            <h2 class="font-bold text-xl">Checkbox</h2>
            <div class="flex flex-row gap-2">
                <input type="checkbox" id="checkbox1" v-model="newCheckbox">
                <label for="checkbox1">Checked: {{ newCheckbox }}</label>
            </div>
        </div>

        <div class="flex flex-col w-sm items-start mx-auto">
            <h2 class="font-bold text-xl">Multi Checkbox</h2>
            <div class="flex flex-row gap-2">
                <input type="checkbox" id="jack" v-model="checkboxNames" value="Jack" />
                <label for="jack">Jack</label>
            </div>
            <div class="flex flex-row gap-2">
                <input type="checkbox" id="john" v-model="checkboxNames" value="John" />
                <label for="john">John</label>
            </div>
            <div>
                <input type="checkbox" id="mike" v-model="checkboxNames" value="Mike" />
                <label for="mike">Mike</label>
            </div>
            <p>Checked names: {{ checkboxNames }}</p>
        </div>
        <div class="flex flex-col w-sm items-start mx-auto">
            <h2 class="font-bold text-xl">Radio</h2>
            <div>
                <input type="radio" id="one" v-model="radioInput" value="one" />
                <label for="one">One</label>
            </div>
            <div>
                <input type="radio" id="two" v-model="radioInput" value="two" />
                <label for="two">Two</label>
            </div>
            <p>Picked: {{ radioInput }}</p>
        </div>

        <div class="flex flex-col w-sm items-start mx-auto">
            <h2 class="font-bold text-xl">Select</h2>
            <select v-model="selectedInput" class="border border-gray-300 p-1">
                <option disabled value="">Please select one</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <p>Selected: {{selectedInput }}</p>
        </div>

        <div class="flex flex-col w-sm items-start mx-auto">
            <h2 class="font-bold text-xl">Multi Select</h2>
            <div>
                <select multiple v-model="multiSelects" class="w-[100px]">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <p>Selected: {{ multiSelects }}</p>
            </div>
        </div>
    </div>
</template>