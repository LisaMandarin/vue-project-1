<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="flex flex-row flex-wrap justify-center leading-8 gap-4">
    <RouterLink to="/" class="hover:underline">Home</RouterLink>
    <RouterLink to="/helloworld" class="hover:underline">Hello World</RouterLink>
    <RouterLink to="/attributebinding">Attribute Binding</RouterLink>
    <RouterLink to="/conditionalsLoops">Conditionals and Loops</RouterLink>
    <RouterLink to="formbinding">Form Binding</RouterLink>
    <RouterLink to="simplecomponent">Simple Component</RouterLink>
    <RouterLink to="markdowneditor">Markdown Editor</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>
