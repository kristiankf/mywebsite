<template>
  <div class="home text-white">
    <landing-header @scroll="scroll"></landing-header>
    <the-details></the-details>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingHeader from "@/components/LandingHeader.vue";
import TheDetails from "@/components/TheDetails.vue";

export default {
  components: { LandingHeader, TheDetails },
  name: "HomeView",
  methods: {
    scroll(section) {
      setTimeout(() => {
        this.$router.push({ path: "/", hash: `#${section}` });
        document.body.style.overflow = "auto";
      }, 800);
    },
  },
};
</script>
