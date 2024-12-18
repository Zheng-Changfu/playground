<script setup>
import { ref } from 'vue'
import { ProCard } from 'pro-naive-ui'

const msg = ref('Hello World!')
</script>

<template>
  <pro-card title="Welcome">
    <span class="c-red">{{ msg }}</span>
  </pro-card>
</template>
