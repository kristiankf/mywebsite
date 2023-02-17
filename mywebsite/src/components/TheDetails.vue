<template>
  <div id="details">
    <the-navigation></the-navigation>
    <div class="contain">
      <!--about me  -->
      <section>
        <div class="flex my-32 gap-3">
          <div class="w-2/4">
            <h1 class="font-fortitle text-5xl mb-10">
              <span class="text-odd">What</span> I do?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repellendus iusto, dignissimos animi unde vel rerum, fuga quo
              inventore id omnis vero asperiores deserunt eveniet magni
              molestias facere dicta nesciunt? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minima dolorem facere odit nemo
              corrupti aperiam enim atque nulla pariatur facilis.
            </p>
          </div>
          <div class="w-2/4 text-center">
            <iframe
              src="https://giphy.com/embed/ukMiDlCmdv2og"
              width="480"
              height="360"
              frameBorder="0"
              class="giphy-embed inline-block m-auto"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/life-programmer-ukMiDlCmdv2og"
                >via GIPHY</a
              >
            </p>
          </div>
        </div>
        <div>
          <h1 class="font-fortitle text-5xl mb-10">
            <span class="text-odd">Skill</span> set
          </h1>
          <div class="skill-cards my-14">
            <skill-card></skill-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./TheNavigation.vue";
import SkillCard from "./SkillCard.vue";
export default {
  components: { TheNavigation, SkillCard },
  name: "TheDetails",
};
</script>