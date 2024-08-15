<script setup lang="ts">
const { data: recentProjects } = await useAsyncData('projects', () => {

  return queryContent('/projects').sort({ date: -1}).limit(4).find()
})

</script>

<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] flex-col">
    <div class="flex flex-col-reverse items-center md:flex-row">
      <div class="md:py-40">
        <h1 class="text-primary text-4xl md:text-6xl font-bold text-center md:text-left">
          Hi I'm Denzel.
        </h1>
        <p class="text-neutral-400 py-10 md:text-xl">I'm a computer science student who is interested in web development and data science. Outside of work, I like to go to the gym and read books sometimes.</p>
      </div>
      <img src="/icons/profile.svg" class="text-center md:ml-32" style="width: clamp(166px, 60%, 364px)" alt="">
      <div>
      </div>
    </div>
    <h1 class="text-2xl py-12 md:py-20 md:text-5xl">Skills</h1>
    <div class="flex flex-col gap-8 md:flex-row md:justify-between">
      <SkillCard icon="/icons/web.svg" title="Web development" description="I use technologies that suit my needs when building websites"/>
      <SkillCard icon="/icons/datasci.svg" title="Data science" description="I explore data to make better decisions for myself and for others"/>
      <SkillCard icon="/icons/uiux.svg" title="UI/UX" description="I do this sometimes to create better websites. I spend some time iterating over designs."/>
    </div>
    <h1 class="text-2xl py-12 md:py-20 md:text-5xl">Recent projects</h1>
    <ul class="grid md:grid-col-1 md:grid-cols-2 gap-16 justify-between">
      <li v-for="recentProject in recentProjects" :key="recentProject._id">
        <ProjectCard :title="recentProject.title" :description="recentProject.description" :date="recentProject.date" :cover="recentProject.cover" :path="recentProject._path"/>
      </li>
    </ul>
    <div class="text-center my-10 md:my-20">
      <NuxtLink class="text-primary border-primary hover:bg-primary hover:text-white border rounded md:rounded-lg md:text-3xl px-10 py-2 md:px-7 md:py-2 cursor-pointer">View all</NuxtLink>
    </div>
    <ContactCard/>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>