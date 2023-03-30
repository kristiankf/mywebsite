<template>
  <div
    id="project-card"
    class="projects border border-slate-700 hover:border-slate-500 rounded-lg bg-skill-bg xs:p-10 p-5 min-h-[350px] text-[#ddd] hover:text-white"
    @mousemove="rotateElement($event)"
    @mouseleave="resetRotation"
  >
    <div class="md:flex gap-10">
      <div
        class="img md:w-1/4 mb-10 md:mb-0 md:aspect-square bg-black/30 rounded-lg grid place-content-center md:p-0 p-5"
      >
        <img
          :src="require(`../assets/images/projects/${logoimg}.png`)"
          alt="logo"
          class="md:w-4/5 xs:h-52 h-40 md:h-auto aspect-square block m-auto object-contain"
        />
      </div>
      <div class="md:w-3/4">
        <p class="mb-5">
          <slot name="about"></slot>
        </p>
        <ul class="pl-10 list-disc">
          <li><slot name="list1"></slot></li>
          <li><slot name="list2"></slot></li>
          <li><slot name="list3"></slot></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-5 font-serif text-lg flex-wrap gap-2">
      <div class="">{{ name }}</div>
      <div class="like">
        <use-icon
          icon="fa-heart"
          class="heart text-base align-middle"
        ></use-icon>
        <span class="align-middle"> &nbsp; like</span>
      </div>
      <div class="t text-blue-500 hover:text-blue-600">
        <a :href="link" target="_blank"
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
  props: ["logoimg", "name", "link"],
  methods: {
    rotateElement(event) {
      const element = this.$el;
      const x = event.clientX;
      const y = event.clientY;
      console.log(x, y);
      console.log(element);

      // find the middle
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
      console.log(middleX, middleY);

      // get offset from middle as a percentage
      // and tone it down a little
      const offsetX = ((x - middleX) / middleX) * 15;
      const offsetY = ((y - middleY) / middleY) * 10;
      // console.log(element);

      // set rotation
      // setTimeout(() => {
      element.style.transitionDuration = "0.1s";
      // }, 300);
      element.style.setProperty("--rotateX", -1 * offsetX + "deg");
      element.style.setProperty("--rotateY", offsetY + "deg");
    },

    resetRotation() {
      const element = this.$el;
      element.style.setProperty("--rotateX", 0 + "deg");
      element.style.setProperty("--rotateY", 0 + "deg");
      element.style.transitionDuration = "0.3s";
    },
  },
};
</script>

<style scoped>
.like:active .heart {
  @apply animate-ping;
}

.projects {
  transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
  transition: all 0.3s;
}
</style>