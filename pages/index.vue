<script setup lang="ts">
const { data: recentProjects } = await useAsyncData('projects', () => {

  return queryContent('/projects').sort({ date: -1}).limit(4).find()
})

</script>

<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] flex-col">
    <div class="flex flex-col-reverse items-center md:flex-row">
      <div class="md:py-36">
        <h1 class="text-primary text-4xl md:text-6xl font-bold text-center md:text-left">
          Hi I'm Denzel.
        </h1>
        <p class="text-gray-400 py-10 md:text-xl">I'm a computer science student who does web development and data science. I primarily use React, Next, Vue and Nuxt for developing websites. As for data science, I mainly use Python and SQL. Outside of work, I often go to the gym, go outdoors, and read books sometimes.</p>
        <div class="flex gap-8 text-lg md:text-2xl">
          <NuxtLink to="https://drive.google.com/file/d/1OtbhchrqUO_X8RJ1YDb1hX4FTd89OjNQ/view" class="transition duration-150 text-white bg-primary hover:bg-gray-900 focus:bg-gray-700 px-6 py-2 rounded-md">Resume</NuxtLink>
        <NuxtLink to="mailto:dbyongco@outlook.com" class="bg-gray-200 hover:bg-gray-300 text-primary px-6 py-2 rounded-md transition duration-150">Contact</NuxtLink>
        </div>
      </div>
      <img src="/icons/profile.svg" class="text-center md:ml-32" style="width: clamp(166px, 40%, 364px)" alt="">
    </div>
    <h1 class="text-2xl py-12 md:py-20 md:text-5xl">Skills</h1>
    <div class="flex flex-col gap-8 md:flex-row md:justify-between">
      <SkillCard icon="mdi:web" title="Web development" description="I develop websites and web apps by using the latest technologies"/>
      <SkillCard icon="simple-icons:pandas" title="Data science" description="I identify patterns in data to make better decisions for myself and others."/>
      <SkillCard icon="fluent:design-ideas-16-filled" title="UI/UX" description="I design sleek and user-friendly websites and web apps."/>
    </div>
    <h1 class="text-2xl py-12 md:py-20 md:text-5xl">Recent projects</h1>
    <ul class="grid md:grid-col-1 md:grid-cols-2 gap-16 justify-between">
      <li v-for="recentProject in recentProjects" :key="recentProject._id">
        <ProjectCard :title="recentProject.title" :description="recentProject.description" :date="recentProject.date" :tags="recentProject.tags" :cover="recentProject.cover" :path="recentProject._path"/>
      </li>
    </ul>
    <div class="text-center my-10 md:my-20">
      <NuxtLink to="/projects" class="text-primary border-primary hover:bg-primary hover:text-white border rounded md:rounded-lg md:text-3xl px-10 py-2 md:px-7 md:py-2 cursor-pointer transition duration-150">View all</NuxtLink>
    </div>
    <ContactCard/>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>