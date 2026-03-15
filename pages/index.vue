<script setup lang="ts">
const { data: recentProjects } = await useAsyncData('projects', () => {

  return queryContent('/projects').sort({ date: -1}).limit(4).find()
})

const { data: experiences } = await useAsyncData('experiences', () => {

  return queryContent('/experiences').sort({ date: -1}).find()
})

</script>

<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] 2xl:max-w-[80%] desktop:max-w-[60%] flex-col">
    <div class="flex flex-col-reverse items-center md:flex-row">
      <div class="md:py-36">
        <h1 class="text-primary text-4xl md:text-6xl font-bold text-center md:text-left">
          Hi I'm Denzel.
        </h1>
        <p class="text-gray-400 py-10 md:text-xl">I am a software engineer. I work with big data and backend development. My hobbies are reading books and working out.</p>
      </div>
      <img src="/icons/profile.svg" class="text-center md:ml-32" style="width: clamp(166px, 40%, 364px)" alt="">
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
    <h1 class="text-2xl py-12 md:py-20 md:text-5xl">Experiences</h1>
    <ul class="grid md:grid-col-1 md:grid-cols-2 gap-16 justify-between">
      <li v-for="exp in experiences" :key="exp._id">
        <ExperienceCard :title="exp.title" :role="exp.role" :description="exp.description" :date="exp.date" :cover="exp.cover" :path="exp._path"/>
      </li>
    </ul>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>