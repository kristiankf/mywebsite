<template>
  <div
    class="projects border-2 border-slate-700 hover:border-slate-500 rounded-lg bg-skill-bg xs:p-10 p-5 min-h-[350px]"
  >
    <div class="md:flex gap-10">
      <div
        class="img md:w-1/4 mb-10 md:mb-0 md:aspect-square bg-black/30 rounded-lg grid place-content-center md:p-0 p-5"
      >
        <img
          src="@/assets/images/projects/logo.png"
          alt="lean icon logo"
          class="md:w-4/5 xs:h-52 h-40 md:h-auto aspect-square block m-auto"
        />
      </div>
      <div class="md:w-3/4">
        <p class="mb-5">
          Lean Icon Technology is a Training and Consulting Firm that do
          sometins bla bla bla using agile methodologies to deliver value to
          what what
        </p>
        <ul class="pl-10 list-disc">
          <li>I worked on building a responsive site</li>
          <li>I designed based on UI provided on Figma</li>
          <li>Tools include vue and tins</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-5 font-serif text-lg flex-wrap gap-2">
      <div class="">Lean Icon Technology</div>
      <div class="like">
        <use-icon
          icon="fa-heart"
          class="heart text-base align-middle"
        ></use-icon>
        <span class="align-middle"> &nbsp; like</span>
      </div>
      <div class="t text-blue-500 hover:text-blue-600">
        <a href="https://leanicontechnology.co.uk" target="_blank"
          ><span class="align-middle">Visit site </span>
          <use-icon
            icon="fa-external-link"
            class="align-middle text-base"
          ></use-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsCard",
};
</script>

<style scoped>
.like:active .heart {
  @apply animate-ping;
}
</style>