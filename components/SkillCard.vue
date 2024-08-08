<script setup>
defineProps(['title', 'description'])
</script>

<template>
  <div class="flex flex-col border">
    <p class="text-2xl">{{ title }}</p>
    <p class="text-gray-500">{{ description }}</p>
  </div>
</template>
