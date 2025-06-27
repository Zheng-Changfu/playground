<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1 class="c-red">UnoCSS</h1>
  <n-button type="primary">{{ msg }}</n-button>
</template>
