<script setup lang="ts">

defineProps(['title', 'description', 'cover', 'path'])
</script>
<template>
  <NuxtLink :to="path">
    <div class="max-w-[600px] flex flex-col gap-y-2">
      <nuxt-img class="min-w-inherit max-h-[328px] rounded-xl object-cover" :src="cover" alt="project" loading="lazy"/>
      <h1 class="text-xl md:text-3xl">{{ title }}</h1>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </NuxtLink>
</template>