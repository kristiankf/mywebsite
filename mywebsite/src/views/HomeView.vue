<template>
  <div class="home">
    <landing-header></landing-header>
  </div>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
// @ is an alias to /src

export default {
  components: { LandingHeader },
  name: "HomeView",
};
</script>
