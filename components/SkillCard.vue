<script setup>
defineProps(['icon', 'title', 'description'])

</script>

<template>
  <!-- <div class="flex flex-col bg-gradient-to-r from-white to-gray-100 max-w-[392px] max-h-[246px] p-6 border border-gray-200 rounded-2xl shadow-sm">
    <icon :name="icon" class="text-4xl bg-primary"/>
    <p class="text-xl md:text-2xl pt-2 md:pt-4">{{ title }}</p>
    <p class="text-gray-500 py-4 md:py-8">{{ description }}</p>
  </div> -->
  <div class="flex flex-col bg-white max-w-[392px] max-h-[246px] p-6 border border-gray-200 rounded-xl shadow-sm">
    <!-- <img class="max-w-14 max-h-16" :src=icon alt="icon"> -->
    <Icon :name="icon" class="text-4xl bg-primary"/>
    <p class="text-xl md:text-2xl pt-2 md:pt-4">{{ title }}</p>
    <p class="text-gray-500 py-4 md:py-8">{{ description }}</p>
  </div>
</template>
