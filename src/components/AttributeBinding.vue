<script setup>
    import { ref } from 'vue';
    const message = ref("This is a title")
    const isRed = ref(false)
    const isBlue = ref(true)
    function toggleRed() {
        isRed.value = !isRed.value
    }
    function toggleBlue() {
        isBlue.value = !isBlue.value
    }
    
</script>

<template>
    <p :title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound title!
    </p>
    <p @click="toggleRed" :class="{'text-red-500' : isRed}" class="cursor-pointer">
        This should be red... but click me to toggle it.
    </p>
    <p class="cursor-pointer" @click="toggleBlue" :class="{'text-blue-600' : isBlue, 'text-green-600': !isBlue}">
        This should be green, and should toggle between green and blue on click
    </p>
</template>

