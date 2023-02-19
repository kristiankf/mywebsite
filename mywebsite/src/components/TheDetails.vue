<template>
  <div id="details">
    <the-navigation></the-navigation>
    <div class="contain max-w-6xl">
      <!--about me  -->
      <section>
        <div class="flex my-32 gap-10 justify-center md:flex-row flex-col">
          <div class="md:w-1/2">
            <h1 class="font-fortitle text-5xl mb-10">
              <span class="text-odd">What</span> I do?
            </h1>
            <p>
              I am a talented developer who creates visually appealing,
              responsive and intuitive web applications. Using modern web
              technologies such as JavaScript, Vue.js, TailwindCSS etc... I am
              capable of translating UI/UX designs into high quality, reusable
              and well documented code with performance optimization and
              cross-browser compatibilty in mind. I do all this with great
              attention to detail and also being resourceful and adept at
              finding solutions in our fast-paced environment.
            </p>
          </div>
          <div class="md:w-1/2 text-center">
            <iframe
              src="https://giphy.com/embed/ukMiDlCmdv2og"
              frameBorder="0"
              class="
                giphy-embed
                inline-block
                m-auto
                md:w-full md:h-full
                max-w-md
              "
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h1 class="font-fortitle text-5xl mb-10">
            <span class="text-odd">Skill</span> set
          </h1>
          <div class="skill-cards my-14 flex flex-wrap justify-center gap-5">
            <div v-for="skill in skills" :key="skill.id">
              <skill-card :skill="skill"></skill-card>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./TheNavigation.vue";
import SkillCard from "./SkillCard.vue";
import skills from "@/skills.json";
export default {
  components: { TheNavigation, SkillCard },
  name: "TheDetails",
  data() {
    return {
      skills: skills.skills,
    };
  },
  mounted() {
    console.log(this.skills);
  },
};
</script>