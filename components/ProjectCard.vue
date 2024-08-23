<script setup lang="ts">
import { format } from 'date-fns'

function formatDate(date: String) {
  return format(new Date(date), 'PP')
}

defineProps(['title', 'description', 'tags', 'date', 'cover', 'path'])
</script>
<template>
  <NuxtLink :to="path">
    <div class="max-w-[600px] flex flex-col gap-y-2">
      <nuxt-img class="min-w-inherit max-h-[328px] rounded-xl object-cover" :src="cover" alt="project" loading="lazy"/>
      <h1 class="text-xl md:text-3xl">{{ title }}</h1>
      <div class="flex gap-x-3">
        <Tag v-for="tag in tags" :key="tag._id" :tag="tag"/>
      </div>
      <p class="text-gray-400">{{ formatDate(date) }}</p>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </NuxtLink>
</template>