<script setup lang="ts">
import { format } from 'date-fns'
const { path } = useRoute()

const { data, error } = await useAsyncData(`content-${path}`, () => {
  // const proj = queryContent().where({ _path: path }).findOne()
  return queryContent()
    .where({ _path: path })  // Queries content matching the current path
    .findOne()
})

if (error) {
  console.error('Error fetching content:', error)
}

if (!data.value) {
  console.log('No content found for this path:', path)
}

function formatDate(date: String) {
  return format(new Date(date), 'PP')
}
</script>

<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] md:max-w-[60%] flex flex-col items-center">
    <h1 class="text-2xl md:text-5xl py-8 md:py-12">{{ data.title }}</h1>
    <p class="pb-8">Date: {{ formatDate(data.date) }}</p>
    <img class="w-full object-cover rounded-2xl" :src=data.cover alt="">
    <div class="flex w-full gap-8 my-8 md:mb-16 md:mt-8">
      <NuxtLink class="inline-flex items-center gap-2 bg-white border border-primary px-4 py-2 md:px-6 rounded cursor-pointer" :to="data.github" v-if="data.github">
        <Icon name="iconoir:github" class="text-2xl md:text-3xl"/>
        <p>Github</p>
      </NuxtLink>
      <NuxtLink class="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 md:px-6 rounded cursor-pointer" :to="data.app" v-if="data.app">
        <Icon name="ic:baseline-launch" class="text-2 xl md:text-3xl"/>
        <p>App</p>
      </NuxtLink>
    </div>
    <main class="w-full">
      <ContentRenderer :value="data" class=""/>
    </main>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>

<style scoped>
main :deep(h1) {
  @apply text-3xl mb-4
}
main :deep(h2) {
  @apply text-2xl mb-4
}
main :deep(p) {
  @apply mb-4 
}
main :deep(pre) {
  @apply bg-gray-100 border p-4 mb-4 rounded w-full overflow-x-auto;
}
main :deep(code) {
  @apply overflow-x-auto;
}
main :deep(ul) {
  @apply list-disc mb-4
}
main :deep(ol) {
  @apply list-decimal mb-4
}
main :deep(img) {
  @apply max-w-full rounded-xl mb-4
}
</style>