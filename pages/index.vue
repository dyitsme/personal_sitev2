<template>
  <Navbar/>
  <div class="mx-auto max-w-[84%]">
    <div class="flex">
      <div>
        <h1 class="text-base-blue text-4xl md:text-6xl font-bold">
          Hi I'm Denzel.
        </h1>
        <p class="text-neutral-400">I'm a computer science student who is interested in web development and data science. Outside of work, I like to go to the gym and read books sometimes.</p>
      </div>
      <div>
      </div>
    </div>
    <h1 class="text-2xl md:text-5xl">Skills</h1>
    <div class="flex flex-col gap-8 md:flex-row md:justify-between">
      <SkillCard icon="/icons/web.svg" title="Web development" description="I use technologies that suit my needs when building websites"/>
      <SkillCard icon="/icons/datasci.svg" title="Data science" description="I explore data to make better decisions for myself and for others"/>
      <SkillCard icon="/icons/uiux.svg" title="UI/UX" description="I do this sometimes to create better websites. I spend some time iterating over designs."/>
    </div>
  </div>
</template>