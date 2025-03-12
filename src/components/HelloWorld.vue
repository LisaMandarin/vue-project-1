<script setup>
import { ref } from 'vue';

const message = ref("Hello World")

function reverseMsg() {
  message.value = message.value.split('').reverse().join("")
}

function append() {
  message.value += "!"
}

function notify() {
  alert("navigation is prevented")
}
  
</script>

<template>
  <h1 class="text-center font-bold text-xl">{{ message }}</h1>
  
  <button class="block mx-auto border rounded-xl shadow px-4 py-2 mb-2 cursor-pointer" @click="reverseMsg">Reverse Message</button>
  <button class="block mx-auto border rounded-xl shadow px-4 py-2 mb-2 cursor-pointer" @click="append">Append !</button>
  <a href="www.google.com" @click.prevent="notify" class="mx-auto block w-fit">A link with e.preventDefault()</a>
</template>