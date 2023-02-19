<template>
  <nav class="nav py-2 sticky top-0 border-b bg-forbg z-10">
    <div class="flex justify-between items-center contain">
      <!-- LOGO -->
      <div class="d basis-28">
        <img src="logo-white.png" alt="Kriswale logo" class="w-full" />
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
        <a href="" class="px-1" title="toggle theme"
          ><use-icon icon="fa-solid fa-circle-half-stroke"
        /></a>
        <a href="" class="px-1" title="settings"
          ><use-icon icon="fa-solid fa-gear"
        /></a>
      </div>

      <!-- Hamburgar for mobile navigation -->
      <div class="md:hidden">
        <use-icon icon="fa-solid fa-bars"></use-icon>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>