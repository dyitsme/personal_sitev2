<script setup>
let open = ref(false)
function openMenu() {
  open.value = !open.value
}

</script>
<template>
    <!-- mobile menu -->
  <div>
    <div class="mx-auto flex max-w-[90%] lg:items-center justify-between">
      <div>
        <span class="text-xl md:text-3xl">
          Denzel Yongco
        </span>
      </div>
      <ul class="hidden lg:flex lg:text-xl lg:gap-16">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Resume</NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden">
        <button class="lg:hidden" @click="openMenu()">
          <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.8337 15.167H9.16699" stroke="#111827" stroke-width="3.25" stroke-linecap="round"/>
          <path d="M43.8337 26H9.16699" stroke="#111827" stroke-width="3.25" stroke-linecap="round"/>
          <path d="M43.8337 36.833H9.16699" stroke="#111827" stroke-width="3.25" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- mobile menu -->
  <ul class="grid grid-cols-1 divide-y lg:hidden" :class="[open ? 'block' : 'hidden']">
    <li>
      <NuxtLink to="/">denzel</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/#">Projects</NuxtLink>
    </li>
    <li>
      <NuxtLink to="">Resume</NuxtLink>
    </li>
  </ul>
</template>