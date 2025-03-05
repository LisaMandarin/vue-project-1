<script>
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  methods: {
    reverseMsg() {
      this.message = this.message.split('').reverse().join('')
    },
    append() {
      this.message += "!"
    },
    notify() {
      alert("Navigation is prevented")
    }
  }
}
</script>

<template>
  <h1 class="text-center font-bold text-xl">{{ message }}</h1>
  <button class="block mx-auto border rounded-xl shadow px-4 py-2 mb-2" @click="reverseMsg">Reverse Message</button>
  <button class="block mx-auto border rounded-xl shadow px-4 py-2 mb-2" @click="append">Append !</button>
  <a href="www.google.com" @click.prevent="notify" class="mx-auto block w-fit">A link with e.preventDefault()</a>
</template>