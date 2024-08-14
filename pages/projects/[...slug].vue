<script setup lang="ts">
// const { data } = await useAsyncData('hello-world', () => queryContent('/projects/hello-world').findOne())
const { path } = useRoute()

const { data, error } = await useAsyncData(`content-${path}`, () => {
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
</script>

<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] md:max-w-[60%] flex flex-col items-center">
    <h1 class="text-2xl md:text-5xl py-12 md:py-16">{{ data.title }}</h1>
    <img class="min-h-[200px] max-h-[500px] w-full object-cover rounded-2xl" :src=data.cover alt="">
    <div class="flex w-full gap-8 my-8 md:mb-16 md:mt-8">
      <NuxtLink class="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 md:px-6 rounded cursor-pointer">
        <Icon name="iconoir:github" class="text-2xl md:text-3xl"/>
        <p>Github</p>
      </NuxtLink>
      <NuxtLink class="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 md:px-6 rounded cursor-pointer">
        <Icon name="ic:baseline-launch" class="text-2 xl md:text-3xl"/>
        <p>App</p>
      </NuxtLink>
    </div>
    <main class="w-full">
      <ContentRenderer :value="data" class="flex flex-col items-start"/>
    </main>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>

<style scoped>
main :deep(h1) {
  @apply text-3xl
}

main :deep(p) {
  @apply mb-2 
}
main :deep(pre) {
  @apply bg-gray-100 border p-4 rounded w-full;
}
main :deep(code) {
  @apply overflow-x-auto;
}
</style>