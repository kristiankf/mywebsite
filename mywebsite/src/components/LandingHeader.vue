<template>
  <div class="text-white" @load="disableScroll()">
    <header class="header h-screen relative overflow-hidden">
      <img
        class="
          w-full
          h-full
          object-cover
          absolute
          top-0
          left-0
          right-0
          bottom-0
          scale-100
          transition
          ease-out
          delay-1000
          duration-[5000]
        "
        id="zoom-image"
        src="@/assets/images/header-background.jpg"
        alt=""
      />
      <div
        class="
          overlay
          absolute
          top-0
          left-0
          right-0
          bottom-0
          backdrop-blur-sm
          bg-black/50
        "
      ></div>
      <div
        class="
          contain
          2xl
          m-auto
          lg:px-24
          flex
          items-center
          justify-center
          h-full
          relative
          z-10
        "
      >
        <div style="text-align: center">
          <h1
            class="
              title
              mb-4
              font-fortitle
              lg:text-8xl
              sm:text-6xl
              text-5xl text-white
            "
          >
            <span class="text-odd">Kris Wale,</span> The Website!
          </h1>
          <p class="text-white">
            I build innovative and interactive web apps tailored to your
            business requirements &#128521;
          </p>
          <a
            @click="$emit('scroll', 'details')"
            href="#"
            class="
              button
              inline-block
              py-4
              px-10
              bg-white/30
              rounded-md
              text-xl
              transition
              backdrop-blur-lg
              font-alternate
              mt-6
              text-white
            "
            >getIntroduced

            <use-icon
              icon="fa-chevron-down"
              class="
                material-symbols-outlined
                align-middle
                text-odd
                font-semibold
                text-base
                animate-bounce
              "
            ></use-icon
          ></a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "LandingHeader",
  methods: {
    disableScroll() {
      if (!this.$route.hash) {
        document.body.style.overflow = "hidden";
      }
    },
  },
  mounted() {
    this.disableScroll();
  },
};
</script>