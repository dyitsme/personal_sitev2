<template>
  <div class="bg-gray-900 rounded-2xl md:px-16 md:py-10">
    <div class="flex flex-col md:flex-row items-center">
      <div>
        <p class="text-white md:text-3xl md:pb-10">If you're interested with working with me on your next project, you can</p>
        <button class="text-white bg-primary hover:bg-blue-600 focus:bg-blue-400 md:text-3xl px-7 py-3 rounded-lg md:mb-10">Send a message</button>
      </div>
      <img class="max-w-[152px] max-h-[152px] md:mx-20" src="/icons/contact.svg" alt="contact">
    </div>
    <div class="flex gap-4">
      <NuxtLink to="#"><Icon name="iconoir:github" style="color: white" size="2em"/></NuxtLink>
      <NuxtLink to="#"><Icon name="mdi:linkedin" style="color: white" size="2em" /></NuxtLink>
      <NuxtLink to="#"><Icon name="basil:telegram-outline" style="color: white" size="2em"/></NuxtLink> 
    </div>
  </div>
</template>