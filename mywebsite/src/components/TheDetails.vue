<template>
  <div id="details">
    <the-navigation></the-navigation>
    <div class="contain max-w-6xl">
      <!--about me  -->
      <section id="about">
        <div class="flex my-32 gap-10 justify-center md:flex-row flex-col">
          <div class="md:w-1/2">
            <h1 class="font-fortitle md:text-5xl text-4xl mb-10">
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
              class="giphy-embed inline-block m-auto md:w-full md:h-full max-w-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h1 class="font-fortitle md:text-5xl text-4xl mb-10">
            <span class="text-odd">Skill</span> set
          </h1>
          <div class="skill-cards my-14 flex flex-wrap justify-center gap-5">
            <div v-for="skill in skills" :key="skill.id">
              <skill-card :skill="skill"></skill-card>
            </div>
          </div>
        </div>
      </section>

      <!-- My Work -->
      <section id="work">
        <div class="my-32">
          <h2 class="font-fortitle md:text-5xl text-4xl mb-10">
            <span class="text-odd">Projects</span> so far
          </h2>
          <p>
            Explore some of the works that my expertise has brought into
            reality.
          </p>
          <div class="my-10">
            <projects-card></projects-card>
          </div>
          <div class="my-10">
            <projects-card></projects-card>
          </div>
        </div>
      </section>

      <!-- contact me -->
      <section id="contact">
        <div class="">
          <h2 class="font-fortitle md:text-5xl text-4xl md:mb-10">
            <span class="text-odd">Connect</span> with me
          </h2>
          <div
            class="md:flex gap-10 items-center justify-center md:h-[600px] relative top-10"
          >
            <div class="md:w-2/5">
              <p class="ml-auto md:text-3xl text-xl mb-8">
                Tell me how I can help you...
              </p>
              <div
                class="flex items-center gap-4 my-5 font-serif text-lg text-[#ccc]"
              >
                <div class="">
                  <use-icon icon="fa-phone" class="text-4xl"></use-icon>
                </div>
                <div class="">
                  Call: <br />
                  <a
                    href="tel:+233208232081"
                    class="hover:text-white transition"
                    >(+233) 208 232 081</a
                  >
                </div>
              </div>
              <div
                class="flex items-center gap-4 font-serif text-lg text-[#ccc]"
              >
                <div class="">
                  <use-icon icon="fa-envelope" class="text-4xl"></use-icon>
                </div>
                <div class="">
                  Email: <br />
                  <a
                    href="mailto:camoakohene84@gmail.com"
                    class="hover:text-white transition"
                    >camoakohene84@gmail.com</a
                  >
                </div>
              </div>
            </div>
            <div class="md:w-3/5 relative self-start md:top-0 top-14">
              <contact-card class=""></contact-card>
            </div>
          </div>
        </div>
      </section>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavigation from "./TheNavigation.vue";
import SkillCard from "./SkillCard.vue";
import ProjectsCard from "./ProjectsCard.vue";
import ContactCard from "./ContactCard.vue";
import TheFooter from "./TheFooter.vue";
import skills from "@/skills.json";

export default {
  components: {
    TheNavigation,
    SkillCard,
    ProjectsCard,
    ContactCard,
    TheFooter,
  },
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