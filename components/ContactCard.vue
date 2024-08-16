<template>
  <div class="bg-gray-900 rounded-2xl p-4 md:px-16 md:py-10">
    <div class="flex flex-col-reverse md:flex-row items-center gap-y-4">
      <div class="md:text-left text-center">
        <p class="text-white pb-4 md:text-3xl md:pb-10">If you're interested with working with me on your next project, you can</p>
        <button class="w-full md:w-auto text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-400 md:text-3xl py-1 md:px-7 md:py-3 rounded md:rounded-lg mb-4 md:mb-10 transition duration-150">Send a message</button>
      </div>
      <img class="max-w-[80px] max-h-[80px] md:max-w-[152px] md:max-h-[152px] md:mx-20" src="/icons/contact.svg" alt="contact">
    </div>
    <div class="flex justify-center md:justify-normal gap-4">
      <NuxtLink to="#"><Icon name="iconoir:github" class="text-gray-100 hover:text-blue-500 transition duration-150" size="2em"/></NuxtLink>
      <NuxtLink to="#"><Icon name="mdi:linkedin" class="text-gray-100 hover:text-blue-500 transition duration-150" size="2em" /></NuxtLink>
      <NuxtLink to="#"><Icon name="basil:telegram-outline" class="text-gray-100 hover:text-blue-500 transition duration-150" size="2em"/></NuxtLink> 
    </div>
  </div>
</template>