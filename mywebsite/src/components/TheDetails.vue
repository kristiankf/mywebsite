<template>
  <div id="details" class="details">
    <the-navigation
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{
        opacity: 1,
        transition: {
          opacity: {
            duration: 800,
            delay: 1000,
          },
        },
      }"
    ></the-navigation>
    <div class="contain max-w-6xl">
      <!--about me  -->
      <section id="about">
        <div class="flex my-32 gap-10 justify-center md:flex-row flex-col">
          <div
            class="md:w-1/2"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 300,
                },
                opacity: {
                  duration: 800,
                  delay: 300,
                },
              },
            }"
          >
            <h1 class="font-fortitle md:text-5xl text-4xl mb-10">
              <span class="text-odd">What</span> I do?
            </h1>
            <p class="text-[#ddd]">
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
          <div
            class="md:w-1/2 text-center"
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visibleOnce="{
              x: 0,
              opacity: 1,
              transition: {
                x: {
                  duration: 800,
                  delay: 700,
                },
                opacity: {
                  duration: 800,
                  delay: 700,
                },
              },
            }"
          >
            <iframe
              src="https://giphy.com/embed/ukMiDlCmdv2og"
              frameBorder="0"
              class="giphy-embed inline-block m-auto md:w-full md:h-full max-w-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h1
            class="font-fortitle md:text-5xl text-4xl mb-10"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 400,
                },
                opacity: {
                  duration: 800,
                  delay: 400,
                },
              },
            }"
          >
            <span class="text-odd">Skill</span> set
          </h1>
          <div class="skill-cards my-14 flex flex-wrap justify-center gap-5">
            <div
              v-for="skill in skills"
              :key="skill.id"
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visibleOnce="{
                y: 0,
                opacity: 1,
                transition: {
                  y: {
                    duration: 800,
                    delay: 400,
                  },
                  opacity: {
                    duration: 800,
                    delay: 400,
                  },
                },
              }"
            >
              <skill-card :skill="skill"></skill-card>
            </div>
          </div>
        </div>
      </section>

      <!-- My Work -->
      <section id="work">
        <div class="my-32">
          <h2
            class="font-fortitle md:text-5xl text-4xl mb-10"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 400,
                },
                opacity: {
                  duration: 800,
                  delay: 400,
                },
              },
            }"
          >
            <span class="text-odd">Projects</span> so far
          </h2>
          <p
            class="text-[#ddd]"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 400,
                },
                opacity: {
                  duration: 800,
                  delay: 400,
                },
              },
            }"
          >
            Explore some of the works that my expertise has brought into
            reality.
          </p>
          <div
            class="my-10"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 400,
                },
                opacity: {
                  duration: 800,
                  delay: 400,
                },
              },
            }"
          >
            <projects-card
              name="Lean Icon Technology"
              link="https://leanicontechnology.co.uk"
              logoimg="logo"
            >
              <template #about>
                Lean Icon Technology is a Training and Consulting Firm that
                improves your organizations performance and efficiency through
                Enterprise Agile Transformation with SAFe®, OKRs Implementation
                and Microsoft Adaptation.
              </template>
              <template #list1>I worked on building a responsive site</template>
              <template #list2
                >I designed based on UI provided on Figma</template
              >
              <template #list3>Built with Vue.js</template>
            </projects-card>
          </div>
          <div
            class="my-10"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 400,
                },
                opacity: {
                  duration: 800,
                  delay: 400,
                },
              },
            }"
          >
            <projects-card
              name="BRET"
              link="https://bret.preceptleadership.com/"
              logoimg="precept-logo"
            >
              <template #about
                >This platform identifies your key and pre-dominant drivers as
                enunciated by the 4 Drive Theory of Motivation. This is
                indicative of your Natural or Instinctive behavior &
                response.</template
              >
              <template #list1>I worked on building a responsive site</template>
              <template #list2
                >I designed based on UI provided on Figma</template
              >
              <template #list3>Built with Vue.js and TailwindCSS</template>
            </projects-card>
          </div>
        </div>
      </section>

      <!-- contact me -->
      <section id="contact">
        <div class="">
          <h2
            class="font-fortitle md:text-5xl text-4xl md:mb-1"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{
              y: 0,
              opacity: 1,
              transition: {
                y: {
                  duration: 800,
                  delay: 400,
                },
                opacity: {
                  duration: 800,
                  delay: 400,
                },
              },
            }"
          >
            <span class="text-odd">Connect</span> with me
          </h2>
          <div
            class="md:flex gap-10 items-center justify-center md:h-[600px] relative top-16"
          >
            <div
              class="md:w-2/5"
              v-motion
              :initial="{ opacity: 0, x: -150 }"
              :visibleOnce="{
                x: 0,
                opacity: 1,
                transition: {
                  x: {
                    duration: 800,
                    delay: 400,
                  },
                  opacity: {
                    duration: 800,
                    delay: 400,
                  },
                },
              }"
            >
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
            <div
              class="md:w-3/5 relative self-start md:top-0 top-14 mx-auto"
              v-motion
              :initial="{ opacity: 0, x: 150 }"
              :visibleOnce="{
                x: 0,
                opacity: 1,
                transition: {
                  x: {
                    duration: 800,
                    delay: 400,
                  },
                  opacity: {
                    duration: 800,
                    delay: 400,
                  },
                },
              }"
            >
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

<style scoped>
.details {
  background: hsl(224, 32%, 12%);
  background-image: conic-gradient(
    from 0deg at 50% 50%,
    blue,
    purple,
    purple,
    blue
  );
  background-blend-mode: multiply;
}
</style>