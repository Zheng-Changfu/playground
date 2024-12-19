<script setup>
import { ref } from 'vue'
import { NButton } from 'naive-ui'

const msg = ref('Hello World!')
</script>

<template>
  <h1 class="c-red">Welcome</h1>
  <n-button type="primary">{{ msg }}</n-button>
</template>
