<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => {

  return queryContent('/projects').sort({ date: -1}).find()
})

</script>
<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] flex-col">
    <h1 class="text-2xl md:text-5xl py-12 md:py-16">
      All projects
    </h1>
    <ul class="grid md:grid-col-1 md:grid-cols-2 gap-16 justify-between">
      <li v-for="project in projects" :key="project._id">
        <ProjectCard :title="project.title" :description="project.description" :date="project.date" :tags="project.tags" :cover="project.cover" :path="project._path"/>
      </li>
    </ul>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>