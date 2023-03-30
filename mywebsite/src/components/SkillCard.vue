<template>
  <div
    class="skill-card md:w-[350px] xs:w-[180px] w-[140px] border border-slate-700 hover:border-slate-500 xs:p-10 p-5 rounded-lg backdrop-blur-lg bg-skill-bg h-full text-[#ddd] hover:text-white transition"
    @mousemove="rotateElement($event)"
    @mouseleave="resetRotation"
  >
    <div class="logo xs:w-20 w-14 md:m-0 m-auto">
      <img
        :src="require(`../assets/images/skill-logos/${skill.logo}.png`)"
        :alt="skill.name"
      />
    </div>
    <div
      class="title md:my-5 mt-1 font-alternate md:text-3xl xs:text-base text-sm underline md:text-left text-center"
    >
      <h2>{{ skill.name }}</h2>
    </div>
    <ul
      class="mini-skills list-disc pl-6 md:block hidden"
      v-for="(sub_skill, index) in skill.sub_skills"
      :key="index"
    >
      <li>{{ sub_skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
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
      const offsetX = ((x - middleX) / middleX) * 30;
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
.skill-card {
  transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
  transition: all 0.3s;
}
</style>