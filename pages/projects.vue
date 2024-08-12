<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%] flex-col">
    <h1 class="md:text-5xl py-12 md:py-16">
      All projects
    </h1>
    <div class="grid md:grid-col-1 md:grid-cols-2 gap-16 justify-between">
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
    <PageSpacer/>
  </div>
  <PageFooter/>
</template>