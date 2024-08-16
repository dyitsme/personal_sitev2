<script setup>
let open = ref(false)
function openMenu() {
  open.value = !open.value
}

</script>
<template>
  <div class="border-b">
    <div class="mx-auto max-w-[90%]">
      <div class="lg:py-4 flex max-w- lg:items-center justify-between">
        <div class="flex items-center">
          <span class="text-xl md:text-3xl">
            <NuxtLink to="/">Denzel Yongco</NuxtLink>
          </span>
        </div>
        <ul class="hidden lg:flex lg:text-xl lg:gap-16">
          <li>
            <NuxtLink class="text-primary hover:text-gray-600 transition duration-150" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-primary hover:text-gray-600 transition duration-150" to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink class="bg-primary text-white hover:bg-gray-900 focus:bg-gray-700 rounded px-4 py-1" to="#">Resume</NuxtLink>
          </li>
        </ul>
        <div class="lg:hidden">
          <button class="lg:hidden" @click="openMenu()">
            <Icon name="solar:hamburger-menu-linear" style="color: #111827" size="3em"/>
          </button>
            <!-- <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.8337 15.167H9.16699" stroke="#111827" stroke-width="3.25" stroke-linecap="round"/>
            <path d="M43.8337 26H9.16699" stroke="#111827" stroke-width="3.25" stroke-linecap="round"/>
            <path d="M43.8337 36.833H9.16699" stroke="#111827" stroke-width="3.25" stroke-linecap="round"/>
            </svg> -->
        </div>
      </div>
  </div>

  <!-- mobile menu -->
  <ul class="grid grid-cols-1 divide-y lg:hidden" :class="[open ? 'block' : 'hidden']">
    <li class="py-4">
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li class="py-4">
      <NuxtLink to="/projects">Projects</NuxtLink>
    </li>
    <li class="py-4">
      <NuxtLink class="" to="">Resume</NuxtLink>
    </li>
  </ul>
  </div>
</template>