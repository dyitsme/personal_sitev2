<script setup lang="ts">

defineProps(['title', 'role', 'description', 'cover'])
</script>
<template>
    <div class="max-w-[600px] flex flex-col gap-y-2">
    <nuxt-img class="min-w-inherit max-h-[328px] rounded-xl object-cover" :src="cover" alt="project" loading="lazy"/>
    <h1 class="text-xl md:text-3xl">{{ title }}</h1>
    <p class="text-gray-400">{{ role }}</p>
    <p class="text-primary text-lg">{{ description }}</p>
    </div>
</template>