<template>
  <nav class="nav py-2 sticky top-0 border-b z-10">
    <div class="flex justify-between items-center contain">
      <!-- LOGO -->
      <div class="md:basis-28 basis-20">
        <img
          src="logo-white.png"
          alt="Kriswale logo"
          class="w-full cursor-pointer"
          @click="scrollTop"
        />
      </div>
      <!-- LINKS -->
      <div class="hidden md:block">
        <a
          class="p-2 inline-block hover:-translate-y-1 transition"
          href="#about"
          >aboutMe</a
        >
        <a class="p-2 inline-block hover:-translate-y-1 transition" href="#work"
          >myWork</a
        >
        <a
          class="p-2 inline-block hover:-translate-y-1 transition"
          href="#contact"
          >contactMe</a
        >
      </div>
      <!-- ICON LINKS -->
      <div class="hidden md:block">
        <a href="" class="mx-1 text-2xl" title="toggle theme"
          ><use-icon icon="fa-solid fa-circle-half-stroke"
        /></a>
        <a href="" class="mx-1 text-2xl" title="settings"
          ><use-icon icon="fa-solid fa-gear"
        /></a>
      </div>

      <!-- Hamburgar for mobile navigation -->
      <div class="md:hidden">
        <use-icon icon="fa-solid fa-bars" class="text-2xl"></use-icon>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
  methods: {
    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.nav {
  background: hsl(223, 39%, 16%);
  background-image: conic-gradient(
    from 45deg at 50% 50%,
    blue,
    purple,
    purple,
    blue
  );
  background-blend-mode: multiply;
}
</style>