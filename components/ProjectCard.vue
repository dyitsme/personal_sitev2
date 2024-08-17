<script setup lang="ts">
import { format } from 'date-fns'

function formatDate(date: String) {
  return format(new Date(date), 'PP')
}

defineProps(['title', 'description', 'date', 'cover', 'path'])
</script>
<template>
  <NuxtLink :to="path">
    <div class="max-w-[600px] flex flex-col">
      <nuxt-img class="max-w-inherit max-h-[328px] rounded-2xl object-cover" :src="cover" alt="project" loading="lazy"/>
      <h1 class="text-xl md:text-3xl py-2">{{ title }}</h1>
      
      <p class="text-gray-400">{{ formatDate(date) }}</p>
      <p class="text-gray-400 py-2">{{ description }}</p>
    </div>
  </NuxtLink>
</template>