<script setup lang="ts">
defineProps(['tag'])
</script>

<template>
  <div class="bg-gray-200 text-gray-500 px-2 rounded font-normal">
    {{ tag }}
  </div>
</template>